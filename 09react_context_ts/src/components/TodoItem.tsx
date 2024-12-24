import {Todo, useTodoContext} from "../context";
import {useState} from "react";


interface Props {
    todoItem : Todo,
}
export default function TodoItem({todoItem} : Props){

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [msg, setMsg] = useState(todoItem.todoMsg)
    const {updateTodo , deleteTodo , toggleComplete} = useTodoContext()
    const toggleCompleted =()=>{
        toggleComplete(todoItem.id)
    }
    const editTodo = () => {
        updateTodo(todoItem.id, {...todoItem, todoMsg: msg})
        setIsTodoEditable(false)
    }

    return (
        <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black 
        ${todoItem.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>

            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todoItem.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todoItem.completed ? "line-through" : ""}`}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todoItem.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todoItem.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todoItem.id)}
            >
                ❌
            </button>


        </div>
    );
}