import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Todo{
    id: string;
    msg: string;
    isCompleted: boolean;
}

interface TodoState {
    todos : Todo[]
}

const initialState : TodoState = {
    todos : [
        {id:'1', msg:'this first message', isCompleted:false},
    ]
}

const addTodo = (state : TodoState , action : PayloadAction<Todo>) => {
    state.todos.push(action.payload)
}

const deleteTodo = (state : TodoState , action : PayloadAction<string>) => {
    state.todos = state.todos.filter((item) => {
        return item.id !== action.payload;
    })
}

const updateTodo = (state : TodoState , action : PayloadAction<[string , Todo]>) => {
    const [id , todo] = action.payload;

    state.todos = state.todos.map((item)=>{
        return item.id === id ? todo : item
    })

}

const toggleCompleted = (state : TodoState , action : PayloadAction<string>) => {
    state.todos = state.todos.map((item)=>{
        return item.id === action.payload ? {...item, isCompleted: !item.isCompleted} : item
    })
}


export const todoSlice = createSlice({
    name : "slice_todo",
    initialState : initialState,
    reducers : {
        addTodo,
        deleteTodo,
        updateTodo,
        toggleCompleted,
    }
})

export const todoSliceAction  = todoSlice.actions
export const todoSliceReducer = todoSlice.reducer


