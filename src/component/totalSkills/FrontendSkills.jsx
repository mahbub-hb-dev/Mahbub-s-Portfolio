
const frontendData = [
    {
        image : "images/icons/react-2.svg",
        title : "React JS"
    },
    {
        image : "images/icons/redux.svg",
        title : "Redux"
    },
    {
        image : "images/icons/next-js.svg",
        title : "Next JS"
    },
    {
        image : "images/icons/html-1.svg",
        title : "HTML"
    },
    {
        image : "images/icons/css-3.svg",
        title : "CSS"
    },
    {
        image : "images/icons/javascript-1.svg",
        title : "JavaScript"
    },
    {
        image : "images/icons/bootstrap-5-1.svg",
        title : "BootStrap"
    },
    {
        image : "images/icons/material-ui-1.svg",
        title : "Material UI"
    },
    {
        image : "images/icons/tailwindcss.svg",
        title : "Tailwind CSS"
    },
    {
        image : "images/icons/typescript.svg",
        title : "TypeScript"
    },
]

const FrontendSkills = () => {

  return (
    <div className="max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto border border-purple-600 shadow-[0px_4px_24px_rgba(23,92,230,0.15)] rounded-xl text-gray-400 py-3 my-7">
                        
        <h3 className="font-bold font-serif text-[26px] text-center"> Frontend </h3>

        <div className="my-1 p-5 flex flex-wrap gap-3 justify-center">

            {frontendData.map((data, index) => (
                <div key={index} className='flex gap-2 border rounded-xl py-3 px-4 max-sm:text-sm max-sm:px-3 max-sm:py-2'>
                    <img className='w-6 h-6' src={data.image} alt={data.title} /> <span> {data.title} </span>
                </div>
            ))}
            
        </div>

    </div>
  )
}

export default FrontendSkills
