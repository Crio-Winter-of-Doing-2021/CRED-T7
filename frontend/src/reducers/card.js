
const initialState = {
    card: null,
    transactions: null,
    smartstatements: null
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
    else if (action.type == "GET_TRANSACTION" || action.type == "GET_STATEMENT") {
        // console.log(action.payload)
        return {
            ...state,
            transactions: action.payload
        };

    }
    else if (action.type == "GET_SMARTSTATEMENTS") {
        // console.log(action.payload)
        let labels = [];
        let total_data = [];
        action.payload.results.map(transac => {
            labels.push(transac.vendor);
            total_data.push(parseFloat(transac.total_amount));
        })
        // console.log(labels, total_data);
        return {
            ...state,
            smartstatements: action.payload,
            labels: labels,
            total_data: total_data
        };

    }
    else {
        return state;
    }
}