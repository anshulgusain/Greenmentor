import { useEffect } from "react"
import { fetchTask } from "../Redux/actions/action"
import { useDispatch,useSelector } from "react-redux"
import "../styles/home.css"
const Home=()=>{
    
    const data = useSelector((state) =>
    state.data
    )
    console.log(data.data.data)
    const ddata=data.data.data
    // console.log(ddata)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchTask())
    },[dispatch])
  



    return(
    <div className="task_parent">
  
    {
        
        ddata.map((ele)=>(
        <div className="task_container">
            <div className="task_title">{ele.title}</div>
            <hr></hr>
            <div className="task_description">{ele.description}</div>
            <div className="buttons">
            <button>Edit</button>
          <button>Delete</button>
                </div>
         
        </div>
        ))
    }
    </div>
    )
}
    
    export default Home