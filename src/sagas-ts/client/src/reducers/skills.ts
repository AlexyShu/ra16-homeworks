import { ISkill } from "../actions/actionCreators";
import {
  SEARCH_SKILLS_FAILURE,
  SEARCH_SKILLS_REQUEST,
  SEARCH_SKILLS_SUCCESS,
  CHANGE_SEARCH_FIELD,
} from "../actions/actionTypes";
import { ActionTypes } from "../actions/actionTypes";

export interface InitialState {
  items: ISkill[];
  loading: boolean;
  error: string | null;
  search: string;
}

const initialState: InitialState = {
  items: [],
  loading: false,
  error: null,
  search: "",
};

type Action = {
  type: ActionTypes;
  payload: {
    error?: string;
    items?: ISkill[];
    search?: string;
  };
};

export default function skillsReducer(
  state = initialState,
  action: Action
): InitialState {
  switch (action.type) {
    case SEARCH_SKILLS_REQUEST:
      return { ...state, loading: true, error: null };
    case SEARCH_SKILLS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error || "Unknown error",
      };
    case SEARCH_SKILLS_SUCCESS:
      return {
        ...state,
        items: action.payload.items || [],
        loading: false,
        error: null,
      };
    case CHANGE_SEARCH_FIELD:
      return { ...state, search: action.payload.search || "" };
    default:
      return state;
  }
}
