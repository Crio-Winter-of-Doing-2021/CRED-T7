import {CREATE_MESSAGE, GET_ERRORS, ERROR_CLEAR, MESSAGE_CLEAR} from './types';

export const createMessage = msg =>{
    return {
        type: CREATE_MESSAGE,
        payload: msg,
    }
}


export const returnErrors = (msg,status) => {
    return {
        type:GET_ERRORS,
        payload: {msg,status},
    }
}

export const clearErrors = () =>{
    return {
        type: ERROR_CLEAR
    }
}

export const clearMessages = () =>{
    return {
        type: MESSAGE_CLEAR
    }
}