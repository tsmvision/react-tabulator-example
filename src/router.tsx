import {createBrowserRouter} from "react-router-dom";
import App from "./pages/App.tsx";
import ManualTabular from "./pages/ManualTabular.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/manual",
        element: <ManualTabular/>,

    }
]);
