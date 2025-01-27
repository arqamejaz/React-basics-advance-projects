import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)

  const addCounter = () => {
    console.log(counter)
    setCounter(counter + 1)
  }
  const removeCounter = () => {
    setCounter(counter - 1)
   }
  return (
    <>
      <h1>useState through Counter app</h1>
      <p>Counter: {counter}</p>
      <button onClick={addCounter}>Add Value</button>
      <br />
      <button onClick={removeCounter}>Remove Value</button>
    </>
  )
}

export default App
