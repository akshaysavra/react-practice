
import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNum] = useState(false);
  const [charAllow, setchar] = useState(false);
  const [passWord, setPassWord] = useState("");

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < length; i++) {
      if (numAllow) str += "0123456789";
      if (charAllow) str += "!@#$%^&*_+=-";

      let char = Math.floor(Math.random() * str.length + 1 );

      pass += str.charAt(char);
    }
    setPassWord(pass);
  }, [length, numAllow, charAllow, setPassWord]);

  useEffect(()=>{
    passGen()
  },[length,numAllow,charAllow,passGen])

 const copy = useCallback(()=>{
   window.navigator.clipboard.writeText(passWord)
 },[passWord])

 useEffect(()=>{
  copy()
 },[length, numAllow, charAllow, setPassWord,copy])

//  let copy1= document.querySelector(".copy");
 


  return (
    <>
      <div className="w-full max-w-md  mx-auto px-5 my-8 text-center text-white bg-gray-900 rounded-lg">
        <h2 className="text-3xl my-4">Password Generator</h2>
        <div className="flex justify-center mb-2 ">
          <input
            className="px-3 py-2 bg-white text-black  rounded-tl-lg rounded-bl-lg"
            placeholder="Password"
            value={passWord}
            readOnly
            type="text"
          />
          <button className= " bg-blue-600 px-1 rounded-tr-lg rounded-br-lg ">Copy</button>
        </div>
          <p className="copy m-2 " >Copied</p>

        <div className="flex ">
          <div>
            <input
             type="range"
             min={6}
             max={10}
             value={length}
             onChange={(e)=>{
              setLength(e.target.value)
             }}
             />
             <label className="mx-2">Length : {length} </label>
          </div>
          <div>
            <input 
            className="mx-3"
            defaultChecked = {numAllow}
            type="checkbox"
            onChange={()=>{
              setNum((prev)=> !prev)
            }}
             />
             <label  > Number </label>
          </div>
          <div>
            <input 
             className="mx-3"
            defaultChecked = {charAllow}
            onChange={()=>{
                
              setchar((prev)=> !prev)
            }}
            type="checkbox" 
             />
             <label > Char</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
