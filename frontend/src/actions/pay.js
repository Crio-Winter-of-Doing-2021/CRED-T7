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
    console.log("payfunctionhere");
    var curdate = new Date();
    let d1=parseInt(pay_amount.lastPayDate.slice(0,4));
    let d2=parseInt(pay_amount.lastPayDate.slice(5,7))-1;
    let d3=parseInt(pay_amount.lastPayDate.slice(8,10));
    var prevdate=new Date(d1,d2,d3);
    var diff_days=parseInt((curdate.getTime()-prevdate.getTime())/(1000 * 60 * 60 * 24));
    console.log(diff_days);
    let factor=1;
    if (diff_days<30) 
    {
        if(pay_amount.credit==0)
        {
            factor+=0.2;
            if (pay_amount.pay_amount>=1000) 
            {
                factor+=0.2;    
            }       
        }
        else
        {
            if (pay_amount.pay_amount>=1000) 
            {
                factor+=0.2;    
            }    
        }
    }
    else
    {
        factor=0;
    }
    let coins = parseInt(pay_amount.pay_amount *factor);
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
        
        axios.post(`/cards/${id}/pay`, pay_amount, config)
            .then(response => {
                dispatch(createMessage({'payed':`Bill Payed for ₹${pay_amount.pay_amount}`,
                                    'rewards':`Coins Added ${coins}`}))
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

