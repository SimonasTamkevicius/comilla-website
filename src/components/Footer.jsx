import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-11 bg-gradient-to-br from-gray-300 to-[#7ca4c8] p-4 relative">
      <div
        className="absolute inset-0 bg-cover w-full h-full filter brightness-80 opacity-10"
        style={{ backgroundImage: "url('footerIMG.jpg')" }}
      ></div>
      <div className="flex flex-col space-y-3 p-4 col-span-3">
        <Link to="/">
          <img src="/ComillaLogoStaticWithText.png" className="position relative h-24 w-32" alt="Comilla Logo" />
        </Link>
        <div className="flex flex-col justify-center items-start ml-5">
          <p className="text-sm">Comilla Inc.</p>
          <p className="text-xs">1260 Journey's End Circle, Unit 9,</p>
          <p className="text-xs">Newmarket, Ontario</p>
          <p className="text-xs">L3Y 8Z7</p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start col-span-5 p-4 z-10 ml-5 md:ml-0">
        <p>SERVICES</p>
        <br />
        <p className="text-xs text-start">
          Comilla Inc. is an electrical contractor providing a comprehensive range of electrical services to our Industrial, Commercial, and Institutional clients in southern Ontario. Comilla Inc. has been serving the industry with a reputation for quality workmanship and exceptional customer service.
        </p>
        <br />
        <p className="text-xs text-start">
          Comilla Inc. is a team of highly skilled and experienced electricians, designers, and engineers who are committed to providing reliable and cost-effective electrical solutions for our clients. We specialize in a wide range of services, including design assistance, electrical installations, civil installations, all building controls and monitoring systems, maintenance, upgrades, and repairs. Our team is fully licensed, insured, and equipped with the latest tools and technology to deliver safe and efficient services.
        </p>
      </div>
      <div className="flex flex-col justify-end md:items-center col-span-3 p-4 z-10 ml-5 md:ml-0">
        <div className="flex flex-col justify-end items-start">
          <Link to="/manage">
            <p className="text-xs text-start hover:underline hover:cursor-pointer mb-2">Manage</p>
          </Link>
          <p className="text-xs text-start">Copyright © Comilla Inc.</p>
          <p className="text-xs text-start">ALL RIGHTS RESERVED. 2005</p>
          <p className='text-sm'>Made by developedbysimon.ca</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
