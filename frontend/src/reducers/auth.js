import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS, LOGOUT_SUCCESS } from "../actions/types"
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
    else if (action.type == "AUTH_ERROR" || action.type == "LOGIN_FAIL" || action.type == "LOGOUT_SUCCESS" || action.type == "REGISTER_FAIL") {
        localStorage.removeItem('token')
        return {
            ...state,
            token: null,
            user: null,
            isAuthenticated: false,
            isLoading: false,
        }
    }
    else if (action.type == "LOGIN_SUCCESS" || action.type == "REGISTER_SUCCESS") {
        localStorage.setItem('token', action.payload.token)
        return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isLoading: false
        }
    }
    return state
}