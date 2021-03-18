import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS } from "../actions/types"
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

export default function (state = initialState, action) {
    if (action.type == "USER_LOADING") {
        return {
            ...state,
            isLoading: true
        }
    }
    else if (action.type == "USER_LOADED") {
        return {
            ...state,
            isAuthenticated: true,
            isLoading: false,
            user: action.payload
        }
    }
    else if (action.type == "AUTH_ERROR") {
        localStorage.removeItem('token')
        return {
            ...state,
            token: null,
            user: null,
            isAuthenticated: false,
            isLoading: false,
        }
    }

    else {
        return state
    }
}