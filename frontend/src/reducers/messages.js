import {CREATE_MESSAGE} from '../actions/types';
const initialState = {
    msg:{},
}

export default function (state = initialState, action){
    if(action.type == "CREATE_MESSAGE"){
        return (state=action.payload)
    }
    else if(action.type=="MESSAGE_CLEAR"){
        return ({msg:{}})
    }
    else{
        return state
    }
}