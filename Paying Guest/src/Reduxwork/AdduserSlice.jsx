import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Api = "http://localhost:5000/Users"

export const fetchuser = createAsyncThunk("user/fetch", async () => {
    const users = await axios.get(Api)
    return users.data
})

export const Adduser = createAsyncThunk("add/user", async (user) => {
    const users = await axios.post(Api, user)
    return users.data
})

const UserSlices = createSlice({
    name: "users",
    initialState: {
        loading: false,
        error: null,
        status: false,
        user: []
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchuser.fulfilled, (state, action) => {
                state.user = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(Adduser.fulfilled, (state, action) => {
                state.user.push(action.payload)
                state.loading = false
                state.error = null
                state.status = true
            })
    }
})

export default UserSlices.reducer