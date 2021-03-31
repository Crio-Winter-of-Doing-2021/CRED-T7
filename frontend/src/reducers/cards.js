import { GET_CARDS, ADD_CARD, CARDS_LOADING } from '../actions/types'

const initialState = {
    cards: {},
    isLoaded: null
}

export default function (state = initialState, action) {
    if (action.type == "CARDS_LOADING") {
        return {
            ...state,
            isLoaded: false
        }
    }
    else if (action.type == "GET_CARDS") {
        return {
            ...state,
            isLoaded: true,
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