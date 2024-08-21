import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../Header/Header'
import Button from '../Button/Button'
import searchIcon from "/Images/searchIcon.png"

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin)


function App() {
  
  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.to("span.india", {
      text: "BHARAT",
      duration:1
    })
    tl.to("span.india", {
      text: "भारत",
      duration:1
    })
    tl.to("span.india", {
      text: "ਭਾਰਤ",
      duration:1
    })
    tl.to("span.india", {
      text: "ಭಾರತ",
      duration:1
    })
    tl.to("span.india", {
      text: "INDIAN",
      duration:1
    })
  })

  return (
    <div className='body flexC justifyC border '>
      <Header />
      <div className='flexC justifyC alignC gap1 h100'>
        <div className="dec1ButtonWrapper"><div className='bgW'><div className='dec1Button'>Online Museum Tickets</div></div></div>
        <div className='mgB1'>
          <h1 className='fsXl lightBold'>Explore the great</h1>
          <h1 className='fsXl lightBold'><span className='india' id='india'></span> History</h1> 
        </div>
        <div className='fs1 maxW40Ch'>Buy <span className='bold'>Tickets</span> of museums <span className='bold'>Online</span> and invest your time exploring rather than waiting in a queue</div>
      

        <div className='flex gap00 justifyC wMax'>
          <input type="text" className='searchBox whiteHover textC' placeholder='Search Museum name'/>
          <button className='searchButton'><img src={searchIcon} alt="" className='boxImage'/></button>
        </div>
      </div>
    </div>
  )
}

export default App
