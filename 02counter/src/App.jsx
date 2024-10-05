import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(5);
//  let counter=5;
 const addValue=()=>{
  counter+=1;
  setCounter(counter);
 }
 const removeValue=()=>{
  if(counter>0){
  setCounter(counter-1);
  }
  else{
    alert("You cant set the value in negative")
  }
 }
 const resetValue=()=>{
  setCounter(5);
 }
  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
      <br/>
      <button onClick={resetValue}>Set Value to 5</button>

    </>
  )
}

export default App
