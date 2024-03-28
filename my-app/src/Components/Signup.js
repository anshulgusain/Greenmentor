
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import "../styles/signup.css"
import { useState } from "react"
const Signup=()=>{
    const navigate=useNavigate()
    const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null);

  const searchData=async ()=>{
   
 const user={
    name:name,
    email: email,
    mobile:mobile,
    password: password
 }
 console.log(user)

 try{
    const response=await axios.post("http://localhost:8080/signup",user)
     console.log("Signup Successfull")
     alert("Signed Up Successfully",response.data)
     navigate('/')
 }catch(err){
    console.log(err)
    setError(error)
    
 }
  }

  const HandleSubmit=()=>{
    // console.log("hekko")
    searchData()
  }
    return(<>
    <div className="signup_parent">
        <div className="signup_heading">
            <div className="text">Signup</div>
            <div className="underline"></div>

        </div>
<div className="allinput">
        <div className="input">
            <input type="text" placeholder="Name" onChange={((e)=>{
                setName(e.target.value)
            })}/>
        </div>
        <div className="input">
            <input type="email" placeholder="Email" onChange={((e)=>{
                setEmail(e.target.value)
            })}/>

        </div>
        <div className="input">
            <input type="Number" placeholder="Mobile Number" onChange={((e)=>{
                setMobile(e.target.value)
            })}/>
        </div>
        <div className="input">
            <input type="text" placeholder="Password" onChange={((e)=>{
                setPassword(e.target.value)
            })}/>
        </div>
        </div>
<div className="submit_parent">
    <div className="submit" onClick={HandleSubmit}>Register</div>
</div>

    </div>
    </>)
    }
    
    export default Signup