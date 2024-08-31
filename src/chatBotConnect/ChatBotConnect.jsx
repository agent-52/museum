import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChatBotConnect = () =>{
  const [data, setData] = useState(null);
  let navigate = useNavigate()
  useEffect(() => {
    
    fetch("https://server1-production-9559.up.railway.app/api", {method:"GET"}).then(
      response => response.json()
    ).then(
      newdata => {
        console.log(newdata)
        return newdata}
    ).then((newdata) =>{
      fetch("", {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newdata)
      }).then()
      .catch((error) => console.log(error)
        
      )
    }
      
    ).catch(error => console.log(error))
    
    
  }, []);
  
  return(
    <div></div>
  )
}

export default ChatBotConnect