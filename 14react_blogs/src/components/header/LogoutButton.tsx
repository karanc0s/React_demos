import {Auth} from "../../services/AuthService.ts";
import {useDispatch} from "react-redux";
import {AuthActions} from "../../store/AuthSlice.ts";

export default function LogoutButton(){

    const dispatch = useDispatch();

    const logout = ()=>{
        console.log("LogoutButton :: Logout")
        Auth.logout().then(()=>{
            dispatch(
                AuthActions.logOut()
            )
        })
    }

    return (
        <button
            className="inline-bock px-6 py-2 duration-150 hover:bg-blue-100 rounded-full"
            onClick={logout}
        >
            Logout
        </button>
    )
}