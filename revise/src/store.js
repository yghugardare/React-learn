import { configureStore } from "@reduxjs/toolkit";
import crudReducers from "./features/crud/crud.js"
export const store = configureStore({
    reducer : crudReducers
})