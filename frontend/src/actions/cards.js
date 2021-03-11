import axios from 'axios';

import { ADD_CARD, GET_CARDS } from './types';

export const getCards = () => dispatch => {
    axios.get('/cards')
        .then(response => {
            dispatch({
                type: GET_CARDS,
                payload: response.data
            })
        }).catch(err => console.log(err))
};

export const addCard = (card) => dispatch => {
    axios.post('/cards', card)
        .then(response => {
            console.log(response.data)
            dispatch({
                type: ADD_CARD,
                payload: response.data
            })
        }).catch(err => console.log(err))
};