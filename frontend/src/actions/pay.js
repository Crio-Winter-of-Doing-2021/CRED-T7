import axios from 'axios';

import { PAY } from './types';

export const pay = (id) => (dispatch, getState) => {
    const token = getState().auth.token
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;

        axios.post(`/cards/${id}/pay`, config)
            .then(response => {
                dispatch({
                    type: PAY,
                    payload: response.data
                })
            }).catch(err => console.log(err))
    }
    else {
        alert("Enter amount");
    }
}

