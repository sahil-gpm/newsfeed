import React from 'react'
import { Link } from 'react-router-dom'
const Navigationbar = () => {
  return (
    <div className='flex justify-between items-center pb-3 px-3 md:px-20 mx-auto mt-4 shadow-lg'>
     <Link to={"/"}> <div className='main-name capitalize text-2xl text-heading font-bold cursor-pointer'>Newsfeed<span className='text-main'>.</span></div></Link>
     
      <div className='text-slate text-sm font-semibold flex justify-start items-center gap-5 cursor-pointer '>
      <Link to={"/read-global-news"}><span className='hover:text-main transition-colors duration-500'>Global</span></Link>
      <Link to={"/about-me"}><span className='hover:text-main transition-colors duration-500'>About me</span></Link>
        <Link to={"/user-profile"}> <button className='bg-main text-white px-4 py-2 rounded-md'>Profile</button></Link>
      </div>
    </div>
  )
}

export default Navigationbar
