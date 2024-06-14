import React from "react";
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
/**import all components */
import Home from "./components/Home";
import Projects from "./components/Projects";
import Details from "./components/Details";
import Account from "./components/Client";
/** Root routes */
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/projects',
        element: <Projects/>
    },
    {
        path: '/project/:id',
        element: <Details/>
    },
    {
        path: '/account',
        element: <Account/>
    }


])

export default function App(){
    return(
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
    )
}