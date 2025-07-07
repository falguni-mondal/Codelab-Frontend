import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import checkAuth from "../../utils/functions/checkAuth";
import axios from "axios";
import { baseUrl } from "../../utils/functions/keys";


export const fetchUser = createAsyncThunk('auth/fetchUser', async () => {
    const user = await checkAuth();
    return user;
})

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
    await axios.post(`${baseUrl}/api/user/logout`, null, { withCredentials: true });
})


const authSlice = createSlice({
    name : 'auth',
    initialState : {
        user : null,
        status : "idle",
        error : null
    },
    extraReducers : (builder) => {
        builder
        .addCase(fetchUser.pending, (state) => {
            state.status = "loading"
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
            state.status = "success";
            state.user = action.payload;
        })
        .addCase(fetchUser.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(logoutUser.fulfilled, (state) => {
            state.user = null;
            state.status = 'idle';
        })
    }
})

export default authSlice.reducer;