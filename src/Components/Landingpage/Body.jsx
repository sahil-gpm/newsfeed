import React from 'react'

const Body = () => {
  return (
    <div className='mx-auto md:flex justify-center mt-8 mb-4 gap-5'>
      <div className="box1 w-[80%] mx-auto md:w-[35%] md:mx-0 rounded-2xl shadow-md bg-main opacity-90">
        <div className="nav flex justify-start px-4 items-center gap-1 shadow-md py-4 rounded-t-2xl">
          <div className="red bg-white w-3 h-3 rounded-full"></div>
          <div className="yellow bg-white w-3 h-3 rounded-full"></div>
          <div className="green bg-white w-3 h-3 rounded-full"></div>
        </div>
        <div className="main-body px-20 py-20 h-[70%] flex text-center justify-center items-center text-3xl font-bold text-white tracking-tight">
          Search and read world wide news easily and read what you want 🔎
        </div>
      </div>

      <div className='mt-2 mx-auto w-[80%] md:w-[40%] md:mt-2 md:mx-0'>
        <div className="box2 rounded-2xl shadow-md">
          <div className="nav flex justify-start px-4 items-center gap-1 shadow-md py-4 rounded-t-2xl">
            <div className="red bg-main w-3 h-3 rounded-full"></div>
            <div className="yellow bg-heading w-3 h-3 rounded-full"></div>
            <div className="green bg-slate w-3 h-3 rounded-full"></div>
          </div>
          <div className="main-body text-2xl font-bold text-slate tracking-tight text-center p-10">
            Top latest news and updates daily 👍
          </div>
        </div>

        <div className="box3 mx-auto mt-2 bg-btn md:mx-0 rounded-2xl shadow-md">
          <div className="nav flex justify-start px-4 items-center gap-1 shadow-md py-4 rounded-t-2xl">
            <div className="red bg-main w-3 h-3 rounded-full"></div>
            <div className="yellow bg-heading w-3 h-3 rounded-full"></div>
            <div className="green bg-slate w-3 h-3 rounded-full"></div>
          </div>
          <div className="main-body text-2xl font-bold text-slate tracking-tight text-center p-10">
            Filter your personal categories of interest 🤞
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
