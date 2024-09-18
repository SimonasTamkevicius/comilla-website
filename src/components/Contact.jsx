import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { BsEnvelope, BsPhone, BsMap } from "react-icons/bs";
import { GoPaperAirplane } from "react-icons/go";
import { FaCheck } from "react-icons/fa";
import GoogleMap from './GoogleMap';
import Footer from './Footer';
import emailjs, { send } from 'emailjs-com';

const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;

emailjs.init(publicKey);

const Contact = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_subject: '',
        message: '',
    });

    const [messageSent, setMessageSent] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.sendForm(serviceID, templateID, e.target);

            setMessageSent(true);
            setFormData({
                user_name: '',
                user_email: '',
                user_subject: '',
                message: '',
            });
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
      
  return (
    <div className='w-screen h-screen container-content'>
      <section className='content'>
        <div className='absolute inset-0'>
        <div
            className="bg-cover w-full h-[400px] filter brightness-50 flex justify-center items-center"
            style={{
                backgroundImage: "url('Callus.jpg')",
                backgroundPosition: "center center",
            }}
        ></div>
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
        <div className='relative flex flex-col md:grid md:grid-cols-12 md:grid-rows-6 px-5 space-y-4 md:space-y-0 lg:px-20 mt-5 mb-20 md:mb-0 md:space-x-6 w-full'>
            <div className='md:col-span-5 md:row-span-5 p-4 bg-gray-50 border-2 border-[#4ca4c8] rounded-md items-center fade-up'>
                <div className='space-y-2'>
                    <div className='flex flex-row items-center space-x-4 hovered p-2 rounded-md'>
                        <div className='rounded-full p-2 bg-white icon'>
                            <BsEnvelope className='text-2xl text-[#4ca4c8] icon-color' />
                        </div>
                        <div>
                            <h4 className='text-gray-700 font-semibold text-2xl'>Email Us</h4>
                            <p className='text-gray-500'>rfq@comillainc.com</p>
                        </div>
                    </div>
                    <div className='flex flex-row items-center space-x-4 hovered p-2 rounded-md'>
                        <div className='rounded-full p-2 bg-white icon'>
                            <BsPhone className='text-2xl text-[#4ca4c8] icon-color' />
                        </div>
                        <div className='flex flex-col'>
                            <h4 className='text-gray-700 font-semibold text-2xl'>Call Us</h4>
                            <p className='text-gray-500'>437-880-7851</p>
                        </div>
                    </div>
                    <div className='flex flex-row items-center space-x-4 hovered p-2 rounded-md'>
                        <div className='rounded-full p-2 bg-white icon'>
                            <BsMap className='text-2xl text-[#4ca4c8] icon-color' />
                        </div>
                        <div className='flex flex-col'>
                            <h4 className='text-gray-700 font-semibold text-2xl'>Address</h4>
                            <p className='text-gray-500'>1260 Journey's End Circle, Unit 9, Markham, Ontario</p>
                        </div>
                    </div>
                    <div className='w-full h-full'>
                        <GoogleMap />
                    </div>
                </div>
            </div>
            {!messageSent &&
            <div className='md:col-span-7 md:row-span-5 p-4 bg-gray-50 border-2 border-[#4ca4c8] rounded-md items-center fade-up-delayed'>
                <form className='space-y-5' onSubmit={handleSubmit}>
                    <div className='flex flex-col lg:flex-row justify-between lg:space-x-5'>
                        <div className='flex flex-col w-full space-y-2'>
                            <label className='text-gray-700 font-semibold text-2xl'>Name</label>
                            <input value={formData.user_name} onChange={handleChange} className='h-10 p-1 rounded-md focused-text-input focus:outline-[#4ca4c8]' type='text' placeholder='Your name' name='user_name' required />
                        </div>
                        <div className='flex flex-col w-full space-y-2 mt-2 lg:mt-0'>
                            <label className='text-gray-700 font-semibold text-2xl'>Email</label>
                            <input value={formData.user_email} onChange={handleChange} className='h-10 p-1 rounded-md focused-text-input focus:outline-[#4ca4c8]' type='email' placeholder='Your email' name='user_email' required />
                        </div>
                    </div>
                    <div className='flex flex-col w-full space-y-2'>
                        <label className='text-gray-700 font-semibold text-2xl'>Subject</label>
                        <input value={formData.user_subject} onChange={handleChange} className='h-10 p-1 rounded-md focused-text-input focus:outline-[#4ca4c8]' type='text' placeholder='Subject' name='user_subject' required />
                    </div>
                    <div className='flex flex-col w-full space-y-2'>
                        <label className='text-gray-700 font-semibold text-2xl'>Message</label>
                        <textarea value={formData.message} onChange={handleChange} className='p-1 rounded-md focused-text-input focus:outline-[#4ca4c8]' id="message" name="message" rows="6" placeholder='Message' required></textarea>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button type='submit' className='flex flex-row justify-between items-center border-2 border-white rounded-md hover:border-[#4ca4c8] bg-[#4ca4c8] hover:bg-white py-2 px-3 space-x-3 hovered-button transition-colors duration-300 ease-in-out md:mt-5'>
                            <p className='text-white text-hover-white'>Send</p>
                            <GoPaperAirplane className='text-white text-hover-white text-xl' />
                        </button>
                    </div>
                </form>
            </div>
            }
            {messageSent &&
                <div className='message-sent md:col-span-7 md:row-span-5 flex flex-col p-4 bg-gray-50 border-2 border-[#4ca4c8] rounded-md justify-center items-center space-y-10'>
                    <div className="border-2 rounded-full border-gray-400 p-5 animated-check">
                        <FaCheck className="text-4xl" />
                    </div>
                    <h1 className='text-4xl text-center'>Your Message Has Been Sent!</h1>
                    <button onClick={() => {setMessageSent(false)}} className='flex flex-row justify-between items-center border-2 text-white hover:text-black border-white rounded-md hover:border-[#4ca4c8] bg-[#4ca4c8] hover:bg-white py-2 px-5 space-x-3 hovered-button transition-colors duration-300 ease-in-out md:mt-5'>Back</button>
                </div>
            }
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Contact;
