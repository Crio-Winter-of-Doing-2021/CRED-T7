import axios from 'axios';

import { ADD_CARD, GET_CARDS } from './types';

export const getCards = () => (dispatch, getState) => {
    const token = getState().auth.token

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;

        axios.get('/cards', config)
            .then(response => {
                dispatch({
                    type: GET_CARDS,
                    payload: response.data
                })
            }).catch(err => console.log(err))
    }
    else {
        alert("You are not logged in!");
    }
}

export const addCard = (card) => (dispatch, getState) => {
    const token = getState().auth.token

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    console.log("Card", card)

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
        axios.post('/cards', card, config)
            .then(response => {
                // console.log(response.data)
                dispatch({
                    type: ADD_CARD,
                    payload: response.data
                })
            }).catch(err => {
                // console.log(err.response.data)
                let message = "";
                for (const key in err.response.data) {
                    message += `${key} : ${err.response.data[key]} \n`;
                }
                alert(message);
            }
            );
    }
    else {
        alert("You are not logged in!")
    }
};