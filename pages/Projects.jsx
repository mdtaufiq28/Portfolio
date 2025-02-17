import React from 'react'

const Projects = () => {
  return (
    <div className='flex flex-col items-center w-full px-10 gap-y-20'>

      <div className='text-4xl border-b-2 border-b-cyan-600 pb-2 decoration-cyan-600 max-lg:text-2xl'>Projects</div>
      
      <div className='flex flex-col items-start gap-y-5'>
        <p className='text-2xl max-lg:text-xl max-md:text-base max-sm:text-sm  font-bold'>DO DOing DOne - a Full Stack Task Management Application using ReactJS,TailwindCSS and Firebase</p>
        <div className='border-2 border-cyan-600 rounded-md w-full'>
            <img className='rounded-md ' src="/Project1.png" alt="" />
        </div>
      </div>

      <div className='flex flex-col items-start gap-y-5'>
        <p className='text-2xl max-lg:text-xl max-md:text-base max-sm:text-sm font-bold'>Allura - a Landing Page UI for Shoe Brand using ReactJS and TailwindCSS </p>
        <div className='border-2 border-cyan-600 rounded-md w-full'>
            <img className='rounded-md ' src="/Project2.png" alt="" />
        </div>
      </div>

      <div className='flex flex-col items-start gap-y-5'>
        <p className='text-2xl max-lg:text-xl max-md:text-base max-sm:text-sm font-bold'>Cofe N Chips - a Landing Page UI for a Coffee Brand using ReactJS and TailwindCSS </p>
        <div className='border-2 border-cyan-600 rounded-md w-full'>
            <img className='rounded-md ' src="/Project3.png" alt="" />
        </div>
      </div>

      <div className='flex flex-col items-start gap-y-5'>
        <p className='text-2xl max-lg:text-xl max-md:text-base max-sm:text-sm font-bold'>Weather Application using HTML,CSS,Javascript and OpenWeatherMap API </p>
        <div className='border-2 border-cyan-600 rounded-md w-full'>
            <img className='rounded-md ' src="/Project4.png" alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Projects
