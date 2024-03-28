 import axios from 'axios'
import { CREATE_TASK,EDIT_TASK,FAIL_CREATE_TASK ,FETCH_TASK} from './actionType'



 export const createTask=(user)=>async(dispatch)=>{
    try{
        const token=localStorage.getItem("token");
        const response=await axios.post("http://localhost:8080/task/add",user,{
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${token}`
            },
        })
        dispatch({
            type:CREATE_TASK,
            payload:response.data
        })
    }catch(err){
       dispatch({
        type:FAIL_CREATE_TASK,
        payload:err
    }) 
    }

 }

 export const fetchTask=()=>async(dispatch)=>{
    const token=localStorage.getItem("token");
    try{
        const response=await axios.get("http://localhost:8080/task",{
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${token}`
            },
        })
        // const data=await response.json();
        console.log(response.data)
        dispatch({
            type:FETCH_TASK,
            payload:response.data
        })
    }catch(err){
        console.log(err)
    }
 }



 

 export const editTask=(user)=>async(dispatch)=>{
    try{
        const token=localStorage.getItem("token");
        const response=await axios.post("http://localhost:8080/task/edit",user,{
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${token}`
            },
        })
        dispatch({
            type:EDIT_TASK,
            payload:response.data
        })
    }catch(err){
      console.log(err)
    }
    }

 