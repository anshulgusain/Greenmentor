import {Routes,Route} from "react-router-dom"

import Home from "../Components/Home"
import About from "../Components/About"
import Create from "../Components/Create"
import Edit from "../Components/Edit"
import Login from "../Components/Login"
import Signup from "../Components/Signup"
import Navbar from "../Components/Navbar"

const AllRoutes=()=>{
    return<>
    <Navbar />
    <Routes>
        <Route path="/home" element={<Home />}></Route>
        {/* <Route path="/" element={<About />}></Route> */}
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
    </Routes>
    </>
    }
    
    export default AllRoutes