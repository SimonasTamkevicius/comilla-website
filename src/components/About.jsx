import React from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const About = () => {
    const [colorRef, colorInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [networkRef, networkInView] = useInView({
        triggerOnce: true,
        threshold: 0.02,
    })

    const [valuesTitle, valuesTitleInView] = useInView({
        triggerOnce: true,
        threshold: 0.01,
    })
    
      const [values, valuesInView] = useInView ({
        triggerOnce: true,
        threshold: 0.01,
    })

    const [associationsRef, associationsInView] = useInView({
        triggerOnce: true,
        threshold: 0.01,
      });

  return (
    <div className='w-screen h-screen container-content'>
        <section className='content'>
            <div className='absolute inset-0'>
                <div
                className='bg-cover w-full h-[400px] filter brightness-50 flex justify-center items-center'
                style={{ backgroundImage: "url('unibuilding.jpg')" }}
                >
                </div>
            </div>
            <NavBar active="about" />
            <div className='flex flex-col justify-center items-center'>
                <h2 className=' text-white opacity-100 position relative subtitle-fade-in text-5xl'>About</h2>
                <div className='flex flex-row justify-center items-center mt-10 space-x-2'>
                    <div className='line'></div>
                    <h4  className='position relative text-white subtitle-fade-in'><a href='/' className='font-semibold opacity-80 hover:underline hover:cursor-pointer'>Home</a> / <span className='text-[#53a4db] font-semibold'>About</span></h4>
                    <div className='line-reverse'></div>
                </div>
            </div>
            <div className='relative flex flex-col justify-center items-center mt-40 mb-20 md:mb-40 mx-10 md:mx-20 lg:mx-36 navbar-desktop'>
                <div className='max-w-5xl'>
                    <div className='flex flex-col justify-start mb-10 space-y-2 fade-down'>
                        <p className='text-xs text-gray-600'>ABOUT COMILLA INC.</p>
                        <h2 className='text-4xl font-semibold'>Who We Are</h2>
                    </div>
                    <p className='text-lg fade-up'>Comilla Inc. is a team of highly skilled and experienced electricians, designers and engineers who are committed to providing reliable and cost-effective electrical solutions for our clients.</p>
                    <br/>
                    <p className='text-lg fade-up'>We specialize in a wide range of services, including design assistance, electrical installations, civil installations, all building controls and monitoring systems, maintenance, upgrades, and repairs. Our team is fully licensed, insured, and equipped with the latest tools and technology to deliver safe and efficient services.</p>
                </div>
            </div>
        </section>
        <section className='content' id='second-section' style={{ backgroundColor: '#f5f5f5' }}>
          <div className='w-screen min-h-screen mt-10 mb-10 flex flex-col items-center'>
            <div ref={valuesTitle} className={`valuesTitle space-y-5 px-5 md:px-0 ${valuesTitleInView && 'fade-up'}`}>
                <h1 className='text-center text-3xl font-semibold'>Company Values</h1>
                <p className='text-center' style={{ fontSize: '17px' }}>
                    Our values are the foundation of our work. They unify our principals and guide all decisions. Our values also influence the way we collaborate with clients and with each member of our team, ensuring that we maintain integrity in all aspects of our work.
                </p>
            </div>
            <div ref={values} className='grid grid-cols-1 gap-5 lg:gap-0 md:space-y-0 lg:grid-cols-4 mt-20 lg:space-x-10 mx-5 md:mx-20'>
                <div className={`flex flex-col bg-gray-100 p-6 rounded ${valuesInView && 'safety-card'}`} >
                <div className='h-32 w-32 flex items-center justify-center rounded-full bg-white border-2 border-black overflow-hidden icon-container'>
                    <div className='h-28 w-28 icon-values'>
                    <img src='SafetyIcon.jpg' className='object-cover' />
                    </div>
                </div>
                <h3 className='text-2xl font-semibold text-center'>Safety</h3>
                <p className='mt-5 text-center'>Our top priority is safety. We believe that working safely is the key to working efficiently. We take every precaution to ensure that environment is safe and secure, and we are committed to maintaining a culture of safety in all aspects of our projects.</p>
                </div>
                <div className={`flex flex-col bg-gray-100 p-6 rounded-md ${valuesInView && 'integrity-card'}`} >
                <div className='h-32 w-32 flex items-center justify-center rounded-full bg-white border-2 border-black overflow-hidden icon-container'>
                    <div className='h-28 w-28 icon-values'>
                    <img src='IntegrityIcon.jpg' className='object-cover' />
                    </div>
                </div>
                <h3 className='text-2xl font-semibold text-center'>Integrity</h3>
                <p className='mt-5 text-center'>Our word is our promise; we are honest and straightforward in our approach.</p>
                </div>
                <div className={`flex flex-col bg-gray-100 p-6 rounded-md ${valuesInView && 'partnership-card'}`} >
                <div className='h-32 w-32 flex items-center justify-center rounded-full bg-white border-2 border-black overflow-hidden icon-container'>
                    <div className='flex justify-center items-center h-28 w-28 overflow-hidden icon-values'>
                    <img src='PartnershipIcon.jpg' className='object-cover' />
                    </div>
                </div>
                <h3 className='text-2xl font-semibold text-center'>Partnership</h3>
                <p className='mt-5 text-center'>We sincerely value our partnerships and collaborations at every stage of the project lifecycle. We empathize with our clients and put ourselves in their position before, during, and after construction to ensure that every decision is the best one for our project.</p>
                </div>
                <div className={`flex flex-col bg-gray-100 p-6 rounded-md ${valuesInView && 'challenge-strategies-card'}`} >
                <div className='h-32 w-32 flex items-center justify-center rounded-full bg-white border-2 border-black overflow-hidden icon-container'>
                    <div className='flex justify-center items-center h-28 w-28 overflow-hidden icon-values'>
                    <img src='ChallengeStrategyIcon.jpg' className='object-cover' />
                    </div>
                </div>
                <h3 className='text-2xl font-semibold text-center'>Challenge Strategies</h3>
                <p className='mt-5 text-center'>Prioritizing strategies to identify opportunities as we proactively approach potential problems. We always look ahead.</p>
                </div>
            </div>
          </div>
        </section>
        <section className='content'>
            <div ref={colorRef} className={`${colorInView ? 'sliding-color' : ''}`}>
                <div className='relative flex flex-col justify-center items-center mx-6 md:mx-20 lg:mx-36 my-20 md:my-40'>
                    <div className='max-w-5xl'>
                        <div className={`flex flex-row justify-start items-center mb-5 about-p-fade-in ${colorInView && 'about-p-fade-in'}`}>
                            <div className={`position absolute right-10 ${colorInView && 'line-about'}`}></div>
                            <p className={`text-sm text-black text-start-bottom position absolute ${colorInView && 'about-p-fade-in'}`}>OUR GOAL</p>
                        </div>
                        <p
                        className={`text-start text-xl md:text-2xl ${colorInView ? 'about-p-fade-up' : ''}`}
                        style={{ lineHeight: '1.75' }}
                        >
                            We understand the importance of delivering projects on time and within budget, and we always strive to exceed our clients' expectations. Our goal is to build lasting relationships with our clients based on trust, integrity, and mutual respect.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className='content'>
            <div ref={networkRef} className={`relative flex flex-col justify-center items-center mt-20 md:mt-10 mb-10 mx-10 md:mx-20 lg:mx-36 navbar-desktop ${networkInView && 'about-p-fade-up'}`}>
                <div className='max-w-5xl'>
                    <div className={`flex flex-row justify-start items-center mb-5`}>
                        <h2 className='text-4xl font-semibold'>Join Our Network</h2>
                    </div>
                    <p className='text-lg'>We would be honored to have the opportunity to work with you and provide you with the highest quality electrical services. Please do not hesitate to contact us at the undersigned to schedule a consultation or to request a quote. We look forward to doing business with you soon.</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
                        <div className="flex justify-center items-center">
                            <img src='/Anatolia.jpg' alt='Anatolia' className='rounded-md hover:scale-105 p-2 transition-all duration-200' style={{ width: '55%'}} />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src='/GAP.jpg' alt='GAP' className='rounded-md hover:scale-105 p-2 transition-all duration-200' style={{ width: '55%'}} />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src='/Prologis.jpg' alt='Prologis' className='rounded-md hover:scale-105 p-2 transition-all duration-200' style={{ width: '55%'}} />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src='/PeelRegion.jpg' alt='Peel Region' className='rounded-md hover:scale-105 p-2 transition-all duration-200' style={{ width: '55%'}} />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src='/Shell.jpg' alt='Shell' className='rounded-md hover:scale-105 p-2 transition-all duration-200' style={{ width: '55%'}} />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src='/TTC.jpg' alt='TTC' className='rounded-md hover:scale-105 p-2 transition-all duration-200' style={{ width: '55%'}} />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src='/UofT.jpg' alt='UofT' className='rounded-md hover:scale-105 p-2 transition-all duration-200' style={{ width: '55%'}} />
                        </div>
                    </div>
                    <p className='text-lg mt-5'>Thank you for considering Comilla Inc. and visiting our website.</p>
                    <div className='flex justify-end w-max-xl md:mr-10'>
                        <Link to='/contact'>
                            <button className='btn btn-4'><p>Contact Us</p></button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <section className='content'>
            <div className='relative'>
                <div ref={associationsRef} className={`navbar-desktop my-10 md:my-20 ${associationsInView && 'about-p-fade-in'}`}>
                <div className='flex flex-row items-center md:space-x-5 text-start pl-1 md:mx-20'>
                    {associationsInView && <div className='line-network'></div>}
                    <h1 className={`text-3xl font-semibold pl-4`}>Our Associations</h1>
                </div>
                <div className='grid grid-cols-2 md:flex flex-row space-y-10 md:space-y-0 md:flex-row w-full justify-around items-center px-5 md:px-20 mt-10'>
                    <img src='/IBEW.png' className='hover:scale-105 p-2 transition-all duration-200 w-32 md:w-36'  />
                    <img src='/ElectricalSafetyAuthority.png' className='hover:scale-105 p-2 transition-all duration-200 w-32 md:w-36'  />
                    <img src='/ECAO.png' className='hover:scale-105 p-2 transition-all duration-200 w-32 md:w-36'  />
                    <img src='/WSIB.png' className='hover:scale-105 p-2 transition-all duration-200 w-32 md:w-36'  />
                </div>
                </div>
            </div>
        </section>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default About;
