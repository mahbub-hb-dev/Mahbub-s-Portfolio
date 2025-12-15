const projectData = [
    {
        img : '/images/projects/country.png',
        technologies : ['HTML', 'Tailwind CSS', 'React'],
        title : 'Country Information',
        date : '10 / 07 / 2025',
        description : 'This project is built using React.js and Tailwind CSS. Integrated REST APIs to fetch and display dynamic data, with proper loading and error handling.',
        codeLink : 'https://github.com/mahbub-hb-dev/Country-App.git',
        liveLink : 'https://mhbelals-country-app.netlify.app/'
    },
    {
        img : '/images/projects/library.png',
        technologies : ['HTML', 'Tailwind CSS', 'React'],
        title : 'My Library',
        date : '12 / 09 / 2025',
        description : 'This is a demo project of a library. I will update this website in future.',
        codeLink : 'https://github.com/mahbub-hb-dev/My-Library.git',
        liveLink : 'https://mhbelalslibrary.vercel.app/'
    },
    {
        img : '/images/projects/personal-portfolio.png',
        technologies : ['HTML', 'CSS'],
        title : 'Personal Portfolio',
        date : '12 / 10 / 2024',
        description : 'This is my first simple portfolio website. I made this website with HTML and CSS only. This is very simple and fully responsive website.',
        codeLink : 'https://github.com/mahbub-hb-dev/Personal-Website.git',
        liveLink : 'https://mhb-first-portfolio.netlify.app/'
    },
    {
        img : '/images/projects/madrashah.png',
        technologies : ['HTML', 'CSS', 'Tailwind CSS'],
        title : 'Madrasha Website',
        date : '02 / 06 / 2025',
        description : 'This is a demo website. To make this website I used Tailwind CSS. I will update this website in future.',
        codeLink : 'https://github.com/mahbub-hb-dev/Simple-madrasha-website.git',
        liveLink : 'https://mhbmadrasah.netlify.app/'
    },
    {
        img : '/images/projects/todo.png',
        technologies : ['HTML', 'Tailwind CSS', 'Reacs JS'],
        title : 'React Todo',
        date : '03 / 11 / 2025',
        description : 'This is a mini react todo project. In this app, you can add and delete something.',
        codeLink : 'https://github.com/mahbub-hb-dev/todo.git',
        liveLink : 'https://mhbelal-todo.netlify.app/'
    },
    {
        img : '/images/projects/dynamic-calculator.png',
        technologies : ['HTML', 'CSS', 'JavaScript'],
        title : 'Calculator',
        date : '12 / 10 / 2025',
        description : 'This is a dynamic calculator. You can calculate by this app easily.',
        codeLink : 'https://github.com/mahbub-hb-dev/dynamic-calculator.git',
        liveLink : 'https://mhbelals-calculator.vercel.app/'
    },
    {
        img : '/images/projects/crud-app.png',
        technologies : ['HTML', 'Tailwind CSS', 'React JS', 'Redux Toolkit'],
        title : 'CRUD',
        date : '08 / 10 / 2025',
        description : 'This is a CRUD app. You can add, edit, remove and delete in this app.',
        codeLink : 'https://github.com/mahbub-hb-dev/CRUD-APP.git',
        liveLink : 'https://mhbelalscrud.netlify.app/'
    },
    {
        img : '/images/projects/dummy-layout.png',
        technologies : ['HTML', 'CSS'],
        title : 'Dummy Layout',
        date : '02 / 08 / 2025',
        description : 'This is a simple layout that I created using only HTML & CSS',
        codeLink : 'https://github.com/mahbub-hb-dev/simple-css-layout-4.git',
        liveLink : 'https://mhb-csslayout-4.netlify.app/'
    },
    {
        img : '/images/projects/dummy-dev.png',
        technologies : ['HTML', 'CSS'],
        title : 'Dummy Developer Layout',
        date : '02 / 10 / 2024',
        description : 'This is a dummy portfolio layout that I created using HTML & CSS only',
        codeLink : 'https://github.com/mahbub-hb-dev/Dummy-Portfolio.git',
        liveLink : 'https://mhbelal-dummy-portfolio.netlify.app/'
    },
]

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {

    useEffect(() => {
        AOS.init();
    }, []);

  return (
    <section id='projects' className='px-3 common-section-style bg-[#191924]'>

        <h2 className='common-h2'> Projects </h2>
        <p className='custom-mute text-center my-5'> I have experience doing some projects. <span className='block md:inline'>Here are a few examples of my work.</span> </p>

        <div className='px-3 py-7 flex flex-wrap justify-center items-center gap-7 overflow-x-hidden'>

            {projectData.map((data, index) => (
                <div key={index} data-aos="zoom-in" data-aos-duration="900" data-aos-delay="50" className='project-card flex flex-col'>
                    <div>
                        <img className='rounded-lg' src={data.img} alt="project image" />
                    </div>
                    <div className='project-technology-container'>
                        {data.technologies.map((tech, i) => (
                            <span key={i} className='project-technology'>{tech}</span>
                        ))}
                    </div>
                    <div className='my-3'>
                        <h3 className='text-gray-300 text-2xl font-bold'> {data.title} </h3>
                        <p className='text-gray-400 text-[12px]'> {data.date} </p>
                    </div>
                    <div>
                        <p className='text-gray-400'> {data.description} </p>
                    </div>
                    <div className='flex flex-1 items-end justify-between'>
                        <a target='_blank' rel="noopener noreferrer" href={data.codeLink} className='project-btn'> View Codes </a>
                        <a target='_blank' rel="noopener noreferrer" href={data.liveLink} className='project-btn'> View Live App </a>
                    </div>
                </div>
            ))}

        </div>

    </section>
  )
}

export default Projects
