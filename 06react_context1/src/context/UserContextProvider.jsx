import {useState} from "react";
import UserContext from "./UserContext.js";


const UserContextProvider = ({content}) => {

    const [user , setUser] = useState(null);

    return (
        <UserContext.Provider value={{user,setUser}}>
            {content}
        </UserContext.Provider>
    );
}

export default UserContextProvider;