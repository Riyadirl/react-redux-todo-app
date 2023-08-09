import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../state/todo/todoSlice"; // You need to import the todoReducer


export default configureStore({
    reducer: {
        todo: todoReducer
    }
});
