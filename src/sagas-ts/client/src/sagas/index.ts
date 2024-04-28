import {
  takeLatest,
  debounce,
  retry,
  put,
  spawn,
  ActionPattern,
} from "redux-saga/effects";

import {
  searchSkillsRequest,
  searchSkillsSuccess,
  searchSkillsFailure,
} from "../actions/actionCreators";

import {
  CHANGE_SEARCH_FIELD,
  SEARCH_SKILLS_REQUEST,
} from "../actions/actionTypes";
import { searchSkills } from "../api";
import { SagaIterator } from "redux-saga";

interface SearchSkillsAction {
  type: typeof SEARCH_SKILLS_REQUEST;
  payload: {
    search: string;
  };
}

interface ChangeSearchAction {
  type: typeof CHANGE_SEARCH_FIELD;
  payload: {
    search: string;
  };
}

function filterChangeSearchAction(action: ChangeSearchAction): boolean {
  return (
    action.type === CHANGE_SEARCH_FIELD && action.payload.search.trim() !== ""
  );
}

function* handleChangeSearchSaga(action: ChangeSearchAction): SagaIterator {
  filterChangeSearchAction(action);
  yield put(searchSkillsRequest(action.payload.search));
}

function* handleSearchSkillsSaga(action: SearchSkillsAction): SagaIterator {
  try {
    const retryCount = 3;
    const retryDelay = 1 * 1000;
    const data = yield retry(
      retryCount,
      retryDelay,
      searchSkills,
      action.payload.search
    );

    yield put(searchSkillsSuccess(data));
  } catch (e) {
    yield put(searchSkillsFailure("Error skills getting"));
  }
}

function* watchChangeSearchSaga(): SagaIterator {
  yield debounce(
    300,
    CHANGE_SEARCH_FIELD as ActionPattern<ChangeSearchAction>,
    handleChangeSearchSaga
  );
}

function* watchSearchSkillsSaga(): SagaIterator {
  yield takeLatest(SEARCH_SKILLS_REQUEST, handleSearchSkillsSaga);
}

export default function* saga(): SagaIterator {
  yield spawn(watchChangeSearchSaga);
  yield spawn(watchSearchSkillsSaga);
  // console.log('rootSaga');
}
