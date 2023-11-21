import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import ImageCarousel from './ImageCarousel';
import Footer from './Footer';

const SingleProjectPage = () => {
  const location = useLocation();
  const { project } = location.state;
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <div>
      <div className="absolute inset-0">
        <div
          className="bg-cover w-full h-[400px] filter brightness-50 flex justify-center items-center"
          style={{ backgroundImage: "url('unibuilding.jpg')" }}
        ></div>
      </div>
      <NavBar active="projects" />
      <section className='content'>
        <div className="flex flex-col justify-center items-center">
          <h2 className=" text-white text-center opacity-100 position relative z-20 mx-5 subtitle-fade-in text-3xl md:text-5xl">
            {project.name}
          </h2>
          <div className="flex flex-row justify-center items-center mt-10 space-x-2 mr-2">
            <div className="line"></div>
            <h4 className="position relative text-white subtitle-fade-in">
              <Link to="/" className="font-semibold opacity-80 hover:underline hover:cursor-pointer">
                Home
              </Link>{" "}
              /
              {" "}
              <Link to="/projects" className="font-semibold opacity-80 hover:underline hover:cursor-pointer">
                Projects
              </Link>{" "}
              / {" "}
              <span className="text-[#53a4db] font-semibold">
              {isSmallScreen ? (
                project.name.length > 15 ? `${project.name.slice(0, 15)}...` : project.name
              ) : (
                project.name
              )}
              </span>
            </h4>
            <div className="line-reverse"></div>
          </div>
        </div>
      </section>
      <section className='content mt-10'>
        <ImageCarousel images={project.images} />
      </section>
      <section className='content py-10 mb-10 md:mb-20 mx-10 md:mx-20 lg:mx-36'>
        <div className='flex flex-col md:space-x-5 mt-5 md:flex-row'>
          <div className='w-full md:w-1/4 bg-gray-600 rounded-md p-4'>
            <h1 className='text-2xl font-semibold text-white'>{project.name}</h1>
          </div>
          <div className='w-full md:w-3/4 mt-4 md:mt-0'>
            <div className='bg-gray-200 rounded-md p-6'>
              <h2 className='text-gray-800 text-lg font-semibold mb-2'>{project.location}</h2>
              <p className='text-gray-700 text-base'>{project.description}</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default SingleProjectPage;
