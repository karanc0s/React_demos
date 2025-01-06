import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider} from "react-redux";
import store from "./store/store.ts";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import {AuthLayout} from "./components";
import {AddPostPage, AllPostPage, EditPostPage, LoginPage, PostPage, SignUpPage} from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/login",
                element: <LoginPage/>
                // element: (
                //     <AuthLayout authentication={true}>
                //         <LoginPage />
                //     </AuthLayout>
                // )
            },
            {
                path: "/signup",
                element:<SignUpPage />
                // element: (
                //     <AuthLayout authentication={false}>
                //         <SignUpPage />
                //     </AuthLayout>
                // )
            },
            // {
            //     path: "/all-posts",
            //     element: (
            //         <ProtectedLayout authentication>
            //             {" "}
            //             <AllPostPage />
            //         </ProtectedLayout>
            //     ),
            // },
            // {
            //     path: "/add-post",
            //     element: (
            //         <AuthLayout authentication>
            //             {" "}
            //             <AddPostPage />
            //         </AuthLayout>
            //     ),
            // },
            // {
            //     path: "/edit-post/:slug",
            //     element: (
            //         <ProtectedLayout authentication>
            //             {" "}
            //             <EditPostPage />
            //         </ProtectedLayout>
            //     ),
            // },
            // {
            //     path: "/post/:slug",
            //     element: <PostPage />,
            // },
        ]
    }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>

      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>

  </StrictMode>,
)
