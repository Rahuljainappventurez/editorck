import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RichTextEditor from './components/RichTextEditor'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>CK Editor</h1>
     <RichTextEditor />
    </>
  )
}

export default App
