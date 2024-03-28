import { useEffect } from "react"
import { fetchTask } from "../Redux/actions/action"
import { useDispatch,useSelector } from "react-redux"

const Home=()=>{
    const dispatch=useDispatch()
    const data = useSelector((state) =>
    state.data
    )
    const search=()=>{
        dispatch(fetchTask());
       }
    

console.log(data)

    return<>
    {/* <button onClick={search}>Load Task</button> */}
    {
        
        data.map((ele)=>(
        <div className="task_constainer">
            <div className="task_title">ele.title</div>
            <div className="task_description">ele.description</div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        ))
    }
    </>
    }
    
    export default Home