import {useContext, useState} from "react";
import UserContext from "../context/UserContext.js";

function Login(){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const {setUser} = useContext(UserContext);

    const handleSubmit = (event)=>{
        event.preventDefault();
        setUser({username:username, password:password});
    }
    console.log("Login asdjfajdsbf adsfads f")
    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
            />
            {" "}
            <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Login</button>
        </div>
    );
}

export default Login;