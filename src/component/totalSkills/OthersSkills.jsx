const othersData = [
    {
        image : "images/icons/git-icon.svg",
        title : "Git"
    },
    {
        image : "images/icons/github-icon-1.svg",
        title : "Github"
    },
    {
        image : "images/icons/visual-studio-code-1.svg",
        title : "VS Code"
    },
    {
        image : "images/icons/postman.svg",
        title : "Postman"
    },
    {
        image : "images/icons/figma-icon.svg",
        title : "Figma"
    },
    {
        image : "images/icons/chrome-devtools.svg",
        title : "Chrome DevTools"
    },
]

const OthersSkills = () => {
  return (
    <div className="w-[300px] sm:w-[400px] md:w-[500px] mx-auto border border-purple-600 rounded-xl shadow-[0px_4px_24px_rgba(23,92,230,0.15)] text-gray-400 py-3 my-7">
                        
        <h3 className="font-bold text-[26px] text-center"> Others </h3>

        <div className="my-1 p-5 flex flex-wrap gap-3 justify-center">

            {othersData.map((data, index) => (
                <div key={index} className='flex gap-2 border rounded-xl py-3 px-4 max-sm:text-sm max-sm:px-3 max-sm:py-2'>
                    <img className='w-6 h-6' src={data.image} alt={data.title} /> <span> {data.title} </span>
                </div>
            ))}
            
        </div>

    </div>
  )
}

export default OthersSkills
