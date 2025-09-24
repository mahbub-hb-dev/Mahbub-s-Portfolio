import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='py-8 bg-[#1C1C27]'>
        <h2 className='text-fuchsia-400 text-center text-2xl font-bold'> Mahbub Hasan Belal </h2>
        <div className='text-gray-400 mt-2.5'>
          <p className='text-center font-sans'> <FaRegEnvelope className='text-md inline-flex mr-1' /> mahbub.hb.dev@gamil.com </p>
          <p className='text-center font-mono mt-1'> <FaPhoneVolume className='text-md inline-flex mr-1' /> +8801727340071 </p>
        </div>
        <ul id='sections' className='flex justify-center gap-4 flex-wrap my-5'>
            <li className='mb-3'><a className='text-gray-400 transition-all hover:text-fuchsia-500' href="#about"> About </a></li>
            <li className='mb-3'><a className='text-gray-400 transition-all hover:text-fuchsia-500' href="#skills"> Skills </a></li>
            <li className='mb-3'><a className='text-gray-400 transition-all hover:text-fuchsia-500' href="#contact"> Contact </a></li>
            <li className='mb-3'><a className='text-gray-400 transition-all hover:text-fuchsia-500' href="#projects"> Projects </a></li>
            <li className='mb-3'><a className='text-gray-400 transition-all hover:text-fuchsia-500' href="#education"> Education </a></li>
        </ul>
        <ul className='flex justify-center gap-7 flex-wrap'>
            <li className='mb-3'><a target='_blank' rel="noopener noreferrer" title='Facebook' href="https://www.facebook.com/mahbub.hb.dev"> <FaFacebookSquare className='text-2xl text-gray-300 hover:text-fuchsia-500 transition-all hover:scale-125' /> </a></li>
            <li className='mb-3'><a target='_blank' rel="noopener noreferrer" title='Github' href="https://github.com/mahbub-hb-dev"> <FaGithub className='text-2xl text-gray-300 hover:text-fuchsia-500 transition-all hover:scale-125' /> </a></li>
            <li className='mb-3'><a target='_blank' rel="noopener noreferrer" title='Linked In' href="https://www.linkedin.com/in/mahbub-hb-dev/"> <FaLinkedin className='text-2xl text-gray-300 hover:text-fuchsia-500 transition-all hover:scale-125' /> </a></li>
            <li className='mb-3'><a target='_blank' rel="noopener noreferrer" title='Instagram' href="https://www.instagram.com/mahbub.hb.dev/"> <FaInstagramSquare className='text-2xl text-gray-300 hover:text-fuchsia-500 transition-all hover:scale-125' /> </a></li>
            <li className='mb-3'><a target='_blank' rel="noopener noreferrer" title='Twitter' href="https://x.com/mahbub_hb_dev"> <FaTwitter className='text-2xl text-gray-300 hover:text-fuchsia-500 transition-all hover:scale-125' /> </a></li>
        </ul>

        <p className='text-gray-400 text-center mt-5'> &copy; Developer Portfolio by M.H. Belal </p>

    </footer>
  )
}

export default Footer
