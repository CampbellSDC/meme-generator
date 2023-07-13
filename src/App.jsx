import { useState } from 'react'
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Form />
    </>
  )
}

export default App
