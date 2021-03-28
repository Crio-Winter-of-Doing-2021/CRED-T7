import axios from 'axios';

import { PAY } from './types';

export const pay = (id,amount) => (dispatch, getState) => {
    const token = getState().auth.token
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    console.log("payfunctionhere");
    // console.log("payfunctionhere");
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
        
        axios.post(`/cards/${id}/pay`, parseFloat(amount[0]), config)
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

