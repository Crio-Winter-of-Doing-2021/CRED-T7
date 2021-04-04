import axios from 'axios';
import { createMessage, returnErrors } from './messages';

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
                dispatch(createMessage({'payed':`Bill Payed for ₹${pay_amount.pay_amount}`}))
                dispatch({
                    type: PAY,
                    payload: response.data
                })
            }).catch(err => dispatch(returnErrors(err.response.data,err.response.status)))
    }
    else {
        alert("You're not logged in!");
    }
}

