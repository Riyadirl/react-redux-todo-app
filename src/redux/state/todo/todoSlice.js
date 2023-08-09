import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.value.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.value.splice(action.payload, 1);
        },
        EditTodo: (state, action) => {
            state.value.slice(action.payload['index'], 1, action.payload['task']);
        }

    },
});

export const { addTodo, removeTodo, EditTodo } = todoSlice.actions;

export default todoSlice.reducer;
