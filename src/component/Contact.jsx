import React, { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Form will be reset after submitting
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    // Toast will be seen after 1 second
    setTimeout(() => {
      toast.success('Message sent successfully 🚀')
    }, 1000)
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id='contact' className='px-3 pb-10 common-section-style bg-gradient-to-bl from-[#1A1E30] to-[#311A40]'>
      <Toaster position="top-center" reverseOrder={false} />

      <h2 className='common-h2'> Contact </h2>
      <p className='custom-mute text-center my-5'> Feel free to reach out to me for any questions or opportunities! </p>

      <form data-aos="zoom-in-up" data-aos-duration="900" data-aos-delay="10"
        onSubmit={handleSubmit}
        className='max-w-[600px] mx-auto p-8 bg-[#171721] shadow-[0_4px_24px_rgba(23,92,230,0.15)] rounded-xl'
      >
        <h3 className='text-2xl font-bold text-white mb-4'> Email Me 🚀 </h3>
        <div>
          <input
            className='block w-full focus:border-fuchsia-500 text-white text-[18px] border border-gray-400 rounded-xl mb-5 bg-transparent py-3 px-4'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Your Name'
            required
          />

          <input
            className='block w-full focus:border-fuchsia-500 text-white text-[18px] border border-gray-400 rounded-xl mb-5 bg-transparent py-3 px-4'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Your Email'
            required
          />

          <input
            className='block w-full focus:border-fuchsia-500 text-white text-[18px] border border-gray-400 rounded-xl mb-5 bg-transparent py-3 px-4'
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder='Subject'
            required
          />

          <textarea
            className='block w-full focus:border-fuchsia-500 text-white text-[18px] border border-gray-400 rounded-xl mb-5 bg-transparent py-3 px-4'
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Message'
            required
          ></textarea>

          <button
            type='submit'
            className='w-full text-white bg-gradient-to-r from-fuchsia-700 to-purple-600 text-2xl py-3 rounded-2xl cursor-pointer hover:opacity-90 transition-all duration-300'>
            Send
          </button>
        </div>
      </form>
    </section>
  )
}

export default Contact
