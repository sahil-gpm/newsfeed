import React from 'react'
import nopage from '../assets/nopagefound.png'
import { Link } from 'react-router-dom'
const Pagenotfound = () => {
    return (
        <div>
            <img src={nopage} className='w-36 mx-auto mt-24' alt="" />
            <div className="head text-6xl font-bold tracking-tight text-slate text-center mt-6">
                404 error
                <div className="msg text-3xl mt-2 font-semibold tracking-normal">
                    Page not found
                </div>
                <Link to="/"> <label className="message text-sm text-slate font-normal tracking-normal cursor-pointer hover:text-main">
                    Check if you are logged out
                </label>
                </Link>
            </div>
        </div>
    )
}

export default Pagenotfound
