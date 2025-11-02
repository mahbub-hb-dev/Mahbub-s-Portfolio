import { projectData } from "./projectsData"

const Projects = () => {

  return (
    <section id='projects' className='px-3 common-section-style bg-[#191924]'>

        <h2 className='common-h2'> Projects </h2>
        <p className='custom-mute text-center my-5'> I have experience doing some projects. <span className='block md:inline'>Here are a few examples of my work.</span> </p>

        <div className='px-3 py-7 flex flex-wrap justify-center items-center gap-7'>

            {projectData.map((data, index) => (
                <div key={index} className='project-card flex flex-col'>
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
