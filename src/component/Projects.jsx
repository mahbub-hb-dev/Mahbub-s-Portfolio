import React from 'react'


const Projects = () => {

  return (
    <section id='projects' className='px-3 common-section-style bg-[#191924]'>

        <h2 className='common-h2'> Projects </h2>
        <p className='custom-mute text-center my-5'> I have experience doing some projects. <span className='block md:inline'>Here are a few examples of my work.</span> </p>

        <div className='px-3 py-7 flex flex-wrap justify-center items-center gap-7'>
            
            <div className='project-card flex flex-col'>
                <div>
                    <img className='rounded-lg' src="/images/projects/country.png" alt="project image" />
                </div>
                <div className='project-technology-container'>
                    <span className='project-technology'> HTML </span>
                    <span className='project-technology'> CSS </span>
                    <span className='project-technology'> Tailwind CSS </span>
                    <span className='project-technology'> React JS </span>
                    <span className='project-technology'> Javascript </span>
                </div>
                <div className='my-3'>
                    <h3 className='text-gray-300 text-2xl font-bold'> Country Information </h3>
                    <p className='text-gray-400 text-[12px]'> 10 / 07 / 2025 </p>
                </div>
                <div>
                    <p className='text-gray-400'> This is a small web application about information of different countries. You can search countries by name and get information about capital, population, area and flag of those countries. </p>
                </div>
                <div className='flex flex-1 items-end justify-between'>
                    <a target='_blank' rel="noopener noreferrer" href="https://github.com/mahbub-hb-dev/Country-App.git" className='project-btn'> View Codes </a>
                    <a target='_blank' rel="noopener noreferrer" href="https://mhbelals-country-app.netlify.app/" className='project-btn'> View Live App </a>
                </div>
            </div>

            <div className='project-card flex flex-col'>
                <div>
                    <img className='rounded-lg' src="/images/projects/library.png" alt="project image" />
                </div>
                <div className='project-technology-container'>
                    <span className='project-technology'> HTML </span>
                    <span className='project-technology'> CSS </span>
                    <span className='project-technology'> Tailwind CSS </span>
                    <span className='project-technology'> React JS </span>
                    <span className='project-technology'> Javascript </span>
                </div>
                <div className='my-3'>
                    <h3 className='text-gray-300 text-2xl font-bold'> My Library </h3>
                    <p className='text-gray-400 text-[12px]'> 12 / 09 / 2025 </p>
                </div>
                <div>
                    <p className='text-gray-400'> This is a demo project of a library. I will update this website in future. </p>
                </div>
                <div className='flex flex-1 items-end justify-between'>
                    <a target='_blank' rel="noopener noreferrer" href="https://github.com/mahbub-hb-dev/My-Library.git" className='project-btn'> View Codes </a>
                    <a target='_blank' rel="noopener noreferrer" href="https://my-library-plum.vercel.app/" className='project-btn'> View Live App </a>
                </div>
            </div>

            <div className='project-card flex flex-col'>
                <div>
                    <img className='rounded-lg' src="/images/projects/personal-portfolio.png" alt="project image" />
                </div>
                <div className='project-technology-container'>
                    <span className='project-technology'> HTML </span>
                    <span className='project-technology'> CSS </span>
                </div>
                <div className='my-3'>
                    <h3 className='text-gray-300 text-2xl font-bold'> Personal Portfolio </h3>
                    <p className='text-gray-400 text-[12px]'> 12 / 10 / 2024 </p>
                </div>
                <div>
                    <p className='text-gray-400'> This is my first simple portfolio website. I made this website with HTML and CSS only. This is very simple and fully responsive website. </p>
                </div>
                <div className='flex flex-1 items-end justify-between'>
                    <a target='_blank' rel='noopener noreferrer' href="https://github.com/mahbub-hb-dev/Personal-Website.git" className='project-btn'> View Codes </a>
                    <a target='_blank' rel='noopener noreferrer' href="https://mahbub-hb-dev.github.io/Personal-Website/" className='project-btn'> View Live App </a>
                </div>
            </div>

            <div className='project-card flex flex-col'>
                <div>
                    <img className='rounded-lg' src="/images/projects/madrashah.png" alt="project image" />
                </div>
                <div className='project-technology-container'>
                    <span className='project-technology'> HTML </span>
                    <span className='project-technology'> CSS </span>
                    <span className='project-technology'> Tailwind CSS </span>
                </div>
                <div className='my-3'>
                    <h3 className='text-gray-300 text-2xl font-bold'> Madrasha Website </h3>
                    <p className='text-gray-400 text-[12px]'> 02 / 06 / 2025 </p>
                </div>
                <div>
                    <p className='text-gray-400'> This is a demo website. To make this website I used Tailwind CSS. I will update this website in future. </p>
                </div>
                <div className='flex flex-1 items-end justify-between'>
                    <a target='_blank' rel="noopener noreferrer" href="https://github.com/mahbub-hb-dev/Simple-madrasha-website.git" className='project-btn'> View Codes </a>
                    <a target='_blank' rel="noopener noreferrer" href="https://bespoke-kheer-fb6584.netlify.app/" className='project-btn'> View Live App </a>
                </div>
            </div>

            <div className='project-card flex flex-col'>
                <div>
                    <img className='rounded-lg' src="/images/projects/real-state.png" alt="project image" />
                </div>
                <div className='project-technology-container'>
                    <span className='project-technology'> HTML </span>
                    <span className='project-technology'> CSS </span>
                    <span className='project-technology'> Tailwind CSS </span>
                </div>
                <div className='my-3'>
                    <h3 className='text-gray-300 text-2xl font-bold'> Real Estate </h3>
                    <p className='text-gray-400 text-[12px]'> 17 / 05 / 2025 </p>
                </div>
                <div>
                    <p className='text-gray-400'> This is a demo Real Estate project. I made this website using HTML and CSS only. I haven't added any links to it yet. The buttons below will not work. </p>
                </div>
                <div className='flex flex-1 items-end justify-between'>
                    <a href="" className='project-btn'> View Codes </a>
                    <a href="" className='project-btn'> View Live App </a>
                </div>
            </div>

            <div className='project-card flex flex-col'>
                <div>
                    <img className='rounded-lg' src="/images/projects/blog.png" alt="project image" />
                </div>
                <div className='project-technology-container'>
                    <span className='project-technology'> HTML </span>
                    <span className='project-technology'> CSS </span>
                    <span className='project-technology'> Tailwind CSS </span>
                </div>
                <div className='my-3'>
                    <h3 className='text-gray-300 text-2xl font-bold'> Personal Blog </h3>
                    <p className='text-gray-400 text-[12px]'> 28 / 04 / 2025 </p>
                </div>
                <div>
                    <p className='text-gray-400'> This is a demo personal blog website. I made this website using HTML and CSS only. I haven't added any links to it. The buttons below will not work. </p>
                </div>
                <div className='flex flex-1 items-end justify-between'>
                    <a href="" className='project-btn'> View Codes </a>
                    <a href="" className='project-btn'> View Live App </a>
                </div>
            </div>

            <div className='project-card flex flex-col'>
                <div>
                    <img className='rounded-lg' src="/images/projects/todo app.png" alt="project image" />
                </div>
                <div className='project-technology-container'>
                    <span className='project-technology'> HTML </span>
                    <span className='project-technology'> CSS </span>
                    <span className='project-technology'> Tailwind CSS </span>
                    <span className='project-technology'> React JS </span>
                    <span className='project-technology'> Javascript </span>
                </div>
                <div className='my-3'>
                    <h3 className='text-gray-300 text-2xl font-bold'> React Todo </h3>
                    <p className='text-gray-400 text-[12px]'> 20 / 08 / 2025 </p>
                </div>
                <div>
                    <p className='text-gray-400'> This is a mini react todo project. In this app, you can add and delete something. </p>
                </div>
                <div className='flex flex-1 items-end justify-between'>
                    <a target='_blank' rel="noopener noreferrer" href="https://github.com/mahbub-hb-dev/Todo-App.git" className='project-btn'> View Codes </a>
                    <a target='_blank' rel="noopener noreferrer" href="https://mahbubs-todo-app.netlify.app/" className='project-btn'> View Live App </a>
                </div>
            </div>

            <div className='project-card flex flex-col'>
                <div>
                    <img className='rounded-lg' src="/images/projects/js todo.png" alt="project image" />
                </div>
                <div className='project-technology-container'>
                    <span className='project-technology'> HTML </span>
                    <span className='project-technology'> CSS </span>
                    <span className='project-technology'> Javascript </span>
                </div>
                <div className='my-3'>
                    <h3 className='text-gray-300 text-2xl font-bold'> JS Todo App </h3>
                    <p className='text-gray-400 text-[12px]'> 05 / 07 / 2025 </p>
                </div>
                <div>
                    <p className='text-gray-400'> I made this project with HTML, CSS and Javascript. You can only add something in this app. I made this todo app for fun! </p>
                </div>
                <div className='flex flex-1 items-end justify-between'>
                    <a target='_blank' rel="noopener noreferrer" href="https://github.com/mahbub-hb-dev/todo-app-basic-js-2025.git" className='project-btn'> View Codes </a>
                    <a target='_blank' rel="noopener noreferrer" href="https://mini-todo-js-project.vercel.app/" className='project-btn'> View Live App </a>
                </div>
            </div>

            <div className='project-card flex flex-col'>
                <div>
                    <img className='rounded-lg' src="/images/projects/cv.png" alt="project image" />
                </div>
                <div className='project-technology-container'>
                    <span className='project-technology'> HTML </span>
                    <span className='project-technology'> CSS </span>
                </div>
                <div className='my-3'>
                    <h3 className='text-gray-300 text-2xl font-bold'> CV </h3>
                    <p className='text-gray-400 text-[12px]'> 05 / 01 / 2025 </p>
                </div>
                <div>
                    <p className='text-gray-400'> This is a dummy cv project. I created this cv for learning purpose. I created this cv with only HTML and CSS. To make this layout I used CSS float property! </p>
                </div>
                <div className='flex flex-1 items-end justify-between'>
                    <a href="" className='project-btn'> View Codes </a>
                    <a href="" className='project-btn'> View Live App </a>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Projects
