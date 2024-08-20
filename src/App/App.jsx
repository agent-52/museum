import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../Header/Header'
import Button from '../Button/Button'
import searchIcon from "/Images/searchIcon.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="dec1Button">Online Tickets</div>
      <h1>Explore the Great <span>INDIAN</span> History</h1> 
      <h2>Buy <span>Tickets</span> of museums <span>Online</span></h2>
      <div>invest your time exploring rather than waiting in a queue</div>

      <div>
        <input type="text" className='serachBox' placeholder='Search Museum name'/>
        <button className='searchButton'><img src={searchIcon} alt="" className='boxImage'/></button>
      </div>
    </>
  )
}

export default App
