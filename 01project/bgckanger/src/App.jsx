
import { useState } from 'react'


function App() {
 
let [color,setColor ] = useState("black")
  return (
    <>
      <div className = " w-full h-screen flex justify-center"  style={{backgroundColor:color}} >

        <div
        className="flex bg-white fixed bottom-9 px-5 py-5  justify-center gap-3 rounded-full "
        >
          <button
          className='bg-blue-600 text-center px-4 py-4 text-white rounded-full ' onClick={()=>setColor("blue")}
          >blue</button>
          <button
          className='bg-red-600 text-center px-4 py-4 text-white rounded-full ' onClick={()=>setColor("red")}
          >red</button>
          <button
          className='bg-green-600 text-center px-4 py-4 text-white rounded-full ' onClick={()=>setColor("green")}
          >green</button>
          <button
          className='bg-black text-center px-4 py-4 text-white rounded-full ' onClick={()=>setColor("black")}
          >black</button>
        </div>


      </div>

    
    </>
  )
}

export default App
