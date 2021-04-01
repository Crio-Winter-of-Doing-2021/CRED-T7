import axios from 'axios';

import { PAY } from './types';

export const pay = (id,pay_amount) => (dispatch, getState) => {
    const token = getState().auth.token
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    // console.log("payfunctionhere");
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
        
        axios.post(`/cards/${id}/pay`, pay_amount, config)
            .then(response => {
                console.log(response);
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

