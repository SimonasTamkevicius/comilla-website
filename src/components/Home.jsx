import React from 'react';
import NavBar from './NavBar';

const Home = () => {
  return (
    <div>
      <section>
        <div className='w-screen h-screen color-sweep-animation'>
          <div className='absolute inset-0'>
            <div
              className='bg-cover w-full h-full filter brightness-50'
              style={{ backgroundImage: "url('bgImage2.jpg')" }}
            >
            </div>
          </div>
          <NavBar active="home" />
          <div className='flex flex-col justify-center items-center mt-20 mx-3 md:mx-0'>
            <h2 className='text-white text-5xl subtitle-fade-in text-center'>
              Welcome to <span className='title-border-animation' style={{ position: 'relative' }}>Comilla Inc.</span>
              <br />
            </h2>
            <div className='line-animation-title mb-14'></div>
            <p className='text-white text-lg max-w-xl text-center mt-20 subtitle-fade-in'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className='flex justify-center items-center mt-10'>
            <button className='border-2 border-[#4ca4c8] rounded-xl p-2 text-white fade-up-button hover:bg-[#4ca4c8] transition-colors duration-100 ease-in'>Learn More</button>
          </div>
        </div>
      </section>
      <section>
        <div className='w-screen h-screen'>

        </div>
      </section>
    </div>
  );
};

export default Home;
