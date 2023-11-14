import React, { useState } from 'react'
import axiosInstance from '../../../utils/axiosInstance';
import { useAuth } from '../../utils/AuthContext';
import NavBar from '../NavBar';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const { user, loginUser } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        } else {
            setPassword(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        setLoading(true);

        axiosInstance.post("/login", formData, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(function(response) {
            console.log(response);
            const { accessToken, email, _id, message } = response.data;
            loginUser(accessToken, _id, email)
            setMessage(message);
            setTimeout(() => {
                setMessage('');
                navigate('/manage');
            }, 2000)
        })
        .catch (function (error) {
            console.log(error);
        })
        .finally (() => {
            setLoading(false)
        })
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
  return (
    <div>
        <div className='absolute inset-0'>
            {loading && (
                <div className='bg-black absolute inset-0 opacity-50 z-10 flex justify-center items-center'>
                    <div className="loader absolute text-5xl" />
                </div>
            )}
            {message && (
                <div className='bg-black absolute inset-0 opacity-50 z-10 flex justify-center items-center'>
                    <p className='text-white text-2xl'>{message}</p>
                </div>
            )}
            <div
                className='bg-cover w-full h-[190px] filter brightness-50 flex justify-center items-center'
                style={{ backgroundImage: "url('unibuilding.jpg')" }}
            >
            </div>
        </div>
        <NavBar />
        <div className='flex flex-col justify-center items-center mt-10 relative mx-10'>
            <h1 className='text-4xl'>Company Login</h1>
            <form className='mt-10 border-2 border-[#4ca4c8] p-5 rounded-md w-full md:w-[500px] space-y-4' onSubmit={handleSubmit}>
                <div className='flex flex-col w-full space-y-2'>
                    <label className='text-gray-700 font-semibold text-2xl'>Email</label>
                    <input onChange={handleChange} required name='email' value={email} className='h-10 p-1 rounded-md focused-text-input focus:outline-[#4ca4c8] bg-gray-100' type='email' placeholder='Enter email' />
                </div>
                <div className='relative flex flex-col w-full space-y-2'>
                    <label className='text-gray-700 font-semibold text-2xl'>Password</label>
                    <input onChange={handleChange} required name='password' value={password} className='h-10 p-1 rounded-md focused-text-input focus:outline-[#4ca4c8] bg-gray-100' type={showPassword ? "text" : "password"} placeholder='Enter password' />
                    <span
                        className="absolute right-3 top-10 cursor-pointer"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <AiOutlineEye className='text-xl' /> : <AiOutlineEyeInvisible className='text-xl' />}
                    </span>
                </div>
                <div className='flex justify-center'>
                    <button type='submit' className='border-2 border-white rounded-md hover:border-[#4ca4c8] bg-[#4ca4c8] hover:bg-white py-2 px-4 space-x-3 hovered-button transition-colors duration-300 ease-in-out md:mt-5'>
                        <p className='text-white text-hover-white'>Login</p>
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login