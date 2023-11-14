import React, { useState } from 'react';
import { FaRegEdit,  } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import ViewUserProfile from './ViewUserProfile';
import EditUserProfile from './EditUserProfile';

const ProfileInfo = () => {
    const [editClicked, setEditClicked] = useState(false);
    const [editHovered, setEditHovered] = useState(false);

    const handleMouseEnter = () => {
        setEditHovered(true);
    }
    const handleMouseLeave = () => {
        setEditHovered(false);
    }

    const handleEditClick = () => {
        setEditClicked(!editClicked);
    }

    let greetingMsg;

    const date = new Date();
    const time = date.getHours();

    if (time < 12) {
        greetingMsg = "Good Morning";
    } else if (time >= 12 && time < 18) {
        greetingMsg = "Good Afternoon";
    } else {
        greetingMsg = "Good Evening";
    }

  return (
    <div>
        <h1 className="text-center font-semibold text-3xl mb-4">{greetingMsg} Admin!</h1>
        <div className='border rounded-md shadow-md p-4 relative'>
            <div className='flex justify-between items-center'>
                {editClicked ? (
                    <>
                        {editHovered && <p className='absolute -top-4 right-0 z-10 bg-white'>Cancel</p>}
                        <button className='absolute top-2 right-3' title='Edit' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleEditClick}><ImCancelCircle className='text-2xl' /></button>
                    </>
                ) : (
                    <>
                        {editHovered && <p className='absolute -top-4 right-3 z-10 bg-white'>Edit</p>}
                        <button className='absolute top-2 right-3' title='Edit' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleEditClick}><FaRegEdit className='text-2xl' /></button>
                    </>
                )}
            </div>
            {editClicked ? <EditUserProfile /> : <ViewUserProfile />}
        </div>
    </div>
  )
}

export default ProfileInfo