import AddTodo from "./components/AddTodo.jsx";
import Todos from "./components/Todos.jsx";
import {Provider} from "react-redux";
import {store} from "./app/store.js";


function App() {

  return (
      <>
          <h1 className="text-3xl font-bold underline">
              First Project with Redux toolkit + React Redux
          </h1>
          <Provider store={store}>
              <AddTodo />
              <Todos />
          </Provider>
      </>
  )
}

export default App
