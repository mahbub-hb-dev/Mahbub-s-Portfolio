import BackendSkills from "./totalSkills/BackendSkills";
import FrontendSkills from "./totalSkills/FrontendSkills";
import OthersSkills from "./totalSkills/OthersSkills";

const Skills = () => {
  return (
    <section id='skills' className="common-section-style bg-[#1C1C27]">

        <div className='max-w-[1180px] mx-auto'>
            <h2 className='common-h2'> Skills </h2>
            <p className="text-center custom-mute my-5 sm:px-9">Here are some of my skills. Some I have learned and some I am still learning.</p>
            
            <div className='px-3 py-7 flex gap-4 flex-wrap'>
                <FrontendSkills />
                <BackendSkills />
                <OthersSkills />
            </div>
        </div>

    </section>
  )
}
export default Skills;