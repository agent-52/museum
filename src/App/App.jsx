import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../Header/Header'
import Button from '../Button/Button'
import searchIcon from "/Images/searchIcon.png"

import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Bot from '../Bot/Bot'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import MuseumDataArray from '../MuseumData/MuseumData'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin)


function App() {
  const { museum } = useParams();
  const [museumNumber, setMuseumNumber] = useState(0)
  
  const updateMuseumNumber = () =>{
    const select = document.querySelector("select")
    setMuseumNumber(select.value)
  }
  console.log(museum)
  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.to("span.india", {
      text: "विज्ञान",
      duration:0.7
    })
    tl.to("span.india", {
      text: "vigyan",
      duration:0.7
    })
    tl.to("span.india", {
      text: "বিজ্ঞান",
      duration:0.7
    })
    tl.to("span.india", {
      text: "Science",
      duration:0.7
    })
  })

  return (
    <>
    <Header />
    <div className='body flexC alignC justifyC pdI2 gap4'>
      
      <div className='flexC justifyC alignC gap1 overflowXH mgT7'>
        <div className="dec1ButtonWrapper"><div className='bgW'><div className='dec1Button'>Online Museum Tickets</div></div></div>
        <div className='mgB1 textC'>
          <h1 className='fsXl lightBold'>Book your <span className='india' id='science'></span></h1>
          <h1 className='fsXl lightBold'>Museum visit now</h1> 
        </div>
        <div className='fs1 maxW40Ch textC'>Buy <span className='bold'>Tickets</span> of museums <span className='bold'>Online</span> and invest your time exploring rather than waiting in a queue</div>
      

        <div className='flex gap00 justifyC'>
          {/* <input type="text" name="museumName" id="museumName" className='searchBox whiteHover textC' placeholder='Search Museum name' list='museumNames'/> */}
          <select name="museumName" id="museumName" className=' searchBox whiteHover textC' onClick={() => updateMuseumNumber()}>
            
            <option value="1">National Science Centre, Delhi</option>
            <option value="2">Nehreu Science Center, Mumbai</option>
            <option value="3">Birla Industrial & Technological Museum, Kolkata</option>
            <option value="4">Visvesvaraya Industrial & Technological Museum, Bangalore</option>
            <option value="5">National Science Centre, Guwahati</option>
            <option value="6">ShriKrishna Science Centre, Patna</option>
            <option value="7">North Bengal Science Centre, Siliguri</option>
            <option value="8">Bardhaman Science Centre, Bardhaman</option>
            <option value="9">District Science Centre, Purulia</option>
            <option value="10">Digha Science Centre, Digha</option>
            <option value="11">Central Research and Training Laboratory, Kolkata</option>
            <option value="12">Regional Science Centre, Bhubaneswar</option>
            <option value="13">Dhenkanal Science Centre, Dhenkanal and Kapilas Science Park</option>
            <option value="14">Regional Science City, Lucknow</option>
            <option value="15">Palampur Science Centre, Palampur</option>
            <option value="16">Kurukshetra Panorama and Science centre, Kurukshetra</option>
            <option value="17">Raman Science Centre & Planetarium, Nagpur</option>
            <option value="18">Regional Science Centre, Bhopal</option>
            <option value="19">Goa Science Centre, Panjim</option>
            <option value="20">District Science Centre, Dharampur</option>
            <option value="21">Regional Science Centre & Planetarium, Calicut</option>
            {/* <option value="21">Regional Science Centre & Planetarium, Calicut</option> */}
            <option value="22">Regional Science Centre, Tirupati</option>
            <option value="23">District Science Centre, Gulbarga</option>
            <option value="24">District Science Centre, Tirunelveli</option>
          </select>
          <Link to={`/museumHomePage/${museumNumber}`}><button className='searchButton'><img src={searchIcon} alt="" className='boxImage'/></button></Link>
        </div>
        <div></div>
        
        
      </div>
      
      <div className="cardSection" id='cardSection'>
          
          {MuseumDataArray.map((museum, index) =>{
            // if(index>=4){
            //   return
            // }
            return(
              <div className="museumCard" key={index}>
                <img src={museum.img} alt={museum.name+" image"} className="boxImg museumImage" />
                <div className='flexC pd1 gap0 justifyBw '>
                  <h3>{museum.name}</h3>
                  <p className='fs0'>{museum.desc}</p>
                  <Link to={`/museumHomePage/${index+1}`}><Button text="Buy Ticket" classArray="blackHover"/></Link>
                </div>
              </div>
            ) 
          })}
      </div>
      
      
      
      
    </div>
    <Bot />
    

    </>
  )
}

export default App
