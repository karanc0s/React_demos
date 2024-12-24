import {Todo, useTodoContext} from "../context";
import {FormEvent, useState} from "react";

export default function TodoForm(){

    const [todoMsg , setTodoMsg] = useState("")
    const { addTodo } = useTodoContext()
    const add = (e : FormEvent<HTMLFormElement> )=>{
        e.preventDefault();

        if(!todoMsg) return

        addTodo(new Todo(Date.now() , todoMsg , false))

        setTodoMsg("")
    }


    return (
        <form onSubmit={add} className="flex">
            <input
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                type="text"
                placeholder="Write Todo"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}