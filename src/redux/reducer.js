import {ADD_ITEM_IN_LIST, CHANGE_LIST} from "./actions";

const initialState = {
    list: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_IN_LIST:
            return {
                ...state,
                list: [...state.list, action.payload],
            }
        case CHANGE_LIST:
            return {
                ...state,
                list: action.payload,
            }
        default:
            return state;
    }
};

export default reducer;