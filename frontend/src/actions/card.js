import { GET_CARD } from "./types";
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
            }).catch(err => console.log(err))
    }
    else {
        alert("You are not logged in!");
    }
}