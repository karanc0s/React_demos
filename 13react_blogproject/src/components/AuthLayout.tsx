import {useNavigate} from "react-router-dom";
import {FC, ReactNode, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";

interface Props {
    children: ReactNode,
    authentication?: boolean,
}

const ProtectedLayout : FC<Props> = ( {children,authentication = true} : Props)=> {

    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((state: RootState) => {
        const d =state.authReducers.status
        console.log(`Protected Layout ${d}`)
        return d
    });
    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            console.log("navigating to login")
            navigate("/login")
        } else if (!authentication && authStatus !== authentication) {
            console.log("navigating to Home")
            navigate("/")
        }
    }, [authStatus , navigate , authentication]);

    setLoader(true)
    return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default ProtectedLayout;