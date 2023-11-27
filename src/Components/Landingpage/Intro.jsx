import React from 'react'

//images import 
import main from '../../assets/main.jpg'

//react router
import { Link } from 'react-router-dom'

const Intro = () => {

    

    return (
        <div className='md:flex justify-center items-center w-3/4 gap-10 mx-auto mt-14'>
            <div>
                <div className="head text-center md:text-start text-heading text-4xl lg:text-6xl font-bold">
                    <span className='text-main'>Newsfeed</span> - news app to learn full stack.
                </div>
                <div className="paragraph text-center md:text-start text-slate font-semibold mt-4 text-sm md:text-base">
                Introducing Newsfeed – the ultimate news companion offering swift, bite-sized updates at your fingertips! 🌐📲 Stay in the know with its intuitive design, making your news experience seamless. Whether you're a news enthusiast or just need the essentials, SnapNews has you covered. Download now for a quick, curated, and informative read! 🚀📰 #SnapNews #StayInformedSwiftly 🌟
                    <div className="initial-setups mt-5 text-white text-sm flex gap-3 justify-center md:justify-start">
                       <Link to={"/read-news"}><button className='bg-main w-44 px-4 py-3 rounded-3xl'>Start reading</button></Link> 
                        <Link to={"/create-newsfeed-account"}><button className='bg-btn w-44 px-4 py-3 rounded-3xl'>Create account</button></Link> 
                    </div>
                </div>
            </div>
            <img src={main} className='w-full md:w-[40%]' alt="" />
        </div>
    )
}

export default Intro
