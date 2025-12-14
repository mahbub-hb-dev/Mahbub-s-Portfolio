const educationData = [
    {
        id : 1,
        image : "images/ahmadsit.jpg",
        alt : "Ahamd's Education logo",
        instituteName : "Ahmad's Education IT Institute",
        department : "Web Development",
        duration : "April 2025 - Current",
        desc : "I am learning Web Development at Ahmad's Education IT Institute and I also completed 2 month's Spoken English course from here."
    },
    {
        id : 2,
        image : "images/college-logo.png",
        alt : "Rajbari Government logo",
        instituteName : "Rajbari Government College, Rajbari",
        department : "Masters of Business Administration (MBA)",
        duration : "2022 - 2023",
        desc : "I completed my Master's degree from the Department of Accounting at Rajbari Government College."
    },
    {
        id : 3,
        image : "images/college-logo.png",
        alt : "Rajbari Government logo",
        instituteName : "Rajbari Government College, Rajbari",
        department : "Bachelor of Business Administration (BBA)",
        duration : "2017 - 2021",
        desc : "I completed my Honours degree from the Department of Accounting at Rajbari Government College."
    },
    {
        id : 4,
        image : "images/kumarkhali-college.jpg",
        alt : "Kumarkhali College logo",
        instituteName : "Kumarkhali Government College, Kumarkhali",
        department : "Business Management (BM)",
        duration : "2015 - 2017",
        desc : "I completed my HSC from the department of Businessment Management (B.M.) Group at Kumarkhali Government College."
    },
]

const Education = () => {
  return (
    <section id='education' className='px-3 common-section-style bg-[#1C1C27]'>

        <h2 className='common-h2'> Education </h2>
        <p className='custom-mute text-center my-5'> My education has been a journey of self-discovery and growth. <span className='min-[520px]:block'>My educational details are as follows.</span> </p>

        <div className='py-7'>
            {educationData.map((data, index) => (
                <div key={index} className='education w-[300px] mx-auto md:w-[650px] common-border rounded-xl text-gray-400 p-4 mb-6'>
                    <div className='flex gap-4'>
                        <div>
                            <img className='w-14 rounded-xl' src={data.image} alt={data.alt} />
                        </div>
                        <div>
                            <h3 className='text-xl font-bold'> {data.instituteName} </h3>
                            <h5> {data.department} </h5>
                            <p className='text-[12px]'> {data.duration} </p>
                        </div>
                    </div>
                    <div>
                        <p className='mt-3'> {data.desc} </p>
                    </div>
                </div>
            ))}
        </div>

    </section>
  )
}

export default Education
