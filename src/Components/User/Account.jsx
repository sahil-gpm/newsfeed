import React from 'react'
import { auth } from '../../FirebaseConfig/Firebase'
import Pagenotfound from '../../Pagenotfound/Pagenotfound'
import user from '../../assets/user.png'
import { signOut } from 'firebase/auth'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Account = () => {

  const navigate = useNavigate("/")

  return (
    <div>
      {auth.currentUser ? <div className="heading text-3xl text-slate font-slate font-bold text-center mt-20">
        Newsfeed welcomes you reader ➡️
         <div className="userlogdata mt-10 shadow-md py-16 w-[40%] mx-auto rounded-md">
            <img src={auth.currentUser.photoURL ? auth.currentUser.photoURL : user} className='w-32 mx-auto' alt="" />
            <div className="username text-xl mt-5">{auth.currentUser.displayName + "@newsfeedreader"}</div>
            <div className="usermail text-sm mt-1">{auth.currentUser.email} </div>
            <div className="usermail text-sm mb-4 mt-1">Account created with 🩶 on {auth.currentUser.metadata.creationTime.substring(0,17)} </div>
            <input id='profile_input' type="file" placeholder='Add profile picture' className='opacity-0 hidden' />
            <label htmlFor="profile_input" className='bg-main text-white text-sm px-4 py-2 rounded-md mt-10'>Add your profile picture</label><br />
            <button className='mt-6 text-slate text-sm font-normal' onClick={async()=>{
              await signOut(auth).then(()=>{
                toast.error("Logged out successfully")
                navigate("/")
              })
            }}>Logout</button>
        </div> </div>: <Pagenotfound/>}
    </div>
  )
}

export default Account
