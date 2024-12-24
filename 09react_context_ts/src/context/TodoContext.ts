import {createContext, useContext} from "react";
import { Todo } from "./Todo"


interface TodoContextType {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    updateTodo: (id: number, todo: Todo) => void;
    deleteTodo: (id: number) => void;
    toggleComplete: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: (todo:Todo) => {
        console.log("TodoContext.tsx addTodo() - "+todo.toString())
    },
    updateTodo: (id:number , todo:Todo)=>{
        console.log(`TodoContext.tsx updateTodo() - ${id} -`+todo.toString())
    },
    deleteTodo: (id:number) => {
        console.log("TodoContext.tsx deleteTodo() -"+id)
    },
    toggleComplete: (id:number) => {
        console.log("TodoContext.tsx toggleComplete() -"+id )
    },
})

export const useTodoContext = ()=> {
    return useContext(TodoContext)
}

export const TodoContextProvider = TodoContext.Provider
