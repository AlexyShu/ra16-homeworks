import { CHANGE_LIST } from "./actions"

const changeList = (newList) => {
    return {
        type: CHANGE_LIST,
        payload: newList,
    }
}

export default changeList;