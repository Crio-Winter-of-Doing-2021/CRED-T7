import { GET_CARDS, ADD_CARD } from '../actions/types'

const initialState = {
    cards: {},
}

export default function (state = initialState, action) {
    if (action.type == "GET_CARDS") {
        return {
            ...state,
            cards: action.payload
        };

    }
    else if (action.type == "ADD_CARD") {
        console.log(action.payload)
        state.cards.results.push(action.payload)
        return {
            cards: { ...state.cards }
        };

    }
    else {
        return state;
    }
}