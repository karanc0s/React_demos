import {useDispatch} from "react-redux";
import AuthService from "../../services/AuthService.ts";
import {authActions} from "../../store/AuthSlice.ts";

export default function LogoutButton(){

    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        AuthService.logout().then(()=>{
            dispatch(authActions.logOut())
        }).catch(()=>{

        })
    }


    return (
        <button
            className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
            onClick={logoutHandler}
        >
            Logout
        </button>
    )

}