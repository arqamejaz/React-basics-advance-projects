import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1 className='text-white font-bold text-2xl'>Todo App in React with Redux ToolKit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
