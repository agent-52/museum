import { useState } from "react"
import "./UserInfoForm.css"
import userInfoFormLogo from "/Images/formIcons/userInfoLogo.png"

const UserInfoForm = () =>{
  const [inputs, setInputs] = useState({
    
  })
  const handleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
 
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await fetch("http://localhost:8081/user/save",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs)
    })
    if (response.ok) {
      const uid = await response.json()
      console.log(`User created with ID: ${uid}`)
    }else{
      console.log("Failed to create user")
    }
    console.log(inputs)
  }

  return(
    <div className="h100 flexC justifyC alignC gap1 clB">
      <div className="flexC alignC gap00 textC">
        <div className="formLogoBox"><img className="boxImage " src={userInfoFormLogo} alt="" /></div>
        <h1 className="lightBold formHeading">Enter your details</h1>
      </div>
      <form onSubmit={handleSubmit} className="flexC justifyC gap0">
        
        <div className="flexC gap000">
          <label htmlFor="name">Full Name: </label>
          <input type="text" name="name" id="name" className=" whiteHover" onChange={handleChange} value={inputs.name || ""} placeholder="name" required/>
        </div>
          
        
        <div className="flexC gap000">
          <label htmlFor="email">Email: </label>
          <input type="email" className=" whiteHover" name="email" id="email" onChange={handleChange} value={inputs.email || ""}  placeholder="email" required/>
        </div>
        <div className="flexC gap000">
          <label htmlFor="number">Contact: </label>
          <input type="number" className=" whiteHover" name="mobile" id="number" onChange={handleChange} value={inputs.mobile || ""} placeholder="contact" />
        </div>
        <div className="flexC gap000"> 
          <label htmlFor="nationality">Nationality: </label>
          <select name="nationality" className=" whiteHover" id="nationality" onChange={handleChange} value={inputs.nationality || "Indian "}  required>
            <option value="Indian">Indian</option>
            <option value="Foreigner">Foreigner</option>
          </select>
        </div>
        <div className="flexC gap000">
          <label htmlFor="dob">Date of birth</label>
          <input type="date" className=" whiteHover" name="dob" id="dob" onChange={handleChange} value={inputs.dob || ""}  required/>
        </div>
        <div className="mgB1">
          <button type="submit" id="submitButton" className="blackHover">Submit</button>
        </div>
        
        
        
        
        
        {/* <input type="date" name="registrationDate" id="registrationDate" /> */}
        
      </form>
    </div>
  )
}

export default UserInfoForm