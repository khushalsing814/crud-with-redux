import { configureStore } from "@reduxjs/toolkit";
import  counter  from "./features/counterSlice";
import  usersDetails  from "./showuserDetails";

export const store = configureStore({
    reducer : {
        counter : counter,
        usersRecord: usersDetails
    }
})