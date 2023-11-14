import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

function formatDate(inputDate) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  const [year, month, day] = inputDate.split('-');
  const monthName = months[parseInt(month) - 1];

  return `${monthName} ${parseInt(day)}, ${year}`;
}

const Events = () => {
  const [events, setEvents] = useState([]);
  const [eventsRetrieved, setEventsRetrieved] = useState(false);

  useEffect(() => {
    axiosInstance.get("/events")
      .then(res => {
        setEvents(res.data);
        setEventsRetrieved(true);
      })
      .catch(err => console.error(err))
  }, []);

  return (
    <div className='w-screen h-screen container-content'>
      <section className='content'>
        <div className='absolute inset-0'>
          <div
            className="bg-cover w-full h-[400px] filter brightness-50 flex justify-center items-center"
            style={{
              backgroundImage: "url('unibuilding.jpg')",
              backgroundPosition: "center center",
            }}
          ></div>
        </div>
        <NavBar active="events" />
        <div className='relative flex flex-col justify-center items-center mb-36'>
          <h2 className='text-white opacity-100 z-20 subtitle-fade-in text-5xl'>Events</h2>
          <div className='flex flex-row justify-center items-center mt-10 space-x-2 mr-2'>
            <div className='line'></div>
            <h4 className='text-white subtitle-fade-in'>
              <a href='/' className='font-semibold opacity-80 hover:underline hover:cursor-pointer'>Home</a> / <span className='text-[#4ca4c8] font-semibold'>Events</span>
            </h4>
            <div className='line-reverse'></div>
          </div>
        </div>
      </section>
      <section className='content'>
        <div className='ml-10 md:ml-20 lg:ml-36'>
          <h1 className='text-4xl'>Upcoming Events</h1>
        </div>
        <div className={`flex flex-col justify-center ${events.length === 0 ? 'items-start' : 'items-center'}items-center mt-10 mb-32 mx-10 md:mx-20 lg:mx-36 space-y-10`}>
          {eventsRetrieved && events.length === 0 ? (
            <p className="text-2xl">No events are currently scheduled</p>
          ) : (
            events.map((event, i) => (
              <div key={i} className='event-card flex flex-col w-full lg:flex-row md:space-x-10 bg-[#f5f5f5] rounded-3xl'>
                <div className='flex justify-start items-start lg:w-1/2 min-h-[300px] md:h-[400px] overflow-hidden'>
                  <img
                    className='rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none w-full object-cover h-full'
                    src={`https://comilla-website-backend.onrender.com/uploads/${event.images[0]}`}
                    alt={event.name}
                  />
                </div>
                <div className='flex flex-col justify-around space-y-5 md:space-y-0 py-5 px-5 lg:w-1/2'>
                  <div className='flex flex-col space-y-5'>
                    <h1 className='text-4xl font-semibold'>{event.name}</h1>
                    <h2 className='text-lg font-light'>{formatDate(event.date)}</h2>
                    <h2 className='text-xl'>{event.location}</h2>
                  </div>
                  <Link
                    to='/singleEventPage'
                    state={{ event: event }}
                    className='pt-5'
                  >
                    <button className='border-2 font-bold border-[#4ca4c8] text-white bg-[#4ca4c8] hover:bg-white hover:text-[#4ca4c8] transition-all duration-150 rounded-lg px-4 py-3'>More Info</button>
                  </Link>
                </div>
              </div>
            ))
          )}
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
}

export default Events;
