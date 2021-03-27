
const initialState = {
    card: null,
    transactions: null
}

export default function (state = initialState, action) {
    if (action.type == "GET_CARD") {
        // console.log(action.payload)
        return {
            ...state,
            card: action.payload
        };

    }
    else if (action.type == "CLEAR_CARD") {
        return {
            ...state,
            card: null,
            transactions: null
        }
    }
    else if (action.type == "GET_TRANSACTION") {
        // console.log(action.payload)
        return {
            ...state,
            transactions: action.payload
        };

    }
    else {
        return state;
    }
}