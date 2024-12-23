import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";

import {useState} from "react";
import UserContext from "./context/UserContext.js";


function App() {

    const [user , setUser] = useState(null);

  return (
      <>

          <h1 className="text-3xl font-bold underline">
              Hello world!
          </h1>
          <UserContext.Provider value={{user,setUser}}>
              {console.log("asdfasdfjnaskdjfk")}
              <Login />
              <Profile />
          </UserContext.Provider>

      </>
  )
}

export default App
