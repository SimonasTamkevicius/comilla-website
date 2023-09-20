import React from 'react'
import NavBar from './NavBar';

const Design = () => {
  return (
    <div className='w-screen h-screen bg-gray-300'>
        <section>
            <div className='absolute inset-0'>
                <div
                className='bg-cover w-full h-[400px] filter brightness-50 flex justify-center items-center'
                style={{ backgroundImage: "url('unibuilding.jpg')" }}
                >
                </div>
            </div>
            <NavBar active="design" />
            <div className='flex flex-col justify-center items-center'>
                <h2 className=' text-white opacity-100 position relative z-20 subtitle-fade-in text-5xl'>Design</h2>
                <div className='flex flex-row justify-center items-center mt-10 space-x-2 mr-2'>
                    <div className='line'></div>
                    <h4  className='position relative text-white subtitle-fade-in'><a href='/' className='font-semibold opacity-80 hover:underline hover:cursor-pointer'>Home</a> / <span className='text-[#4ca4c8] font-semibold'>Design</span></h4>
                    <div className='line-reverse'></div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Design;
