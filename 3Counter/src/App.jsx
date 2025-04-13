import { useState } from 'react'

import './App.css'

function App() {
  let [counter,setCounter] = useState(1)
  let addValue = ()=>{
    if(counter == 20){
      setCounter(20)
    }else{
      setCounter(counter + 1)
    }
  }
  let removeValue = ()=>{
    if(counter == 0){
      setCounter(0)
    }else{
      setCounter(counter - 1)
    }
  }
 

  return (
    <>
    <div>
      <h1>Counter value Is {counter}</h1>
      <button onClick = {addValue}>add {counter}</button>
      <button onClick = {removeValue}>remove {counter}</button>
    </div>
     
    </>
  )
}

export default App
