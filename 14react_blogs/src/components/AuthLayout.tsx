import {ReactNode, useEffect, useState} from "react";
import { useSelector} from "react-redux";
import {RootState} from "../store/Store.ts";
import {useNavigate} from "react-router-dom";

interface Props{
    children: ReactNode,
    authNeeded: boolean,
}
export default function AuthLayout({children , authNeeded=true}: Props) {

    const navigate = useNavigate();
    const authStatus = useSelector((state : RootState) => {
        return  state.authReds.status
    });
    const [loader , setLoader] = useState(true)

    useEffect(() => {
        //  false &&
        // if(authNeeded && authStatus!==authNeeded){
        //
        // }else if(!authNeeded && authStatus!==authNeeded){
        //
        // }
        if(authNeeded && authStatus!==authNeeded){
            console.log("Navigating to login")
            navigate("/login")
        }
        setLoader(false)
    },[authNeeded, authStatus, navigate]);


    return loader? <h1>Loading {authStatus}</h1> : <>{children}</>
}