import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-800 text-white w-full h-screen'>
      <h1 className='text-2xl text-center'>Hello </h1>
    </div>
  )
}

export default App
