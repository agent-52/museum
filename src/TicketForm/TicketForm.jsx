import { useEffect } from "react"
import "../UserInfoForm/UserInfoForm.css"
import { useState } from "react"
import { mId } from "../MuseumHomePage/MuseumHomePage"
import packageDetailslogo from "/Images/formIcons/pakagePageLogo.png"



const TicketForm = () =>{
  const [inputs, setInputs] = useState({
    
  })
  const [packageDetails, setPackageDetails] = useState([])
  const [selectedPackage, setSelectedPackage] = useState(0)
  const [price, setPrice] = useState("")

  useEffect(() =>{

    async function getPackageDetails(){
      const museumNumber = mId
      const packagePageDetails = await fetch(`http://localhost:8081/package/${museumNumber}/packages`).then(res => res.json())
      console.log(packagePageDetails)
      setPackageDetails(packagePageDetails)
    }

    getPackageDetails()
    
  },[])
  const handleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  function handleSelectPackage(index, details){
    setSelectedPackage(index)
    setPrice(details.price)

  }
  function getDataToPost(){
    const name = "payment_amount"
    const value = price*inputs.total_people
    const name2 = "booking_date"
    const value2 = new Date()
    const dataToSend = {...inputs, [name]: value, [name2]: value2 }
    return dataToSend
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await fetch("http://localhost:8081/booking/create",{
      method: "post",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getDataToPost())
    })
    if (response.ok) {
      console.log("booking data successfully sent")
    }else{
      console.log("booking data not sent")
    }
    console.log(getDataToPost())
    

    // ////
  }



  return(
    <div className="h100 flexC justifyC alignC gap1 clB">
      <div className="flexC alignC gap00 textC">
        <div className="formLogoBox"><img className="boxImage " src={packageDetailslogo} alt="" /></div>
        <h1 className="lightBold formHeading">Make a booking</h1>
      </div>
      <form onSubmit={handleSubmit} className="flexC justifyC gap0">
        
        <div className="flexC gap000">
          <label htmlFor="name">Packages: </label>
          <div className="flex gap1">
          {packageDetails.map((details, index) => {
            return(
              <div className="packageCard" key={index} onClick={() =>{handleSelectPackage(index, details)}}>
                <div>{details.package_type}</div>
                <div>{details.pname}</div>
                <div>
                  <ul>Features</ul>
                  {details.l.map((ds, i) =>{
                    return(
                      <li key={i}>{ds}</li>

                    )
                  })}
                </div>
                <div className="flex gap00">
                  <div>Max people allowed: </div>
                  <div>{details.group_size}</div>
                </div>
                <div>₹{details.price}</div>
              </div>
            )
          })}
          </div>
          {/* <input type="text" name="name" id="name" className=" whiteHover" onChange={handleChange} value={inputs.name || ""} placeholder="name" required/> */}
        </div>
          
        
        <div className="flexC gap000">
          <label htmlFor="visit_date">Visit date: </label>
          <input type="date" className=" whiteHover" name="visit_date" id="visit_date" onChange={handleChange} value={inputs.visit_date || ""}   required/>
        </div>
        <div className="flexC gap000">
          <label htmlFor="visit_time">Timeslot: </label>
          <input name="visit_time" className=" whiteHover" type="time" id="visit_time" onChange={handleChange} value={inputs.visit_time || ""}  />
        </div>
        <div className="flexC gap000"> 
          <label htmlFor="total_people">Total visitors: </label>
          <input type="number" name="total_people" className=" whiteHover" id="total_people" onChange={handleChange} value={inputs.total_people}  required />
        </div>
        <div className="flex gap000">
          <div>Total Amount: </div>
          <div>₹{price*inputs.total_people}</div>
          
        </div>
        <div className="mgB1">
          <button type="submit" id="submitButton" className="blackHover">Checkout</button>
        </div>
        
        
        
        
        
        {/* <input type="date" name="registrationDate" id="registrationDate" /> */}
        
      </form>
    </div>
  )
}

export {
  TicketForm
}