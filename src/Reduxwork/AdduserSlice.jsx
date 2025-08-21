import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { USERS_API } from "../api/ussser";


export const fetchuser = createAsyncThunk("user/fetch", async () => {
    const users = await axios.get(USERS_API)
    return users.data
})

export const Adduser = createAsyncThunk("add/user", async (user) => {
    const users = await axios.post(USERS_API, user)
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

    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload
        },
        logout: (state) => {
            state.status = false
            state.user = []
            console.log("userLog out")
        }
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

export const { setStatus, logout } = UserSlices.actions
export default UserSlices.reducer