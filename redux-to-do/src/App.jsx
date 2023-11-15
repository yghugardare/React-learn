import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddToDo from './components/AddToDo'
import ToDoItems from './components/ToDoItems'

function App() {
 
 const [obj, setObj] = useState({id:1,text:""})
 function handleEdit(todo){
  setObj({...todo});

 }

  return (
    <div className='bg-slate-800 text-white w-full h-screen'>
      <h1 className='text-2xl text-center py-2'>To Do list</h1>
      <AddToDo obj={obj} setObj={setObj}/>
      <ToDoItems onEdit={handleEdit}/>
    </div>
  )
}

export default App
