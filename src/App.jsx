import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    fetch('https://render-practice-backend.onrender.com')
      .then((response) => response.json())
      .then((result) => {
        setData(result)
        console.log(data)
      })
  }, [])

  return (
    <>
      <h1>Render practice is NICE</h1>
      <h2>{JSON.stringify(data)}</h2>
    </>
  )
}

export default App
