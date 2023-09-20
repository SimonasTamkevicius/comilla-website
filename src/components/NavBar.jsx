import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai'

const NavBar = (props) => {
  const { active } = props;
  const [burgerClicked, setBurgerClicked] = useState(false);

  const handleBurgerMenuClick = () => {
    setBurgerClicked(!burgerClicked);
  };

  return (
    <nav>
      <div className='flex flex-row justify-between items-center mx-10 md:mx-20 lg:mx-36 py-5 navbar'>
        <img src='/comilla-logo.jpeg' className='position relative' />

        {/* Burger menu button for mobile */}
        <div className='block md:hidden position relative z-40'>
          <p className='text-white text-3xl hover:cursor-pointer' onClick={handleBurgerMenuClick}>
            {burgerClicked ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </p>
        </div>

        {/* Slide-in burger menu */}
        <div
          className={`burger-menu position block md:hidden ${
            burgerClicked ? 'burger-menu-open' : ''
          }`}
        >
          <p className={`text-white ${active === "home" ? "font-bold" : "opacity-60 hover:opacity-100"}`} onClick={handleBurgerMenuClick}>HOME</p>
          <p className={`text-white ${active === "about" ? "font-bold" : "opacity-80 hover:opacity-100"}`} onClick={handleBurgerMenuClick}>ABOUT</p>
          <p className={`text-white ${active === "design" ? "font-bold" : "opacity-80 hover:opacity-100"}`} onClick={handleBurgerMenuClick}>DESIGN</p>
          <p className={`text-white ${active === "contact" ? "font-bold" : "opacity-80 hover:opacity-100"}`} onClick={handleBurgerMenuClick}>CONTACT</p>
          <p className={`text-white ${active === "projects" ? "font-bold" : "opacity-80 hover:opacity-100"}`} onClick={handleBurgerMenuClick}>PROJECTS</p>
        </div>

        {/* Menu items */}
        <div className='hidden md:block'>
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
                      ? 'text-white opacity-95 border-b-2 border-[#4ca4c8] pb-[8px]'
                      : ' text-white opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out'
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
                      ? 'text-white opacity-95 border-b-2 border-[#4ca4c8] pb-[8px]'
                      : ' text-white opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out'
                  }`}
                >
                  ABOUT
                </span>
              </a>
            </li>
            <li>
              <a
                className={`${
                  active === 'design'
                    ? 'border-b-2 border-[#4ca4c8] pb-[8px]'
                    : 'border-animation'
                }`}
                href='/design'
              >
                <span
                  className={`${
                    active === 'design'
                      ? 'text-white opacity-95 border-b-2 border-[#4ca4c8] pb-[8px]'
                      : ' text-white opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out'
                  }`}
                >
                  DESIGN
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
                      ? 'text-white opacity-95 border-b-2 border-[#4ca4c8] pb-[8px]'
                      : ' text-white opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out'
                  }`}
                >
                  CONTACT
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
                      ? 'text-white opacity-95 border-b-2 border-[#4ca4c8] pb-[8px]'
                      : 'text-white opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out'
                  }`}
                >
                  PROJECTS
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
