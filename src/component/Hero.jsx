import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { useEffect } from "react";
import Typed from "typed.js";


const Hero = () => {
  useEffect(() => {
    
    const typed = new Typed("#typewriter", {
      strings: [
        "Frontend Developer",
        "React Developer",
        "JavaScript Developer",
        "Web Developer",
        "MERN Stack Learner"
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy(); // cleanup
    };
  }, []);

  return (
    <div id="about" className="bg-[#191924] mt-[74px]">

      <div className="max-w-[1180px] mx-auto py-5 lg:py-10 px-3 lg:flex lg:flex-row-reverse">
        <div className="py-10 lg:flex-1">
          <img className="w-[260px] sm:w-[430px] outline-2 outline-offset-1 outline-purple-600 rounded rounded-full block m-auto" src="/images/profile.jpg" alt="Profile image"/>
        </div>

        <div className="lg:flex-1">
          <h1 className="font-bold text-[40px] sm:text-[50px] text-white text-center lg:text-left"> {" "} Hi, I am {" "} <span className="block leading-16 text-pink-500">Mahbub Hassan (Belal)</span> </h1>
          <p className="text-white text-center lg:text-left font-bold text-[20px] sm:text-[30px]"> {" "} I am {" "} <span id="typewriter" className="text-purple-500"></span> </p>
          <p className="custom-mute text-center lg:text-left mt-6"> I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things. </p>

          <ul className="flex justify-center gap-7 flex-wrap my-10">
            <li className="mb-3">
              <a target="_blank" rel="noopener noreferrer" title="Facebook" href="https://www.facebook.com/mahbub.hb.dev">
                {" "}
                <FaFacebookSquare className="text-2xl transition-all text-white hover:text-fuchsia-500 hover:scale-125" />{" "}
              </a>
            </li>
            <li className="mb-3">
              <a target="_blank" rel="noopener noreferrer" title="Github" href="https://github.com/mahbub-hb-dev">
                {" "}
                <FaGithub className="text-2xl transition-all text-white hover:text-fuchsia-500 hover:scale-125" />{" "}
              </a>
            </li>
            <li className="mb-3">
              <a target="_blank" rel="noopener noreferrer" title="Linked In" href="https://www.linkedin.com/in/mahbub-hb-dev/">
                {" "}
                <FaLinkedin className="text-2xl transition-all text-white hover:text-fuchsia-500 hover:scale-125" />{" "}
              </a>
            </li>
            <li className="mb-3">
              <a target="_blank" rel="noopener noreferrer" title="Instagram" href="https://www.instagram.com/mahbub.hb.dev/">
                {" "}
                <FaInstagramSquare className="text-2xl transition-all text-white hover:text-fuchsia-500 hover:scale-125" />{" "}
              </a>
            </li>
            <li className="mb-3">
              <a target="_blank" rel="noopener noreferrer" title="Twitter" href="https://x.com/mahbub_hb_dev">
                {" "}
                <FaTwitter className="text-2xl transition-all text-white hover:text-fuchsia-500 hover:scale-125" />{" "}
              </a>
            </li>
          </ul>

          <a href="https://drive.google.com/file/d/1XqwnF2TltGKkLHNolk2OIt2FHc4C9YQO/view?usp=sharing" target="_blank" className="animate-bounce focus:animate-none hover:animate-none block w-[230px] sm:w-[300px] mx-auto sm:text-2xl font-medium text-xl bg-[#5C07A9] px-4 py-4 rounded-lg tracking-wide text-white text-center">
            {" "} Check Resume 🏀 {" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
