import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import PreloadImage from '../utils/PreloadImage';

const isMobileScreen = () => {
  return window.innerWidth <= 767;
};

const Home = () => {
  const isMobile = isMobileScreen();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return (
    <div>
      <section className='content w-screen h-screen'>
        <PreloadImage src='projectInProgressRender.jpg' />
        <div className='color-sweep-animation'>
          <div className='absolute inset-0'>
            <div
              className='bg-cover w-full h-full filter img-brightness'
              style={{ backgroundImage: "url('projectInProgressRender.jpg')" }}
            ></div>
          </div>
          <NavBar active="home" />
          <div className='flex justify-center mt-20'>
            <div>
              <div className='flex flex-col mt-5 md:mt-0 mx-10 md:mx-20 lg:mx-36'>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='contact-section'>
        <h1 className='contact-title'>Ready to work with us?</h1>
        <p className='contact-description'>Get in touch with us today to discuss your next project.</p>
        <Link to='/contact'>
          <button className='contact-button'>Let's Build Together</button>
        </Link>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
