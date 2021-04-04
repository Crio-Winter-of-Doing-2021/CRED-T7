import axios from 'axios';

import { ADD_CARD, GET_CARDS, CARDS_LOADING } from './types';
import {returnErrors,createMessage} from './messages';

export const getCards = (page) => (dispatch, getState) => {
    dispatch({
        type: CARDS_LOADING
    })

    const token = getState().auth.token

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;

        axios.get(`/cards?page=${page}`, config)
            .then(response => {
                dispatch({
                    type: GET_CARDS,
                    payload: response.data
                })
            }).catch(err => dispatch(returnErrors(err.response.data,err.response.status)))
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

    // console.log("Card", card)

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
        axios.post('/cards', card, config)
            .then(response => {
                // console.log(response.data)
                dispatch(createMessage({addCard:"Card Added"}))
                dispatch({
                    type: ADD_CARD,
                    payload: response.data
                })
            }).catch(err => 
                dispatch(returnErrors(err.response.data,err.response.status))
            );
    }
    else {
        alert("You are not logged in!")
    }
};