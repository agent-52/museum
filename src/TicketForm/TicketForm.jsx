import { useEffect } from "react"
import "../UserInfoForm/UserInfoForm.css"

async function getPackageDetails(){

  const packagePageDetails = await fetch(`http://localhost:8081/package/${museumNumber}/packages`).then(res => res.json())

  return packagePageDetails
}
const TicketForm = () =>{
  const [inputs, setInputs] = useState({
    
  })

  useEffect(() =>{

    getPackageDetails()
    
  })
  const handleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }



  return(
    <div>
      hi
    </div>
  )
}

export {
  TicketForm
}