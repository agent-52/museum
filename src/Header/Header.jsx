import "./Header.css"
import Button from "../Button/Button.jsx"

const Header = () =>{

  return(
    <header>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <Button text="Register Museum"/>
      </div>
      <div>
        
        <Button text="User login" classArray="blackHover"/>
        <Button text="Admin login" classArray="bgW1 cB1 whiteHover"/>
      </div>
    </header>
  )
}

export default Header