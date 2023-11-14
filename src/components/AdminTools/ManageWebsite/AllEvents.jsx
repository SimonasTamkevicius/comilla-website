import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../../utils/axiosInstance';
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';

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

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [customAlert, setCustomAlert] = useState({
    isOpen: false,
    message: '',
    onConfirm: null,
    onCancel: null,
  });

  useEffect(() => {
    axiosInstance
      .get('/events')
      .then((response) => {
        setEvents(response.data);
        setIsLoading(false);
      })
      .catch(function (err) {
        console.error('Error getting events:', err);
        setIsLoading(false);
      });
  }, []);

  const handleDeleteConfirmation = (eventId) => {
    setDeleteConfirmation(eventId);

    setCustomAlert({
      isOpen: true,
      message: 'Are you sure you want to delete this event?',
      onConfirm: () => handleDeleteEvent(eventId),
      onCancel: handleCancelDelete,
    });
  };

  const handleDeleteEvent = (eventId) => {
    axiosInstance
      .delete(`/events/${eventId}`)
      .then((response) => {
        console.log(response.data);
        setEvents(events.filter((event) => event._id !== eventId));
        setDeleteConfirmation(null);
      })
      .catch((error) => {
        console.error('Error deleting event:', error);
        setDeleteConfirmation(null);
      });
  };

  const handleCancelDelete = () => {
    setDeleteConfirmation(null);
  };

  return (
    <div className={`all-events-container ${isLoading && 'dim-background'}`}>
      <h1 className="text-center font-semibold text-3xl mb-4">All Events</h1>
      {isLoading ? (
        <div className="loader absolute text-5xl" />
      ) : (
        <div className='md:grid grid-cols-2 gap-10'>
          {events.map((event, i) => {
            const isDeleteConfirmationActive = deleteConfirmation === event._id;
            return (
              <div key={i} className="event-card-manage relative">
                <Link to="/EditEvent" state={{ event: event }} className='absolute top-3 right-3'>
                  <FaRegEdit className='text-2xl' />
                </Link>
                <div className={`${isDeleteConfirmationActive ? 'dim-background' : ''}`}>
                  {isDeleteConfirmationActive ? (
                    <div className="bg-white p-10 rounded space-y-10 border-2 border-gray-700 relative">
                      <RxCross1 onClick={handleCancelDelete} className='absolute top-3 right-3 text-3xl bg-gray-200 hover:bg-gray-300 transition-all duration-100 ease-in-out p-1 rounded-sm hover:cursor-pointer' />
                      <p className="text-3xl max-w-xs">
                        Are you sure you want to delete this event?
                      </p>
                      <div className="flex flex-row justify-center space-x-10">
                        <button
                          className="text-2xl border-2 border-[#4CAF50] hover:text-white hover:bg-[#4CAF50] rounded-md py-1 px-4 transition-all duration-200 ease-in-out"
                          onClick={() => handleDeleteEvent(event._id)}
                        >
                          Yes
                        </button>
                        <button
                          className="text-2xl border-2 border-[#FF5733] hover:text-white hover:bg-[#FF5733] rounded-md py-1 px-4 transition-all duration-200 ease-in-out"
                          onClick={handleCancelDelete}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <FaTrash className='absolute text-2xl top-3 right-12 hover:cursor-pointer' onClick={() => handleDeleteConfirmation(event._id)} />
                      <h2>{event.name}</h2>
                      <div className='flex flex-row space-x-5 mb-2'>
                        <h4>{formatDate(event.date)}</h4>
                        <h4>{formatTime(event.time)}</h4>
                      </div>
                      <h4>{event.location}</h4>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AllEvents;
