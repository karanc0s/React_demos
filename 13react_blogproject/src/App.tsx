import AuthService from "./services/AuthService.ts";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {authActions} from "./store/AuthSlice.ts";
import {Container, Container2, Header, Input} from "./components";


function App() {

    const [isLoading, setIsLoading] = useState(true);

    const authService = AuthService
    const dispatch = useDispatch()

    // useEffect(() => {
    //
    //     authService.getCurrentUser().then((data) => {
    //         if (data) {
    //             dispatch(authActions.logIn(data))
    //         } else {
    //             dispatch(authActions.logOut())
    //         }
    //     }).catch((err:undefined)=>{
    //         console.log(err)
    //         console.log("eseseses")
    //     }).finally(() => {
    //         setIsLoading(false);
    //     })
    // }, [])



        // return isLoading? null :
        return     (
            <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
                <div className="w-full block">
                    <Header/>

                    <h1 className="text-3xl font-bold underline">Hello world</h1>
                    {/*<Footer/>*/}
                </div>
            </div>
        )

}

export default App
