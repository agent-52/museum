import { useState } from "react"
import "./PopUp.css"
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const PopUp = () =>{

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     <Button text="Buy Ticket" classArray="blackHover fs1" onClick={togglePopup}/>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-button" onClick={togglePopup}>×</button>
            <div className="popup-content">
              <a href="/bot/index.html"><div className="box">Book via chatbot</div></a>
              <div className="box">Book via Call</div>
              <Link to="/userInfoForm"><div className="textC">Book via form filling</div></Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PopUp