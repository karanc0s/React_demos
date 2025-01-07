import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import store from "./store/Store.ts";
import {RouterProvider} from "react-router-dom";
import Routes from "./routes/Routes.tsx";
import {StrictMode} from "react";




createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={Routes} />
        </Provider>,
    </StrictMode>

)
