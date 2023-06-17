import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./toDoReducer";
let store = configureStore({
    reducer:{
        todoPage: toDoReducer
    }
})

export default store