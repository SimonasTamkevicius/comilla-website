import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosInstance';
import NavBar from '../../NavBar';

const EditEvent = () => {
  const location = useLocation();
  const { event } = location.state;

  const [eventID, setEventID] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [imagesToUpdate, setImagesToUpdate] = useState({});

  useEffect(() => {
    setEventID(event._id || '');
    setName(event.name || '');
    setDescription(event.description || '');
    setEventLocation(event.location || '');
    setEventDate(event.date || '');
    setEventTime(event.time || '');

    const imagesState = {};
    for (let i = 1; i <= 6; i++) {
      const fieldName = `image${i}`;
      imagesState[fieldName] = null;
    }
    setImagesToUpdate(imagesState);
  }, [event]);

  const handleInputChange = (e) => {
    const { name, type } = e.target;
    if (name.startsWith('image') && type === 'file') {
      setImagesToUpdate({
        ...imagesToUpdate,
        [name]: e.target.files[0],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("_id", eventID);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("location", eventLocation);
    formData.append("date", eventDate);
    formData.append("time", eventTime);

    for (let i = 1; i <= 6; i++) {
      const fieldName = `image${i}`;
      if (imagesToUpdate[fieldName] !== null) {
        formData.append(fieldName, imagesToUpdate[fieldName]);
      }
    }

    axiosInstance
      .patch("/events", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        window.history.back();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <section className="content">
        <div className="absolute inset-0">
          <div
            className="bg-cover w-full h-[400px] filter brightness-50 flex justify-center items-center"
            style={{ backgroundImage: "url('unibuilding.jpg')" }}
          ></div>
        </div>
        <NavBar active="events" />
        <div className="flex flex-col justify-center items-center">
          <h2 className=" text-white opacity-100 position relative z-20 subtitle-fade-in text-5xl">
            Edit Event
          </h2>
          <div className="flex flex-row justify-center items-center mt-10 space-x-2 mr-2">
            <div className="line"></div>
            <h4 className="position relative text-white subtitle-fade-in">
              <a href="/manage" className="font-semibold opacity-80 hover:underline hover:cursor-pointer">
                Events
              </a>{" "}
              / <span className="text-[#53a4db] font-semibold">{event.name}</span>
            </h4>
            <div className="line-reverse"></div>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center mx-10 mt-40 relative">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-white border-2 border-[#4ca4c8] shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-[#4ca4c8]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-[#4ca4c8]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-[#4ca4c8]"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-[#4ca4c8]"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-[#4ca4c8]"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:grid grid-cols-2 gap-4">
            {Array.from({ length: 6 }, (_, i) => {
              const imageNumber = i + 1;
              const fieldName = `image${imageNumber}`;
              const currentImage = event.images[i];

              return (
                <div className="mb-4 relative" key={fieldName}>
                  <label htmlFor={fieldName} className="block text-gray-700 text-sm font-bold mb-2">
                    Update Image {imageNumber}
                    <br />
                    <span className="text-gray-500">
                      {currentImage ? '' : 'No Image'}
                    </span>
                  </label>
                  <div>
                    <span>
                      {currentImage && (
                        <img src={currentImage} alt={`Image ${imageNumber}`} className='w-60 h-32' />
                      )}
                    </span>
                    <input
                      type="file"
                      name={fieldName}
                      id={fieldName}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-[#4ca4c8]"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row justify-end space-x-3">
            <button
              href="/manage"
              className="bg-red-400 hover:bg-red-500 transition-all duration-150 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#4ca4c8] hover-bg-[#0ca4c8] transition-all duration-150 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEvent;
