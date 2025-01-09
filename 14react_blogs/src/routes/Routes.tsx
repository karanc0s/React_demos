import {createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App.tsx";
import {HomePage, LoginPage, SignUpPage, AllPostPage, AddPostPage, PostPage} from "../pages";
import {AuthLayout} from "../components";


const Protected = ()=>{
    return (
        <h1>
            This is Protected Page
        </h1>
    )
}

const Routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" element={<HomePage />}/>

            <Route path="/login" element={<LoginPage />}/>
            <Route path="/signup" element={<SignUpPage />}/>

            <Route path="/all-posts" element={
                <AuthLayout authNeeded={true}>
                    <AllPostPage />
                </AuthLayout>
            }/>

            <Route path="/add-post" element={
                <AuthLayout authNeeded={true}>
                    <AddPostPage />
                </AuthLayout>
            }/>

            <Route path="/edit-post/:slug" element={
                <AuthLayout authNeeded={true}>

                    <Protected />
                </AuthLayout>
            }/>

            <Route path="/post/:slug" element={
                <PostPage />
            }/>

        </Route>

    )
)


export default Routes;
