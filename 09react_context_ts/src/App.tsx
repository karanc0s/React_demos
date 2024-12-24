import {Todo, TodoContextProvider} from "./context";
import {useEffect, useState} from "react";
import TodoForm from "./components/TodoForm.tsx";
import TodoItem from "./components/TodoItem.tsx";


function App() {
    const[todos, setTodos] = useState<Todo[]>([])
    const addTodoApp = (todo : Todo) => {
       setTodos((prevState) => {
           return [{...todo}, ...prevState];
       })
    }
    const updateTodo = (id:number , todo : Todo) => {
        setTodos((prevState)=>{
            return prevState.map((item)=> {
                return  (item.id === id) ? todo : item
            } )
        })
    }
    const deleteTodo = (id : number) => {
        setTodos((prevState) => {
            return prevState.filter((item)=> {
                return item.id !== id;
            })
        })
    }
    const completeTodo = (id : number) => {
        setTodos((prevState)=> {
            return prevState.map( (prevItem) => {
                return prevItem.id === id ? {...prevItem, completed: !prevItem.completed} : prevItem
                }
            )
        })
    }

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos") as string)

        if (todos && todos.length > 0) {
            setTodos(todos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <TodoContextProvider value={{
            todos: todos,
            addTodo : addTodoApp,
            updateTodo : updateTodo,
            deleteTodo : deleteTodo,
            toggleComplete : completeTodo,
        }}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((item : Todo)=>(
                            <div key={item.id} className="w-full" >
                                {/*<TodoItem id={item.id} todoMsg={item.todoMsg} completed={item.completed} />*/}
                                <TodoItem todoItem={item}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </TodoContextProvider>
    )
}

export default App
