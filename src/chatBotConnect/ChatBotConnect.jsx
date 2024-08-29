import { useState } from "react";
import { useEffect } from "react";

const ChatBotConnect = () =>{


  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("https://server1-production-9559.up.railway.app/", {mode: "no-cors"})
     .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        console.log(response)
        return response.json();
      })
      .then((response) =>{
        console.log(response)
        return setData(response)
      } )
      
      .catch((error) => {
        console.log(error)
        return setError(error)}
        )
      .finally(() => setLoading(false));
    
    // fetch("https://server1-production-9559.up.railway.app/", {
    //    mode: "cors",
    //    method: 'post',
    //    headers: {'Content-Type':'application/json'},  
    //     body: JSON.stringify({
    //      "firstParam": 'yourValue',
    //       "secondParam": 'yourOtherValue',
    //     })
    //   })
    // .then((response) => {
    //   if (response.status >= 400) {
    //     throw new Error("server error");
    //   }
    //   return response.json();
    // })
    // .then((response) => setData(response))
    // .catch((error) => setError(error))
    // .finally(() => setLoading(false));
  }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

  return(
    <div className="clB">{data}</div>
  )
}

export default ChatBotConnect