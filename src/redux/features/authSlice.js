import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import checkUser from "../../utils/functions/checkAuth";


export const fetchUser = createAsyncThunk('auth/fetchUser', async () => {
    const user = await checkUser();
    return user;
})


const authSlice = createSlice({
    name : 'auth',
    initialState : {
        user : null,
        status : "idle",
        error : null
    },
    reducers: {
        logout : (state) => {
            state.user = null;
        }
    },

    extraReducers : (builder) => {
        builder
        .addCase(fetchUser.pending, (state) => {
            state.status = "pending"
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
            state.status = "success";
            state.user = action.payload;
        })
        .addCase(fetchUser.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;