

import axios from "axios"
import {useNavigate} from 'react-router-dom'
import "../styles/signup.css"
import { useState } from "react"
const Login=()=>{
    const navigate=useNavigate()
   
  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")
  const [error, setError] = useState(null);

  const searchData=async ()=>{
 const user={
  
    email: email,
    
    password: password
 }

 try{
    const response=await axios.post("http://localhost:8080/login",user)
     console.log("Login Successfull")
     alert(response.data)
     localStorage.setItem("token", response.data.token)

     alert(response.data.msg)
     if(response.data.msg==="Logged in Succesfully"){
        navigate('/home')
     }
     
 }catch(err){
    console.log(err)
    setError(error)
    
 }
  }

  const HandleSubmit=()=>{
    searchData()
  }
    return(<>
    <div className="signup_parent">
        <div className="signup_heading">
            <div className="text">Login</div>
            <div className="underline"></div>

        </div>
<div className="allinput">
        
        <div className="input">
            <input type="email" placeholder="Email" onChange={((e)=>{
                setEmail(e.target.value)
            })}/>

        </div>
        
        <div className="input">
            <input type="text" placeholder="Password" onChange={((e)=>{
                setPassword(e.target.value)
            })}/>
        </div>
        </div>
<div className="submit_parent">
    <div className="submit" onClick={HandleSubmit}>Login</div>
</div>
<div className="signup" onClick={(()=>{
          navigate("/signup")
        })}>Click to Sign-Up</div>
      </div>


  
    </>)
    }
    
    export default Login