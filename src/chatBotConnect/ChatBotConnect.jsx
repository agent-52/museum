import { useState } from "react";
import { useEffect } from "react";

const ChatBotConnect = () =>{
  const [data, setData] = useState(null);
 
  useEffect(() => {
    
    fetch("http://localhost:5000/api", {method:"GET"}).then(
      response => response.json()
    ).then(
      newdata => {
        console.log(newdata)
        setData(newdata)}
    ).catch(error => console.log(error))
    
    
  }, []);
  
  return(
    <div></div>
  )
}

export default ChatBotConnect