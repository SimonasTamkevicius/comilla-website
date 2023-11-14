import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai'
import scrollLock, { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const NavBar = (props) => {
  const { active } = props;
  const { user, logoutUser } = useAuth();
  const [burgerClicked, setBurgerClicked] = useState(false);

  const handleBurgerMenuClick = () => {
    setBurgerClicked(!burgerClicked);
  };

  useEffect(() => {
    if (burgerClicked) {
      scrollLock.disablePageScroll();
    } else {
      scrollLock.enablePageScroll();
    }
  }, [burgerClicked]);

  const handleLogoutClick = () => {
    logoutUser();
  }

  return (
    <nav>
      <div className='flex flex-row justify-between items-center mr-10 md:mx-20 lg:mx-36 py-5'>
        <Link to="/">
          <img src='/ComillaWhiteTextLogo.png' className='position relative w-52 h-40 rounded-lg brightness-125' />
        </Link>

        {/* Burger menu button for mobile */}
        <div className='block md:hidden position relative z-50'>
          <p className={`text-white text-3xl hover:cursor-pointer`} onClick={handleBurgerMenuClick}>
            {burgerClicked ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </p>
        </div>

        {/* Slide-in burger menu */}
        <div
          className={`burger-menu position block md:hidden z-40 ${
            burgerClicked ? 'burger-menu-open' : ''
          }`}
        >
          <a href='/' className={`text-white ${active === "home" ? "font-bold" : "opacity-60 hover:opacity-100"}`} onClick={handleBurgerMenuClick}>HOME</a>
          <a href='/about' className={`text-white ${active === "about" ? "font-bold" : "opacity-80 hover:opacity-100"}`} onClick={handleBurgerMenuClick}>ABOUT</a>
          <a href='/projects' className={`text-white ${active === "projects" ? "font-bold" : "opacity-80 hover:opacity-100"}`} onClick={handleBurgerMenuClick}>PROJECTS</a>
          <a href='/events' className={`text-white ${active === "events" ? "font-bold" : "opacity-80 hover:opacity-100"}`} onClick={handleBurgerMenuClick}>EVENTS</a>
          <a href='/contact' className={`text-white ${active === "contact" ? "font-bold" : "opacity-80 hover:opacity-100"}`} onClick={handleBurgerMenuClick}>CONTACT</a>
          {user.loggedIn && <a onClick={handleLogoutClick} className={`text-white opacity-80 hover:opacity-100`}>LOGOUT</a>}
        </div>

        {/* Menu items */}
        <div className='hidden md:block navbar-desktop'>
          <ul className='flex flex-row justify-around space-x-10'>
            <li>
              <a
                className={`${
                  active === 'home'
                    ? 'border-b-2 border-[#4ca4c8] pb-[8px]'
                    : 'border-animation'
                }`}
                href='/'
              >
                <span
                  className={`${
                    active === 'home'
                      ? 'text-white font-semibold opacity-95 border-b-2 border-[#4ca4c8] pb-[8px]'
                      : 'text-white opacity-70 font-semibold hover:opacity-100 transition-opacity duration-300 ease-in-out'
                  }`}
                >
                  HOME
                </span>
              </a>
            </li>
            <li>
              <a
                className={`${
                  active === 'about'
                    ? 'border-b-2 border-[#4ca4c8] pb-[8px]'
                    : 'border-animation'
                }`}
                href='/about'
              >
                <span
                  className={`${
                    active === 'about'
                      ? 'text-white font-semibold opacity-95 border-b-2 border-[#4ca4c8] pb-[8px]'
                      : 'text-white font-semibold opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out'
                  }`}
                >
                  ABOUT
                </span>
              </a>
            </li>
            <li>
              <a
                className={`${
                  active === 'projects'
                    ? 'border-b-2 border-[#4ca4c8] pb-[8px]'
                    : 'border-animation'
                }`}
                href='/projects'
              >
                <span
                  className={`${
                    active === 'projects'
                      ? 'text-white font-semibold opacity-95 border-b-2 border-[#4ca4c8] pb-[8px]'
                      : 'text-white font-semibold opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out'
                  }`}
                >
                  PROJECTS
                </span>
              </a>
            </li>
            <li>
              <a
                className={`${
                  active === 'events'
                    ? 'border-b-2 border-[#4ca4c8] pb-[8px]'
                    : 'border-animation'
                }`}
                href='/events'
              >
                <span
                  className={`${
                    active === 'events'
                      ? 'text-white font-semibold opacity-95 border-b-2 border-[#4ca4c8] pb-[8px]'
                      : 'text-white font-semibold opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out'
                  }`}
                >
                  EVENTS
                </span>
              </a>
            </li>
            <li>
              <a
                className={`${
                  active === 'contact'
                    ? 'border-b-2 border-[#4ca4c8] pb-[8px]'
                    : 'border-animation'
                }`}
                href='/contact'
              >
                <span
                  className={`${
                    active === 'contact'
                      ? 'text-white font-semibold opacity-95 border-b-2 border-[#4ca4c8] pb-[8px]'
                      : 'text-white font-semibold opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out'
                  }`}
                >
                  CONTACT
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
