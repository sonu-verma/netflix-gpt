import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from "./Browse/Browse";
import Login from "./Login/Login"

const Body = () => {
    
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },{
            path: "/browse",
            element: <Browse />
        }
    ])


    return <RouterProvider router={appRouter}/>
        
}

export default Body;