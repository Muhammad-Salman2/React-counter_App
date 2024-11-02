import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'
function App() {
  const [num, setnum] = useState(0)

  return (
    <>
      <div className='main-container'>
        <button onClick={() => {
          setnum(num + 1)

        }}>Add</button>
        <p>{num}</p>
        <button onClick={() => {
          setnum(num - 1)
        }}>minus</button>
      </div>
    </>
  )
}

export default App
