import { Link } from "react-router-dom"

import "../styles/navbar.css"

const Navbar=()=>{
    return(
        <div>
      <div className="parent">
        <div className="container">
            <Link to="/" className="heading">
                <span>Taskify</span>
            </Link>

           <ul className="menu">
            <li className="item">
                <Link to= "/home" className="links">
                    Home
                </Link>
            </li>
            <li className="item">
                <Link to= "/create" className="links">
                    Create
                </Link>
            </li>
            <li className="item">
                <Link to= "/edit" className="links">
                    Edit
                </Link>
            </li>
           
            <li className="item">
                <Link to= "/" className="links">
                    Login
                </Link>
            </li>
           </ul>
        </div>

      </div>



        </div>
    )
}
export default Navbar