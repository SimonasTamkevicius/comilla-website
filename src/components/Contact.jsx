import React from 'react';
import NavBar from './NavBar';
import  { BsPhone, BsEnvelope, BsMap } from "react-icons/bs";
import { GoPaperAirplane } from "react-icons/go";
import GoogleMap from './GoogleMap';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className='w-screen h-screen container-content'>
      <section className='content'>
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
        <div className='relative flex flex-col md:grid md:grid-cols-12 md:grid-rows-6 px-5 space-y-4 md:space-y-0 md:px-20 mt-40 mb-20 fade-up md:space-x-6'>
            <div className='md:col-span-5 md:row-span-5 p-4 bg-gray-50 border-2 border-[#4ca4c8] rounded-md items-center'>
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
                    <div className='w-full h-full'>
                        <GoogleMap />
                    </div>
                </div>
            </div>
            <div className='md:col-span-7 md:row-span-5 p-4 bg-gray-50 border-2 border-[#4ca4c8] rounded-md items-center'>
                <form className='space-y-5'>
                    <div className='flex flex-col md:flex-row justify-between md:space-x-5'>
                        <div className='flex flex-col w-full space-y-2'>
                            <label className='text-gray-700 font-semibold text-2xl'>Name</label>
                            <input className='h-10 p-1 rounded-md focused-text-input focus:outline-[#4ca4c8]' type='text' placeholder='Your name' />
                        </div>
                        <div className='flex flex-col w-full space-y-2'>
                            <label className='text-gray-700 font-semibold text-2xl'>Email</label>
                            <input className='h-10 p-1 rounded-md focused-text-input focus:outline-[#4ca4c8]' type='email' placeholder='Your email' />
                        </div>
                    </div>
                    <div className='flex flex-col w-full space-y-2'>
                        <label className='text-gray-700 font-semibold text-2xl'>Subject</label>
                        <input className='h-10 p-1 rounded-md focused-text-input focus:outline-[#4ca4c8]' type='text' placeholder='Subject' />
                    </div>
                    <div className='flex flex-col w-full space-y-2'>
                        <label className='text-gray-700 font-semibold text-2xl'>Message</label>
                        <textarea className='p-1 rounded-md focused-text-input focus:outline-[#4ca4c8]' id="message" name="message" rows="6" placeholder='Message'></textarea>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='flex flex-row justify-between items-center border-2 border-white rounded-md hover:border-[#4ca4c8] bg-[#4ca4c8] hover:bg-white py-2 px-3 space-x-3 hovered-button transition-colors duration-300 ease-in-out md:mt-5'>
                            <p className='text-white text-hover-white'>Send</p>
                            <GoPaperAirplane className='text-white text-hover-white text-xl' />
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Contact;
