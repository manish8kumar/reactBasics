import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componenets/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-2xl" >Tailwind Test</h1>
      <Card sub="Hindi" /> 
      <Card sub="English" rating="4.1"/> 
      <Card sub="DSA" rating="4.3"/> 
      <Card sub="react" rating="4.5"/> 
          
    </>
  )
}

export default App
