import {
    combineReducers,
    compose,
    legacy_createStore
} from "redux";

import reducer from './reducer';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
    return legacy_createStore(
        combineReducers({
            reducer: reducer,
        }),
        undefined,
        compose(
            ReactReduxDevTools,
        )
    );
}

export default configureStore;