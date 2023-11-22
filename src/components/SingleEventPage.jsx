import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import { Link, useLocation } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';
import Footer from './Footer';

function formatDate(inputDate) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];
  
    const [year, month, day] = inputDate.split('-');
    const monthName = months[parseInt(month) - 1];
  
    return `${monthName} ${parseInt(day)}, ${year}`;
}

function formatTime(inputTime) {
    const [hour, minute] = inputTime.split(':');
    const hourInt = parseInt(hour);
    const minuteInt = parseInt(minute);
    
    const ampm = hourInt >= 12 ? 'PM' : 'AM';
    const hour12 = hourInt % 12 === 0 ? 12 : hourInt % 12;
    const minuteString = minuteInt < 10 ? `0${minuteInt}` : minuteInt;
    
    return `${hour12}:${minuteString} ${ampm}`;
}

const SingleEventPage = () => {
    const location = useLocation();
    const { event } = location.state;
    const [isSmallScreen, setIsSmallScreen] = useState(false);
  
    console.log(event);
  
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
  
    const descriptionParagraphs = event.description.split('\n').map((paragraph, index) => (
      <p key={index} className="max-w-5xl text-lg">
        {paragraph}
      </p>
    ));
  
    return (
      <div>
        <div className="absolute inset-0">
          <div
            className="bg-cover w-full h-[400px] filter brightness-50 flex justify-center items-center"
            style={{ backgroundImage: "url('unibuilding.jpg')" }}
          ></div>
        </div>
        <NavBar active="events" />
        <section className="content">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-white text-center opacity-100 position relative z-20 mx-5 subtitle-fade-in text-3xl md:text-5xl">
              {event.name}
            </h2>
            <div className="flex flex-row justify-center items-center mt-10 space-x-2 mr-2">
              <div className="line"></div>
              <h4 className="position relative text-white subtitle-fade-in">
                <Link to="/" className="font-semibold opacity-80 hover:underline hover:cursor-pointer">
                  Home
                </Link>{" "}
                /
                {" "}
                <Link to="/events" className="font-semibold opacity-80 hover:underline hover:cursor-pointer">
                  Events
                </Link>{" "}
                / {" "}
                <span className="text-[#53a4db] font-semibold">
                  {isSmallScreen ? (
                    event.name.length > 15 ? `${event.name.slice(0, 15)}...` : event.name
                  ) : (
                    event.name
                  )}
                </span>
              </h4>
              <div className="line-reverse"></div>
            </div>
          </div>
        </section>
        <section className="content mt-10">
          <ImageCarousel images={event.images} />
        </section>
        <section className="content py-10 mb-10 md:mb-20 mx-10 md:mx-20 lg:mx-36">
          <h1 className="text-4xl font-bold mb-2">{event.name}</h1>
          <div className="flex flex-row space-x-5">
            <p className='font-semibold'>{formatDate(event.date)}</p>
            <p className="mb-1 font-semibold">{formatTime(event.time)}</p>
          </div>
          <p className="mt-1 mb-10">{event.location}</p>
          {descriptionParagraphs}
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  };
  
  export default SingleEventPage;