import axios from 'axios';
import { USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from './types';

export const loadUser = () => (dispatch, getState) => {
    dispatch({
        type: USER_LOADING
    });

    const token = getState().auth.token

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    // console.log(token)

    axios.get('/user', config)
        .then(response => {
            // console.log(response);
            dispatch({
                type: USER_LOADED,
                payload: response.data
            });
        }).catch(error => {
            console.log(error);
            dispatch({
                type: AUTH_ERROR
            });
        })
}

export const login = (username, password) => (dispatch) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = { "username": username[0], "password": password[0] }

    axios.post('/login', body, config)
        .then(response => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            });
        }).catch(error => {
            alert(error);
            dispatch({
                type: LOGIN_FAIL
            });
        })
}

export const register = ({ username, password, email }) => (dispatch) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = { "username": username[0], "password": password[0], "email": email[0] };

    axios.post('/signup', body, config)
        .then(response => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data
            });
        }).catch(error => {
            alert(error);
            dispatch({
                type: REGISTER_FAIL
            });
        })
}

export const logout = () => (dispatch, getState) => {


    const token = getState().auth.token

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.get('/logout', null, config)
        .then(reponse => {
            dispatch({
                type: LOGOUT_SUCCESS,
            });
        }).catch(error => {
            console.log(error);
            dispatch({
                type: AUTH_ERROR
            });
        })
}