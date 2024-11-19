
import { useState } from 'react'
import './App.css'

function App() {
  
  let[counter,setCounter]=useState(0)
  const addValue=()=>{
    let max=20
    if(counter===max){
      setCounter(counter)
    }else{
      setCounter(counter+1)
    }
  }
  const removeValue=()=>{
    let min=0
    if(counter===min){
      setCounter(counter)
    }else{
      setCounter(counter-1)
    }
  }
  return (
    <>
    <h1>Welcome to React</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br /><br />
    <button onClick={removeValue}>Dec value</button>
    </>
  )
}

export default App
