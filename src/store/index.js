import {
    combineReducers,
    combineSlices,
    configureStore,
} from "@reduxjs/toolkit";
import {searchSlice} from "./slices/searchSlice.js";

const rootReducer = combineReducers({
    search: searchSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})