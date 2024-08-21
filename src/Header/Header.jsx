import "./Header.css"
import Button from "../Button/Button.jsx"

const Header = () =>{

  return(
    <header className="flex pdI2 justifyBw w100 pdB0 alignC fixed">
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
    </header>
  )
}

export default Header