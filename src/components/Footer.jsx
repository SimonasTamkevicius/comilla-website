import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='grid grid-cols-11'>
      <div className='flex flex-col space-y-3 p-4 col-span-3'>
        <Link to="/">
          <img src='/comilla-logo.jpeg' className='position relative' />
        </Link>
        <div className='flex flex-col justify-center items-start'>
          <p className='text-sm'>Comilla Inc.</p>
          <p className='text-xs'>96 Bowes Rd. Unit 3,</p>
          <p className='text-xs'>Concord, Ontario</p>
          <p className='text-xs'>L4K 1J6</p>
        </div>
      </div>
      <div className='flex flex-col justify-start items-start col-span-5 p-4'>
        <p>SERVICES</p>
        <br/>
        <p className='text-xs text-start'>Comilla Inc. is an electrical contractor providing a comprehensive range of electrical services to our Industrial, Commercial, and Institutional clients in southern Ontario. Comilla Inc. has been serving the industry with a reputation for quality workmanship and exceptional customer service.</p>
        <br/>
        <p className='text-xs text-start'>Comilla Inc. is a team of highly skilled and experienced electricians, designers and engineers who are committed to providing reliable and cost-effective electrical solutions for our clients. We specialize in a wide range of services, including design assistance, electrical installations, civil installations, all building controls and monitoring systems, maintenance, upgrades, and repairs. Our team is fully licensed, insured, and equipped with the latest tools and technology to deliver safe and efficient services.</p>
      </div>
      <div className='flex flex-col justify-end items-center col-span-3 p-4'>
        <div className='flex flex-col justify-end items-start'>
          <p className='text-xs text-start'>Copyright © Comilla Inc.</p>
          <p className='text-xs text-start'>ALL RIGHTS RESERVED. 2005</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;