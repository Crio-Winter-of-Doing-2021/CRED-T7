
const initialState = {
    card: null
}

export default function (state = initialState, action) {
    if (action.type == "GET_CARD") {
        // console.log(action.payload)
        return {
            ...state,
            card: action.payload
        };

    }
    if (action.type == "CLEAR_CARD") {
        return {
            ...state,
            card: null
        }
    }
    else {
        return state;
    }
}