




// import axios from "axios"
import {useNavigate} from 'react-router-dom'
import "../styles/create.css"
import { useState } from "react"
import { createTask, editTask } from "../Redux/actions/action"
import { useDispatch } from "react-redux"
const Edit=()=>{
    const navigate=useNavigate()
    const dispatch = useDispatch;
  const [title, setTitle] = useState("")

  const [description, setDescription] = useState("")
//   const [error, setError] = useState(null);

const handleSubmit=()=>{
    if(title===""||description===""){
        alert("Plese fill all fields")
    }else{
const input={
    title,
    description
}
    
dispatch(editTask(input))
alert("Task edited successfully")
navigate("/home")
    }
}

    return(<>
    <div className="signup_parent">
        <div className="signup_heading">
            <div className="text">Edit</div>
            <div className="underline"></div>

        </div>
<div className="allinput">
        
        <div className="input">
            <input type="text" placeholder="Title" onChange={((e)=>{
                setTitle(e.target.value)
            })}/>

        </div>
        
        <div className="input">
            <textarea type="text" placeholder="Enter your task here" rows={"7"} cols={"9"} onChange={((e)=>{
                setDescription(e.target.value)
            })}/>
        </div>
        </div>
<div className="submit_parent">
    <div className="submit" onClick={handleSubmit}>Submit</div>
</div>

      </div>


  
    </>)
    }
    
    export default Edit