import { GET_CARD, CLEAR_CARD } from "./types";
import axios from "axios";

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
            }).catch(err => alert(err))
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