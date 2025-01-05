import AuthService from "./services/AuthService.ts";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {authActions} from "./store/AuthSlice.ts";
import {Footer, Header} from "./components";
import {Outlet} from "react-router-dom";


function App() {

    const [isLoading, setIsLoading] = useState(false);
    const authService = AuthService
    const dispatch = useDispatch()

    useEffect(() => {

        authService.getCurrentUser().then((data) => {
            if (data) {
                dispatch(authActions.logIn(data))
            } else {
                dispatch(authActions.logOut())
            }
        }).catch((err: undefined) => {
            console.log(err)
            console.log("eseseses")
        }).finally(() => {
            setIsLoading(false);
        })
    }, [])


     return isLoading ? null : (
        <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
            <div className="w-full block">
                <Header/>
                <main>
                    <Outlet />
                </main>
                <Footer/>


            </div>

        </div>
    )

}

export default App
