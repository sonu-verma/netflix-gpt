import { validateLoginForm } from "../../utils/validate";
import Header from "../Header"
import { useRef, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import { AVATAR_GENERATE_URL, BG_IMG } from "../../utils/constants";

const Login = () => {

const dispatch  = useDispatch()

const [isSignIn, setIsSignIn] = useState(true)
const [nameError, setNameError] = useState(true)
const [emailError, setEmailError] = useState(true)
const [passwordError, setPasswordError] = useState(true)


const name = useRef(null);
const email = useRef(null);
const password = useRef(null);

const handleSignIn = () => {
    setIsSignIn(!isSignIn)
    setEmailError(false) 
    setPasswordError(false) 
    setNameError(false) 
} 

const handleFormBtn = () => {
    const nameVal = !isSignIn ? name.current.value : ''
    const emailVal = email.current.value
    const passwordVal = password.current.value
    const validate = validateLoginForm(isSignIn, emailVal, passwordVal, nameVal)
    setEmailError(validate?.email) 
    setPasswordError(validate?.password) 
    !isSignIn ? setNameError(validate?.name) : false
    console.log(validate)
    if(!isSignIn){
    // Sign UP Logic
        createUserWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("user", user)
            

            updateProfile(user, {
                displayName: nameVal, photoURL: AVATAR_GENERATE_URL+nameVal
              }).then(() => {

                const {uid, email, displayName, photoURL, phoneNumber} = auth.currentUser;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoUrl: photoURL, phoneNumber: phoneNumber}))
              }).catch((error) => {
                console.log("profile update error:", error)
              });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errorMessage", errorMessage+"-->"+errorCode)
        });
    }else{
        // Sign In Logic 
        signInWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
           console.log("user", user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message; 
            setEmailError(false)
            setPasswordError(false)
            console.log("errorMessage", errorMessage+"-->"+errorCode)
        });
    }
}



return (
    <div>
        <Header />
        <div className="absolute opacity-100">
            <img 
                src={BG_IMG}
                alt="Netflix background"
                className="h-screen w-screen object-fill"
            />
        </div>
        <div className="absolute inset-0 flex justify-center items-start mt-20 opacity-90">
            <form onSubmit={ (e) => e.preventDefault() } className="bg-black text-white w-4/12 pb-20">
                <h2 className="mx-10 text-3xl py-6 font-bold">{ !isSignIn ? "Sign Up": "Sign In"} </h2>
                <div className="mx-10 leading-10 my-2">
                    {
                        !isSignIn ? (
                            <div>
                                <input 
                                    ref={name}
                                    type="text" 
                                    placeholder="Full Name" 
                                    className={`w-full px-2 hover:border-white  border-1 ${!nameError ? 'border-red-500' : 'border-gray-500 mb-3'}`}  
                                />
                                <span className="font-light text-xs text-red-400">{ !nameError ? 'Invalid password' : '' }</span>
                            </div>
                        )
                        : ''
                    }
                   
                    <input 
                        ref={email}
                        type="text" 
                        placeholder="Email Address" 
                        className={`w-full px-2 hover:border-white  border-1 ${!emailError ? 'border-red-500' : 'border-gray-500 mb-3'}`}  
                    />
                    <span className="font-light text-xs text-red-400">{ !emailError ? 'Invalid email address' : '' }</span>
                    <input 
                        ref={password}
                        type="password"
                        placeholder="Password" 
                        className={`w-full px-2 hover:border-white  border-1 ${!emailError ? 'border-red-500' : 'border-gray-500  mb-3'}`}
                    />
                    <span className="font-light text-xs text-red-400">{ !passwordError ? 'Invalid password' : '' }</span>
                    
                </div>
                <div className="mx-10 leading-10 ">
                    <button className=" bg-red-500  w-full" onClick={handleFormBtn}>{ !isSignIn ? "Sign Up": "Sign In"}</button>
                </div>
                <p className="flex justify-center py-2">OR</p>
                
                <div className="mx-10 leading-10 ">
                    <button className="text-white bg-gray-700 w-full">Use a sign-in code</button>
                </div>
                
                <div className="text-sm">
                    <a className="flex justify-center py-2">Forgot password?</a>
                </div>
                <div className="mx-10 ">
                    <input type="checkbox" className="mr-2 p-4 text-red-400"/>Remember me
                </div>
                <div className="mx-10 flex text-sm mt-2">
                    {
                        !isSignIn ? (
                            <>
                                <p className="mr-1 text-gray-500">Already have account? </p>
                                <p className="hover:border-b-2 hover:border-white" onClick={ handleSignIn }>Sign In.</p>
                            </>
                        ) : (
                            <>
                                <p className="mr-1 text-gray-500">New to Netflix? </p>
                                <p className="hover:border-b-2 hover:border-white" onClick={ handleSignIn }>Sign up now.</p>
                            </>
                        )
                    }
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
