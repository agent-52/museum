import { useEffect } from "react"
import "./SuccessPage.css"
import successIcon from "/Images/successIcon.png"


const SuccessPage = () =>{
  
  useEffect(() =>{
    async function getEmail(){
      
     await fetch("http://localhost:8081/api/visit/send-email").catch((error) => console.log(error))
     document.querySelector(".emailText").textContent = `Ticket details sent at your registered ${<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">"email"</a>}`
      
    }
    getEmail()
    
  })

  return(
    <div className="h100 successPage clB">
      <div className="successIcon"><img src={successIcon} className="boxImage" alt="" /></div>
      <div className="fsXl lightBold">Success</div>
      <div className="fs2 emailText">Payment Completed Successfully</div>
      <div></div>

    </div>
  )
}

export default SuccessPage