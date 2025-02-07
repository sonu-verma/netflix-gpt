import { onAuthStateChanged, signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { addUser, removeUser } from "../utils/userSlice"
import { AVATAR_GENERATE_URL, langOptions, LOGO, USER_AVATAR } from "../utils/constants"
import { switchLanguage, toggleGpt } from "../utils/configSlice"

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector( store => store.user)
    const navigate = useNavigate()
    const [showProfilePop, setShowProfilePop] = useState(false)

    // console.log("header user", user)

    const handleSignOut =  () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            // An error happened.
        });
        
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName, photoURL, phoneNumber} = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoUrl: photoURL, phoneNumber: phoneNumber}))
                navigate("/browse")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
        });
        // unsubscribe when component unmount   
        return () => unsubscribe();     
    },[])


    const handleGptToggle = () => {
        dispatch(toggleGpt())
    }

    const handleLanguageSwitch = (e) => {
        console.log(e.target.value)
        dispatch(switchLanguage(e.target.value))
    }

    return <>
            <div className="absolute w-full bg-gradient-to-b from-black px-8 z-30 flex justify-between">
                <img 
                    className="w-25 h-10 mt-1.5 mx-5"
                    src= { LOGO }
                    alt="Netflix Logo"
                />
                {
                    (user && user?.uid) && (
                        <div className="mr-5 flex">
                            <select className="bg-gray-800 p-0.5 h-8 mt-4 mx-2 text-white font-light text-sm border-1 hover:border-red-600 rounded-xs" onChange={handleLanguageSwitch}>
                                {
                                    langOptions.map(  lang => <option key={lang.lang} value={lang.lang}>{lang.title}</option>)
                                }
                            </select>
                            <button 
                                className="bg-purple-500 rounded-xs text-white mt-4 h-8 w-20 text-sm"
                                onClick={ handleGptToggle }
                            >
                                GPT Search
                            </button>
                            <img 
                                onClick={ () => setShowProfilePop(!showProfilePop) }
                                className="h-8 w-8 mt-4 mx-2  rounded-sm"
                                src={user.displayName ? user.photoUrl: USER_AVATAR}
                                // src=""
                            />
                            
                        </div>
                    )
                }
            
            </div>
            {
                showProfilePop &&
                
                <div className="bg-gray-900 text-white p-4 w-50 absolute right-10 top-15">
                    <div>
                        <p>Manage Profile</p>
                        <p>Transfer Profile</p>
                        <p>Account</p>
                        <p>Help Center</p>
                    </div>
                    <div className="border-t-2 my-2 py-1.5"><button onClick={ handleSignOut }>Sign Out</button></div>
                </div>
            }
        </>
}

export default Header