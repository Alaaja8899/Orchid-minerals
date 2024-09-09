import React from 'react';
import { FaEnvelope, FaMap, FaPhone } from 'react-icons/fa6';

const ContactSection = () => {
  return (
    <section className="contact-section bg-[#0a2c4a] pt-10 p-6">
        <h2 className='font-bold text-2xl text-center text-white mb-20'>GET IN TOUCH</h2>


        <div className="contact-info flex flex-wrap my-5 gap-2 justify-between">
        <div 
        className="info-card md:w-[20rem] w-full text-center text-mainColor bg-white flex items-center justify-center flex-col rounded p-3"
        >
          <i className="icon-location">
            <FaMap size={32}/>
          </i>
          <h3>Address</h3>
          <p>UK: 215 Uxbridge Road London W13 9AA</p>
        </div>
        <div 
        className="info-card text-mainColor  md:w-[20rem] w-full text-center bg-white flex items-center justify-center flex-col rounded p-3"
        >
          <i className="icon-mail">
            <FaEnvelope size={32}/>
          </i>
          <h3>E-mail</h3>
          <p>info@enterpoint.group</p>
        </div>
        <div 
        className="info-card text-mainColor md:w-[20rem] w-full text-center bg-white flex items-center justify-center flex-col rounded p-3"
        >
          <i className="icon-phone">
              <FaPhone size={32}/>
          </i>
          <h3>Call us</h3>
          <p>+252-613-908081</p>
        </div>
      </div>



      <div className="contact-form bg-white rounded flex md:flex-row flex-col gap-2 p-3">
        <div className="textFrom md:w-1/2">
        <h1 className='font-bold text-2xl text-mainColor'>Contact Us</h1>
        <p
        className='text-gray-400'
        >
          Feel free to reach out for any inquiries or support. You can leave your
          information below, and we'll get back to you as soon as possible.
        </p>

        </div>
        <form className="form flex flex-col gap-2 md:w-1/2">
          <div className="input-group flex flex-col gap-2">
            <input
            className='w-full rounded outline-none border p-3 border-mainColor'
            type="text" placeholder="Your name" />
            <input
            className='w-full rounded outline-none border p-3 border-mainColor'
            type="email" placeholder="E-mail" />
          </div>
          <textarea
            className='w-full rounded outline-none border p-3 border-mainColor'
          placeholder="Write your message"></textarea>
          <button
            className='w-full rounded outline-none border p-3 border-mainColor bg-mainColor text-white'
          type="submit">Submit Now</button>
        </form>
      </div>

      <div className="map-container">
        <iframe
          src="https://maps.google.com/maps?q=London%20W13%209AA&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
