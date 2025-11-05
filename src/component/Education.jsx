import educationData from "./educationData"

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
