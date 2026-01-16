const projectData = [
    {
        img : '/images/projects/fake-store.png',
        technologies : ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React'],
        title : 'Fake Store App',
        date : '18 / 12 / 2025',
        description : 'A responsive React e-commerce app with category filtering, animated cart, persistent state, and modern UI built using React, Context API, and Tailwind CSS.',
        codeLink : 'https://github.com/mahbub-hb-dev/fake-store-app.git',
        liveLink : 'https://mhb-fakestore.vercel.app/'
    },
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
                        <a target='_blank' rel="noopener noreferrer" href={data.codeLink} className='project-btn'> View Code <svg className="text-[19px]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg> </a>
                        <a target='_blank' rel="noopener noreferrer" href={data.liveLink} className='project-btn'> Live App <svg className="text-[18px]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"> </path></svg> </a>
                    </div>
                </div>
            ))}

        </div>

    </section>
  )
}

export default Projects
