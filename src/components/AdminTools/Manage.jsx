import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar';
import { useAuth } from '../../utils/AuthContext';
import { Navigate } from 'react-router-dom';
import AddProject from './ManageWebsite/AddProject';
import AllProjects from './ManageWebsite/AllProjects';
import Footer from '../Footer';
import AddEvent from './ManageWebsite/AddEvent';
import AllEvents from './ManageWebsite/AllEvents';
import UserInfo from './ManageWebsite/ProfileInfo';
import ChangePassword from './ManageWebsite/ChangePassword';

const Manage = () => {
    const { logoutUser } = useAuth();
    const [allProjectsClick, setAllProjectsClick] = useState(false);
    const [addProjectClick, setAddProjectsClick] = useState(false);
    const [addEventClick, setAddEventClick] = useState(false);
    const [allEventsClick, setAllEventsClick] = useState(false);
    const [userInfoClick, setUserInfoClick] = useState(true);
    const [changePasswordClick, setChangePasswordClick] = useState(false);

    const handleLogout = () => {
        logoutUser();
        return <Navigate to="/login" />
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);

    const handleAllProjectClick = () => {
        setAllProjectsClick(true);
        setAddProjectsClick(false);
        setAddEventClick(false);
        setAllEventsClick(false);
        setUserInfoClick(false);
        setChangePasswordClick(false);
    }
    const handleAddProjectClick = () => {
        setAddProjectsClick(true);
        setAllProjectsClick(false);
        setAddEventClick(false);
        setAllEventsClick(false);
        setUserInfoClick(false);
        setChangePasswordClick(false);
    }
    const handleAddEventClick = () => {
        setAddEventClick(true);
        setAllProjectsClick(false);
        setAddProjectsClick(false);
        setAllEventsClick(false);
        setUserInfoClick(false);
        setChangePasswordClick(false);
    }
    const handleAllEventsClick = () => {
        setAddEventClick(false);
        setAllProjectsClick(false);
        setAddProjectsClick(false);
        setAllEventsClick(true);
        setUserInfoClick(false);
        setChangePasswordClick(false)
    }
    const handleUserInfoClick = () => {
        setAddEventClick(false);
        setAllProjectsClick(false);
        setAddProjectsClick(false);
        setAllEventsClick(false);
        setUserInfoClick(true);
        setChangePasswordClick(false);
    }
    const handleChangePasswordClick = () => {
        setChangePasswordClick(true);
        setAddEventClick(false);
        setAllProjectsClick(false);
        setAddProjectsClick(false);
        setAllEventsClick(false);
        setUserInfoClick(false);
    }

    return (
        <div>
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
                    Manage Website
                </h2>
                <div className="flex flex-row justify-center items-center mt-10 space-x-2 mr-2">
                    <div className="line"></div>
                    <h4 className="position relative text-white subtitle-fade-in">
                    <a href="/" className="font-semibold opacity-80 hover:underline hover:cursor-pointer">
                        Home
                    </a>{" "}
                    / <span className="text-[#53a4db] font-semibold">Manage Website</span>
                    </h4>
                    <div className="line-reverse"></div>
                </div>
                </div>
            </section>
            <div className='flex flex-col md:grid md:grid-cols-12 mx-10 mb-20 md:mt-40 gap-10 relative items-center justify-center md:justify-normal md:items-start'>
                <div className='col-span-2'>
                    <h1 className='text-3xl'>Menu</h1>
                    <div className='grid grid-cols-2 gap-5 mt-5 md:gap-0 md:block md:space-y-3'>
                        <p
                            className={`hover:cursor-pointer ${userInfoClick ? 'menu-item-active' : 'menu-item'}`}
                            onClick={handleUserInfoClick}
                        >
                            User Info
                        </p>
                        <p
                            className={`hover:cursor-pointer ${allProjectsClick ? 'menu-item-active' : 'menu-item'}`}
                            onClick={handleAllProjectClick}
                        >
                            View Projects
                        </p>
                        <p
                            className={`hover:cursor-pointer ${addProjectClick ? 'menu-item-active' : 'menu-item'}`}
                            onClick={handleAddProjectClick}
                        >
                            Add Project
                        </p>
                        <p
                            className={`hover:cursor-pointer ${allEventsClick ? 'menu-item-active' : 'menu-item'}`}
                            onClick={handleAllEventsClick}
                        >
                            View Events
                        </p>
                        <p
                            className={`hover:cursor-pointer ${addEventClick ? 'menu-item-active' : 'menu-item'}`}
                            onClick={handleAddEventClick}
                        >
                            Add Event
                        </p>
                        <p
                            className={`hover:cursor-pointer ${changePasswordClick ? 'menu-item-active' : 'menu-item'}`}
                            onClick={handleChangePasswordClick}
                        >
                            Change Password
                        </p>
                    </div>
                </div>
                <div className='flex col-span-8 justify-center items-center'>
                    {allProjectsClick && <AllProjects />}
                    {addProjectClick && <AddProject />}
                    {addEventClick && <AddEvent />}
                    {allEventsClick && <AllEvents />}
                    {userInfoClick && <UserInfo />}
                    {changePasswordClick && <ChangePassword />}
                </div>
                <div className='md:flex col-span-2 hidden justify-end'>
                    <button className='relative bg-[#53a4db] px-4 py-2 rounded-md text-white' onClick={handleLogout}>Logout</button>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Manage;
