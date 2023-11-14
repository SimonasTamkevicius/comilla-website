import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { PiCaretDoubleRight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

const Projects = () => {
  const [hoveredCards, setHoveredCards] = useState([]);
  const [projects, setProjects] = useState([]);

  const handleHover = (cardNumber, isHovered) => {
    setHoveredCards((prevHoveredCards) => {
      const newHoveredCards = [...prevHoveredCards];
      newHoveredCards[cardNumber] = isHovered;
      return newHoveredCards;
    });
  };  

  useEffect(() => {
    axiosInstance
      .get('/project')
      .then((response) => {
        setProjects(response.data);
        setHoveredCards(new Array(response.data.length).fill(false));
      })
      .catch(function (err) {
        console.error('Error getting projects:', err);
      });
  }, []);

  return (
    <div className="w-screen h-screen container-content">
      <section className="content">
        <div className="absolute inset-0">
          <div
            className="bg-cover w-full h-[400px] filter brightness-50 flex justify-center items-center"
            style={{ backgroundImage: "url('unibuilding.jpg')" }}
          ></div>
        </div>
        <NavBar active="projects" />
        <div className="flex flex-col justify-center items-center">
          <h2 className=" text-white opacity-100 position relative z-20 subtitle-fade-in text-5xl">
            Projects
          </h2>
          <div className="flex flex-row justify-center items-center mt-10 space-x-2 mr-2">
            <div className="line"></div>
            <h4 className="position relative text-white subtitle-fade-in">
              <a href="/" className="font-semibold opacity-80 hover:underline hover:cursor-pointer">
                Home
              </a>{" "}
              / <span className="text-[#53a4db] font-semibold">Projects</span>
            </h4>
            <div className="line-reverse"></div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="relative flex flex-col mt-40 mb-20 md:mb-40 mx-10 md:mx-20 lg:mx-36 navbar-desktop">
          <div className="relative flex flex-col md:grid md:grid-cols-12 justify-center items-center gap-10">
            {projects.map((project, i) => {
              return (
                <Link
                  to="/singleProjectPage"
                  state={{ project: project }}
                  key={i}
                  className='relative flex flex-col col-span-6 fade-up overflow-hidden project-card hover:cursor-pointer'
                  onMouseEnter={() => handleHover(i, true)}
                  onMouseLeave={() => handleHover(i, false)}
                >
                  <div className="w-full h-[300px] md:h-[400px]">
                    <img
                      src={`http://localhost:9000/uploads/${project.images[0]}`}
                      alt="Project 1"
                      className="object-cover w-full h-full img-zoom"
                    />
                  </div>
                  <div className="flex justify-between px-10 items-center absolute bottom-0 w-full project-card-info bg-[#4ca4c8] bg-opacity-80 h-[75px]">
                    <p className="text-white font-bold text-2xl">{project.name}</p>
                    {hoveredCards[i] && <PiCaretDoubleRight className='text-3xl caret-animate' />}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
      <section className='contact-section navbar-desktop'>
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

export default Projects;
