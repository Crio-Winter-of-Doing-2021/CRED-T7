import { GET_CARD, CLEAR_CARD, GET_TRANSACTION } from "./types";
import axios from "axios";
import {createMessage,returnErrors} from "./messages";

export const getCard = (id) => (dispatch, getState) => {
    const token = getState().auth.token

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;

        axios.get(`/cards/${id}`, config)
            .then(response => {
                dispatch({
                    type: GET_CARD,
                    payload: response.data
                })
            }).catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
    }
    else {
        alert("You are not logged in!");
    }
}

export const clearCardData = () => {
    return {
        type: CLEAR_CARD
    }
}

export const viewTransactions = (id,page) => (dispatch, getState) => {
    const token = getState().auth.token

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;

        axios.get(`/cards/${id}/statements?page=${page}`, config)
            .then(response => {
                dispatch({
                    type: GET_TRANSACTION,
                    payload: response.data
                })
            }).catch(err => dispatch(returnErrors(err.response.data,err.response.status)))
    }
    else {
        alert("You are not logged in!");
    }
}
