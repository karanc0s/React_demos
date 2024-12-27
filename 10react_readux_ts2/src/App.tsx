import AddTodo from "./component/AddTodo.tsx";
import Todos from "./component/Todos.tsx";


function App() {

  return (
      <>
          <h1 className="text-3xl font-bold underline">
              Hello world!
          </h1>
          <AddTodo />
          <Todos />
      </>
  )
}

export default App
