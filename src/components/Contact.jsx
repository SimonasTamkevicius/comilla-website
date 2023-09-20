import React from 'react';
import NavBar from './NavBar';
import  { BsPhone, BsEnvelope, BsMap } from "react-icons/bs";

const Contact = () => {
  return (
    <div>
      <div className='absolute inset-0'>
        <div
          className='bg-cover w-full h-[400px] filter brightness-50 flex justify-center items-center'
          style={{ backgroundImage: "url('unibuilding.jpg')" }}
        >
        </div>
      </div>
      <NavBar active="contact" />
      <div className='relative flex flex-col justify-center items-center mb-36'>
        <h2 className='text-white opacity-100 z-20 subtitle-fade-in text-5xl'>Contact</h2>
        <div className='flex flex-row justify-center items-center mt-10 space-x-2 mr-2'>
          <div className='line'></div>
          <h4 className='text-white subtitle-fade-in'>
            <a href='/' className='font-semibold opacity-80 hover:underline hover:cursor-pointer'>Home</a> / <span className='text-[#4ca4c8] font-semibold'>Contact</span>
          </h4>
          <div className='line-reverse'></div>
        </div>
      </div>
      <div className='w-screen h-screen relative flex flex-col flex-wrap md:grid md:grid-cols-12 md:grid-rows-6 px-5 space-y-4 md:space-y-0 md:px-20 mt-60 mb-20 fade-up space-x-6'>
        <div className='md:col-span-5 md:row-span-5 p-4 bg-gray-100 items-center'>
            <div className='space-y-2'>
                <div className='flex flex-row items-center space-x-4 hovered p-2 rounded-md'>
                    <div className='rounded-full p-2 bg-white icon'>
                        <BsEnvelope className='text-2xl text-[#4ca4c8] icon-color' />
                    </div>
                    <div>
                        <h4 className='text-gray-700 font-semibold text-2xl'>Email Us</h4>
                        <p className='text-gray-500'>comilla@email.com</p>
                    </div>
                </div>
                <div className='flex flex-row items-center space-x-4 hovered p-2 rounded-md'>
                    <div className='rounded-full p-2 bg-white icon'>
                        <BsPhone className='text-2xl text-[#4ca4c8] icon-color' />
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-gray-700 font-semibold text-2xl'>Call Us</h4>
                        <p className='text-gray-500'>1234567890</p>
                    </div>
                </div>
                <div className='flex flex-row items-center space-x-4 hovered p-2 rounded-md'>
                    <div className='rounded-full p-2 bg-white icon'>
                        <BsMap className='text-2xl text-[#4ca4c8] icon-color' />
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-gray-700 font-semibold text-2xl'>Address</h4>
                        <p className='text-gray-500'>123 Test Road, Test, ON</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='md:col-span-7 md:row-span-5 p-4 border'>
            <form>
                <div className='flex flex-col'>
                    <label>Name</label>
                    <input type='text' placeholder='Your name' />
                </div>
                <div className='flex flex-col'>
                    <label>Email</label>
                    <input type='text' placeholder='Your email' />
                </div>
                <div className='flex flex-col'>
                    <label>Subject</label>
                    <input type='text' placeholder='Subject' />
                </div>
                <div className='flex flex-col'>
                    <label>Message</label>
                    <input type='text' placeholder='Message' />
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
