import axios from 'axios'
import React, { useEffect, useState } from 'react'
import countryList from 'react-select-country-list'
import Newscomponent from './Newscomponent'
import toast from 'react-hot-toast'
import { auth } from '../../FirebaseConfig/Firebase'
import Pagenotfound from '../../Pagenotfound/Pagenotfound'

const News = () => {

    //states for category and country
    const [country, setCountry] = useState("in")
    const [category, setCategory] = useState("")
    const [newsarray, setNewsArray] = useState([])
    const topheadlineurl = `https://newsapi.org/v2/top-headlines?country=${country.toLowerCase()}&${category !== "" && `q=${category}`}&apiKey=b1f0cf2d3c2c4c2d926590c5c59073bc`

    useEffect(() => {
        if (!auth.currentUser) return
        let cancel = false
        if (cancel) return
        axios.get(topheadlineurl).then((data) => {
            setNewsArray(data.data.articles);
        }).catch((e) => {
            toast.error(e.message)
        })

        return () => cancel = true
    }, [category, country])

    return (
        <>
            {auth.currentUser ? <div>
                <div className="head text-5xl font-bold text-slate text-center mt-16">
                    Recent updates, headlines and many more to read ➡️
                </div>
                <div className="select-preferences text-center mb-10">
                    <div class="mt-5">
                        <div>
                            <label className='text-slate font-semibold mr-2'>Select your country 🇮🇳</label> <br />
                            <select defaultValue={"India"} onChange={(e) => setCountry(countryList().getValue(e.target.value))} className="mt-1 mb-2 rounded-md w-96 h-10 outline-none bg-white shadow-md text-slate">
                                {countryList().getValues().map((code) => {
                                    return (<option>
                                        <div className='countryName'>{countryList().getLabel(code)}</div>
                                    </option>)
                                })}
                            </select>
                        </div>
                        <label className='text-slate font-semibold mr-2'>Tell us your interests 👀</label> <br />
                        <input onChange={(e) => setCategory(e.target.value)} value={category} type="text" className='w-96 mt-2 shadow-sm outline-none px-3 py-2 rounded-md' placeholder='Search politcs, soprts, crypto, music etc' />
                    </div>
                </div>

                <div className="news mx-auto w-3/4 flex flex-wrap justify-center items-center gap-6 text-center">
                    {newsarray && newsarray.map((news) => {
                        return (
                            <Newscomponent title={news.title && news.title.substring(0, 80) + "..."} author={news.author} url={news.url} urlToImage={news.urlToImage} date={news.publishedAt} />
                        )
                    })}
                </div>
            </div> : <Pagenotfound />
            }
        </>
    )
}

export default News
