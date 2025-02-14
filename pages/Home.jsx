import React from 'react'

const Home = () => {
  return (
    <div className='pl-20 flex flex-col items-center gap-y-7 '>
        <p className='text-7xl font-bold '>Muhammad Taufiq</p>

        <p className='ml-1 text-2xl'>Front-End Web Developer | ReactJS HTML CSS Javascript</p>
        
        <div className='flex '>
        <a href="https://drive.google.com/uc?export=download&id=1tdjvZndJvjUok98fD5Zh8nssjcyItdNo"  download={"Muhammad Taufiq - Resume"} className='ml-1 bg-cyan-700 text-white p-6 rounded-full cursor-pointer'>
          Download Resume
        </a>

      </div>
    </div>
  )
}

export default Home
