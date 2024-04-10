import { ADD_ITEM_IN_LIST } from "./actions"

const addItemInList = (value) => {
    return {
        type: ADD_ITEM_IN_LIST,
        payload: value,
    }
}

export default addItemInList;