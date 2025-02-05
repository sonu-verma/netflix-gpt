import { signOut } from "firebase/auth"
import { useState } from "react"
import { useSelector } from "react-redux"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"

const Header = () => {

const user = useSelector( store => store.user)
const navigate = useNavigate()
const [showProfilePop, setShowProfilePop] = useState(false)

console.log("header user", user)

const handleSignOut =  () => {
    signOut(auth).then(() => {
        navigate("/")
      }).catch((error) => {
        // An error happened.
      });
      
}
return <>
        <div className="absolute w-screen bg-gradient-to-b from-black px-20 py-2 z-30 flex justify-between">
            <img 
                className="w-44"
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="Netflix Logo"
            />
            {
                (user && user?.uid) && (
                    <div>
                        <img 
                            onClick={ () => setShowProfilePop(!showProfilePop) }
                            className="h-10 w-10 mt-4 mx-2"
                            src={user.photoUrl}
                            // src="https://occ-0-3840-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                        />
                        {/* <button>Sign Out</button> */}
                        
                    </div>
                )
            }
           
        </div>
        {
            showProfilePop &&
            
            <div className="bg-black text-white p-4 w-50 absolute right-15 top-20">
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