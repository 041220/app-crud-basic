import { createSlice } from "@reduxjs/toolkit"

const todoListSlice = createSlice({
    name: "todoList",
    initialState: {
        listTodo: []
    },
    reducers: {
        addNewTodo: (state, action) => {
            state.listTodo.push(action.payload)
        },

    }
})
export default todoListSlice

