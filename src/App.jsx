import { useState } from 'react'
import Rate from './components/Rate/Rate'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Rate/>
    </>
  )
}

export default App
