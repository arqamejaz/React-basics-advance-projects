import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}],
    updateTodo: null
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            if(state.updateTodo){
                const todo = state.todos.find((todo) => todo.id === state.updateTodo.id)
                if(todo){
                    todo.text = action.payload
                }
                state.updateTodo = null
            }
            else{
                state.todos.push({
                    id: nanoid(), 
                    text: action.payload
                })
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        setUpdateTodo: (state, action) => {
            state.updateTodo = action.payload
        }
    }
})

export const {addTodo, removeTodo, setUpdateTodo} = todoSlice.actions

export default todoSlice.reducer