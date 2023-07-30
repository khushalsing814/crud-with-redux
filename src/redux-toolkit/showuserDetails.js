import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create action (post Api)
export const CreateUsersdetails = createAsyncThunk("createUsers", async (data, { rejectWithValue }) => {
    const response = await axios.post(`https://api-testing-jivx.onrender.com/data`, data);
    try {
        return response;
    } catch (error) {
        return rejectWithValue(error, "something went wrong")
    }
})

// create action  get user all details (get api)
export const showalldata = createAsyncThunk("useralldata", async (arg, { rejectWithValue }) => {
    const response = await fetch(`https://api-testing-jivx.onrender.com/data`);
    try {
        return await response.json();
    } catch (error) {
        return rejectWithValue(error, "something went wrong")
    }
})

export const usersDetails = createSlice({
    name: "usersDetails",
    initialState: {
        users: [],
        loading: false,
        error: null,
        serachData: [],
    },

    reducers: {
        searchUser: (state, action) => {
            console.log(action.payload)
            state.serachData = action.payload;
        }
    },
    extraReducers: {
        [CreateUsersdetails.pending]: (state) => {
            state.loading = true;
        },
        [CreateUsersdetails.fulfilled]: (state, action) => {
            state.loading = false;
            state.users.push(action.payload)
        },
        [CreateUsersdetails.rejected]: (state, action) => {
            state.loading = true;
            state.error = action.payload;
        },

        // get user all details (get)

        [showalldata.pending]: (state) => {
            state.loading = true;
        },
        [showalldata.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [showalldata.rejected]: (state, action) => {
            state.loading = true;
            state.error = action.payload;
        }

    }
})
export const {searchUser} = usersDetails.actions;
export default usersDetails.reducer;