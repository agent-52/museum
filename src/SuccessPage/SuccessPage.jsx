import { useEffect } from "react"
import "./SuccessPage.css"
import successIcon from "/Images/successIcon.png"


const SuccessPage = () =>{
  
  useEffect(() =>{
    async function getEmail(){
      
     await fetch("http://localhost:8081/api/visit/send-email").catch((error) => console.log(error))
     console.log("email sent")
     
      
    }
    getEmail()
    
  })

  return(
    <div className="h100 successPage clB">
      <div className="successIcon"><img src={successIcon} className="boxImage" alt="" /></div>
      <div className="fsXl lightBold">Success</div>
      <div className="fs2 emailText">Payment Completed Successfully</div>
      <div>Ticket details sent at your registered email</div>

    </div>
  )
}

export default SuccessPage