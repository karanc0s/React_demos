import {FormEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {Todo, todoSliceAction} from "../features/TodoSlice.ts";
import {nanoid} from "@reduxjs/toolkit";

export default function TodoForm(){

    const dispatch = useDispatch();
    const [msg , setMsg] = useState("")
    const add = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!msg) return

        const newTodo : Todo = {
            id : nanoid(),
            msg : msg,
            isCompleted: false
        }

        dispatch( todoSliceAction.addTodo(newTodo) )

        setMsg("")

    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    )
}