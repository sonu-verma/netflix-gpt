import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from "./Browse/Browse";
import Login from "./Login/Login"
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },{
            path: "/browse",
            element: <Browse />
        }
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName, photoURL, phoneNumber} = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoUrl: photoURL, phoneNumber: phoneNumber}))
            } else {
                dispatch(removeUser())
            }
        });
    },[])

    return <RouterProvider router={appRouter}/>
        
}

export default Body;