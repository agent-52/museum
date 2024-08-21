import "./Bot.css"
import message from "/Images/message.png"

const Bot = () =>{

  return(
    <div className="bot">
      <button className="botIcon"><img src={message} alt="" className="boxImage" /></button>
    </div>
  )
}

export default Bot