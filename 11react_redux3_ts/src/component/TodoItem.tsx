import {useState} from "react";
import {Todo} from "../features/TodoSlice.ts";
import {useDispatch} from "react-redux";
import {todoSliceAction} from "../features/TodoSlice.ts";

interface Props {
    todoItem : Todo
}

export default function TodoItem({todoItem} : Props){

    const dispatch = useDispatch();

    const [isMsgEditable, setMsgEditable] = useState(false);
    const [todoMsg , setTodoMsg] = useState(todoItem.msg)



    const toggleCompleted = () => {
        dispatch(
            todoSliceAction.toggleCompleted(todoItem.id)
        )
    }
    const editTodo = () => {
        dispatch(
            todoSliceAction.updateTodo(
                [
                    todoItem.id ,
                    {...todoItem , msg:todoMsg}
                ]
            )
        )
        setMsgEditable(false);
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todoItem.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todoItem.isCompleted}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isMsgEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todoItem.isCompleted ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isMsgEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todoItem.isCompleted) return;

                    if (isMsgEditable) {
                        editTodo();
                    } else setMsgEditable((prev) => !prev);
                }}
                disabled={todoItem.isCompleted}
            >
                {isMsgEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => {dispatch(todoSliceAction.deleteTodo(todoItem.id))}}
            >
                ❌
            </button>
        </div>
    )

}