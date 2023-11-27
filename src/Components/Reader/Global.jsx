import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import Newscomponent from './Newscomponent'
import { auth } from '../../FirebaseConfig/Firebase'
import Pagenotfound from '../../Pagenotfound/Pagenotfound'
import { FadeLoader } from 'react-spinners'

const Global = () => {

    const [newsArray, setNewsArray] = useState([])
    const [fetching,setFetching] = useState(false)
    const [category, setCategory] = useState("")

    useEffect(() => {
        if(!auth.currentUser) return
        let cancel = false
        if(cancel) return
        setFetching(true)
        axios.get(`https://newsapi.org/v2/everything?q=${category !== "" && `q=${category}`}&apiKey=b1f0cf2d3c2c4c2d926590c5c59073bc`).then((data) => {
            setNewsArray(data.data.articles);
        }).catch((e) => {
            toast.error(e.message)
        })
        setFetching(false)
        return ()=> cancel = true
    }, [category])

    return (
        <>
        {auth.currentUser ?
             <div className='text-center'>
            <div className="head text-5xl font-bold text-slate text-center mt-16 mb-5">
                Explore and read the news across the globe 🌍
            </div>
            <label className='text-slate font-semibold mr-2'>Tell us your interests 👀</label> <br />
            <input onChange={(e) => setCategory(e.target.value)} value={category} type="text" className='w-96 mt-2 shadow-sm outline-none px-3 py-2 rounded-md' placeholder='Search politcs, soprts, crypto, music etc' />
            <div className="news mx-auto w-3/4 flex flex-wrap justify-center mt-7 items-center gap-6 text-center">
                {newsArray && newsArray.map((news) => {
                    return (
                        <Newscomponent title={news.title && news.title.substring(0, 80) + "..."} author={news.author} url={news.url} urlToImage={news.urlToImage} date={news.publishedAt} />
                    )
                })}

                {fetching && <FadeLoader color='#1e3a8a' title='Loading news articles'/>}
            </div>
        </div> : <Pagenotfound/>}
        </>
    )
}

export default Global
