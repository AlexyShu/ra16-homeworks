import {createSlice, createAsyncThunk, buildCreateSlice, asyncThunkCreator} from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
    films: [],
    loading: false,
    error: ""
};

const fetchFilms = createAsyncThunk(
    "search/fetchFilms",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                "https://www.omdbapi.com?apikey=64405bd2&s=terminator"
            );

            if (!response) {
                return rejectWithValue("Loading error!");
            }

            return await response.data;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchFilms.fulfilled, (state, action) => {
                state.films = action.payload;
                state.loading = false;
                state.error = "";
            })
            .addCase(fetchFilms.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    }
});