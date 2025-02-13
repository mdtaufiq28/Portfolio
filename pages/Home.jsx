import React from 'react'

const Home = () => {
  return (
    <div className='pl-20 flex flex-col items-start gap-y-7 '>
        <p className='text-7xl font-bold'>
          Muhammad Taufiq
        </p>

        <p className='ml-1 text-2xl'>Front-End Web Developer | ReactJS HTML CSS Javascript</p>
        
        <div className='flex '>
        <button className='ml-1 bg-cyan-700 text-white p-6 rounded-full cursor-pointer'>
          Download Resume
        </button>

      </div>
    </div>
  )
}

export default Home
