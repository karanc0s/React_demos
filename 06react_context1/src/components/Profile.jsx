import {useContext} from "react";
import UserContext from "../context/UserContext.js";

export default function Profile() {
    const {user} = useContext(UserContext);
// [] {}
    console.log("Profile asdjfajdsbf adsfads f")
    if(!user) return <div>Please Login First</div>;

    return (
        <div>
            <h2>Welcome {user.username}</h2>
        </div>
    );
}