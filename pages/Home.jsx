import React from 'react'

const Home = () => {
  return (
    <div className='pl-20 flex flex-col items-start gap-y-7 max-md:gap-y-6 max-md:pl-10 max-sm:pl-6 max-md:items-center'>
        <p className='text-7xl font-bold max-lg:text-5xl max-md:text-3xl'>Muhammad Taufiq</p>

        <p className='ml-1 text-2xl max-lg:text-xl max-md:text-lg max-md:pr-5'>Front-End Web Developer | ReactJS HTML CSS Javascript </p>
        
        <a href="https://drive.google.com/uc?export=download&id=1tdjvZndJvjUok98fD5Zh8nssjcyItdNo"  download={"Muhammad Taufiq - Resume"} className=' bg-cyan-700 text-white p-6 max-sm:-ml-1 rounded-full cursor-pointer max-lg:text-xl max-md:text-lg max-md:p-4'>Download Resume</a>

    </div>
  )
}

export default Home
