import "./dualityPage.css"
import { Link } from "react-router-dom"

const DualityPage = () =>{

    return(
        <div className="dualityPage body flexC alignC justifyC pdI2 gap4'">
            <Link to="/App"><div className="boxes">
               Booking Portal 
            </div></Link>
            <a href="https://ticket-admin-iota.vercel.app/dashboards/modern"><div className="boxes">
                Admin Portal
            </div></a>
        </div>
    )
}

export default DualityPage