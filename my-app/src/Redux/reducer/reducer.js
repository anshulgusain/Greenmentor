import { CREATE_TASK,FAIL_CREATE_TASK,FETCH_TASK } from "../actions/actionType"


const initialState={
    loading:false,
    error:null,
    data:[],
}

const reducer=(state=initialState,action)=>{
switch (action.type) {
    case CREATE_TASK:
       return {...state,loading:false,error:null}
     
        case FAIL_CREATE_TASK:
            return {...state,loading:false,error:action.payload}
        
            case FETCH_TASK:
                console.log(action.payload)
                return {...state,loading:false,error:action.payload}   
    default:
        return state;
}
}
export default reducer