import axios from 'axios';
import { USER_LOADING, USER_LOADED, AUTH_ERROR } from './types';

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

    axios.get('/login', config)
        .then(reponse => {
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