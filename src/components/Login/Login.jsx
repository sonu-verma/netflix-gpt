import Header from "../Header"
import { useState } from "react"

const Login = () => {

const [isSignIn, setIsSignIn] = useState(true)

const handleSignIn = () => setIsSignIn(!isSignIn)

return (
    <div>
        <Header />
        <div className="absolute opacity-100">
            <img 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg" 
                alt="Netflix background"
                className="h-screen w-screen object-fill"
            />
        </div>
        <div className="absolute inset-0 flex justify-center items-start mt-20 opacity-90">
            <form className="bg-black text-white w-4/12 pb-20">
                <h2 className="mx-10 text-3xl py-6 font-bold">{ !isSignIn ? "Sign Up": "Sign In"} </h2>
                <div className="mx-10 leading-10 my-2">
                    {
                        !isSignIn ? (
                            <input 
                                type="text" 
                                placeholder="Full Name" 
                                className="w-full px-2 mb-3 hover:border-white border-gray-500 border-1"  
                            />
                        )
                        : ''
                    }
                   
                    <input 
                        type="text" 
                        placeholder="Email Address" 
                        className="w-full px-2 mb-3 hover:border-white border-gray-500 border-1"  
                    />
                    <input 
                        type="password"
                        placeholder="Password" 
                        className="w-full px-2 mb-3 hover:border-white border-gray-500 border-1" 
                    />
                </div>
                <div className="mx-10 leading-10 ">
                    <button className=" bg-red-500  w-full">{ !isSignIn ? "Sign Up": "Sign In"}</button>
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
