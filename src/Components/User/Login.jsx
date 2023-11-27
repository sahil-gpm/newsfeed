import React, { useState } from 'react'
import { auth } from '../../FirebaseConfig/Firebase'
import toast from 'react-hot-toast'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [userData, setuserData] = useState({
        pass: "",
        email: "",
        confirm_pass: ""
    })

    const navigate = useNavigate("/")

    const validateUserData = () => {
        const inputs = document.getElementsByTagName("input")
        Array.from(inputs).forEach((input) => {
            if (!input.value) {
                input.style.backgroundColor = '#f8d7da'

            }
            else {
                input.style.backgroundColor = '#d1e7dd'
            }
        })
    }

    const signUp = async () => {

        if (!userData.email || !userData.confirm_pass || !userData.pass) {
            toast.error("Mention all the required fields")
            return
        }

        if (userData.confirm_pass !== userData.pass) {
            toast.error("Match the passwords properly")
            return
        }

        signInWithEmailAndPassword(auth, userData.email, userData.pass).then(async () => {
            toast.success("Logged into account")
            navigate("/")
            return
        }).catch((e) => {
            toast.error(e.message)
        })
    }

    return (
        <div className='h-[90vh] flex flex-col justify-center'>
            <div className="head text-2xl font-bold text-slate text-center">
                Log into your <span className='text-main'>Newsfeed</span> account 📰
            </div>

            <div onChange={validateUserData} className="flex flex-col justify-center items-center gap-4 mt-5 shadow-md w-[36%] mx-auto py-14 rounded-md">
                <div className="usermail">
                    <label className='text-slate'>Email</label><br />
                    <input type="email" onChange={(e) => { setuserData({ ...userData, email: e.target.value }) }} className='shadow-sm px-2 py-2 rounded-md  text-sm w-96 outline-none' placeholder='Email' />
                </div>
                <div className="userpasssword">
                    <label className='text-slate'>Password</label><br />
                    <input type="password" onChange={(e) => { setuserData({ ...userData, pass: e.target.value }) }} className='shadow-sm px-2 py-2 rounded-md text-sm w-96 outline-none' placeholder='Password' />
                </div>
                <div className="userpassswordconfirm">
                    <label className='text-slate'>Confirm password</label><br />
                    <input type="password" onChange={(e) => { setuserData({ ...userData, confirm_pass: e.target.value }) }} className='shadow-sm px-2 py-2 rounded-md text-sm w-96 outline-none' placeholder='Confirm password' />
                </div>
                <button onClick={signUp} className='bg-main text-white py-3 rounded-3xl w-96 mt-4'>Log into account</button>
            </div>

            <div className="go-to-signin text-sm text-slate text-center mt-5">
                Don't have an account ? <Link to={'/create-newsfeed-account'}><span className='text-main hover:underline'>Sign up</span></Link>
            </div>
        </div>
    )
}

export default Login