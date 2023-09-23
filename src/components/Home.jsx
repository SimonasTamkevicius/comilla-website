import React, { useState, useEffect} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const isMobileScreen = () => {
    return window.innerWidth <= 767;
};

const Home = () => {
  const [isMobile, setIsMobile] = useState(isMobileScreen());
  return (
    <div className='w-screen h-screen container-content'>
      <section className='content'>
        <div className='color-sweep-animation'>
          <div className='absolute inset-0'>
            <div
              className='bg-cover w-full h-full filter brightness-50'
              style={{ backgroundImage: "url('bgImage2.jpg')" }}
            >
            </div>
          </div>
          <NavBar active="home" />
          <div className='flex flex-col mt-20 mx-10 md:mx-20 lg:mx-36'>
            <h2 className='text-white text-5xl fade-down mt-10'>
              Welcome to <span className='title-border-animation' style={{ position: 'relative' }}>Comilla Inc.</span>
              <br />
            </h2>
            <div>
                {isMobile ? (
                    <div className='line-animation-title-mobile'></div>
                ) : (
                    <div className='line-animation-title'></div>
                )}
            </div>
            <p className='text-white text-lg max-w-lg mt-10 fade-up'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className='flex justify-end items-center mt-10 mx-10 md:mx-20 lg:mx-36 max-w-lg'>
            <button className='border-2 border-[#4ca4c8] rounded-xl p-2 text-white fade-up-button hover:bg-[#4ca4c8] transition-colors duration-100 ease-in'>Learn More</button>
          </div>
        </div>
      </section>
      <section>
        <div className='w-screen h-screen'>

        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
