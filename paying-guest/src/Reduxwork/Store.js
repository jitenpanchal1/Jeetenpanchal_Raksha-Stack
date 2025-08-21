import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./AdduserSlice";

const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export default store;
