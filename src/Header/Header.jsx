import "./Header.css"
import Button from "../Button/Button.jsx"
import { Link } from "react-router-dom"
import { useState } from "react"
import { HashLink } from 'react-router-hash-link';
import backArrow from "../assets/arrow.png"

const Header = () =>{

  const [navVisibility, setNavVisibility] = useState(false)
  function updateNavVisibilty(){
    if(navVisibility == true){
      setNavVisibility(false)
      document.querySelector(".navBarMobile").classList.add("navHidden")
      console.log("hidden")
    }else{
      setNavVisibility(true)
      document.querySelector(".navBarMobile").classList.remove("navHidden")
      console.log("visible")
    }
  }

  return(
    <header className=" ">
      <div className="header flex z100 pdI3 justifyBw w100 pdB0 alignC fixed">
          <div className="flex gap1 alignC">
            <div className="lightBold cLw">museums</div>
            <div className="lightBold cLw">tickets</div>
            <div className="lightBold cLw"></div>
            <Button text="Register Museum"/>
          </div>
          <div className="flex gap1">
            
            <Button text="User login" classArray="blackHover"/>
            <Button text="Admin login" classArray="bgW1 cB1 whiteHover"/>
          </div>

          {/* <div className="header2">
          <Link className="textDecNone" to="/"><div className="logo text-m1 font-medium1">IET Study Hub</div></Link>
          <div className="navMobile" onClick={updateNavVisibilty}>
            <div className="stick"></div>
            <div className="stick"></div>
            <div className="stick"></div>
          </div>
        </div> */}
      </div>

    {/* <div className="navBarMobile navHidden " >
      <div className="navMobile cross" onClick={updateNavVisibilty}>
        <div className="imgBox1"><img src={backArrow} alt="" /></div>
        
      </div>
      <Link to="/" className="textDecNone"><div className="text-medium" onClick={updateNavVisibilty}>Home</div></Link>
      
      <HashLink smooth to="/#cardSection" className="textDecNone"><div className="text-medium">Museums</div></HashLink>
    </div> */}
    </header>
  )
}

export default Header