import {useNavigate} from "react-router-dom";
import {FC, ReactNode, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";

interface Props {
    children: ReactNode
}

const ProtectedLayout : FC<Props> = ( {children} : Props , authentication = true)=> {

    const navigate = useNavigate();
    const [loader , setLoader] = useState(true);
    const authStatus = useSelector((state : RootState) => state.authReducers.status);

    if(authentication && authStatus !== authentication){
        navigate("/login")
    }else if(!authentication && authStatus !== authentication){
        navigate("/")
    }

    setLoader(false)
    return loader? <h1>Loading...</h1> : <>{children}</>
}

export default ProtectedLayout;