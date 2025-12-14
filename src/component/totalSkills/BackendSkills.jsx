const backendData = [
    {
        image : "images/icons/nodejs-1.svg",
        title : "Node JS"
    },
    {
        image : "images/icons/expressjs.svg",
        title : "Express JS"
    },
    {
        image : "images/icons/mongodb-icon-2.svg",
        title : "MongoDB"
    }
]

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BackendSkills = () => {

    useEffect(() => {
        AOS.init();
    }, []);

  return (
    <div data-aos={window.innerWidth < 768 ? "fade-up" : "fade-left"} data-aos-duration="900" data-aos-delay="50" className="w-[300px] sm:w-[400px] md:w-[500px] mx-auto border border-purple-600 shadow-[0px_4px_24px_rgba(23,92,230,0.15)] rounded-xl text-gray-400 py-3 my-7">
                        
        <h3 className="font-bold text-[26px] text-center"> Backend </h3>

        <div className="my-1 p-5 flex flex-wrap gap-3 justify-center">

            {backendData.map((data, index) => (
                <div key={index} className='flex gap-2 border rounded-xl py-3 px-4 max-sm:text-sm max-sm:px-3 max-sm:py-2'>
                    <img className='w-6 h-6' src={data.image} alt={data.title} /> <span> {data.title} </span>
                </div>
            ))}
            
        </div>

    </div>
  )
}

export default BackendSkills
