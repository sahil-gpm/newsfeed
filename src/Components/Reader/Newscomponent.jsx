import React from 'react'
import { Link } from 'react-router-dom'
import no_image from '../../assets/no_image.png'

const Newscomponent = ({title,author,url,urlToImage,date}) => {
  return (
    <div className='w-72 h-96 rounded-md shadow-sm border-[4.5x] border-slate'>
        <img src={urlToImage ? urlToImage : no_image} alt="" className='w-full h-44 rounded-t-md object-cover' />
      <div className="title px-3 mt-2">
        <div className="author text-sm text-slate">
            {author ? author : "No author name"}
        </div>
        <div className='text-slate mt-2 text-sm px-3'>
        {title}
        </div>
      </div>
      <div className="date text-xs text-slate mt-4">
        Published on {date}
      </div>
      <Link to={url} target='_blank'><button className='text-sm text-white bg-main px-4 py-2 my-3 rounded-md'>Read full article</button></Link>
    </div>
  )
}

export default Newscomponent
