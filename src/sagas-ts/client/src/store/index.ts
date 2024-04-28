import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import createSagaMiddleware from "redux-saga";
import skillsReducer from "../reducers/skills";
import saga from "../sagas";

const composeEnhancers = compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  skillsReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);

export default store;
