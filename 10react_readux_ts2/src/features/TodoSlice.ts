import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Todo{
    id : string
    todoMsg : string
    completed : boolean
}

interface TodoState{
    todoState : Todo[]
}

const initialState : TodoState = {
    todoState : []
}

const addTodo = (state: TodoState , action: PayloadAction<Todo>)=>{
    state.todoState.push(action.payload)
}
const updateTodo = (state : TodoState , action : PayloadAction)=>{
    console.log(action)
    console.log(state)
}
const deleteTodo = (state : TodoState , action:PayloadAction<string>)=>{
    state.todoState = state.todoState.filter((item)=>{
        return item.id !== action.payload
    })
}
// const toggleTodoCompleted = (state , action:PayloadAction<string>)=>{
//
// }

export const todoSlice = createSlice({
    name: "todo",
    initialState : initialState,
    reducers: {
        addTodo,
        updateTodo,
        deleteTodo,
        // toggleTodoCompleted
    }
})

export const action =  todoSlice.actions

export const todoReducer =  todoSlice.reducer

