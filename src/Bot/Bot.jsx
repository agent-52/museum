import "./Bot.css"
import message from "/Images/message.png"

const Bot = () =>{

  return(
    <a href="/bot/index.html"><div className="bot">
      <button className="botIcon"><img src={message} alt="" className="boxImage" /></button>
    </div></a>
  )
}

export default Bot