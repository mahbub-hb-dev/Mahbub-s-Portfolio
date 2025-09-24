import React from 'react'

const Education = () => {
  return (
    <section id='education' className='common-section-style bg-[#1C1C27]'>
        <h2 className='common-h2'> Education </h2>
        <p className='custom-mute text-center my-5'> My education has been a journey of self-discovery and growth. <span className='min-[520px]:block'>My educational details are as follows.</span> </p>

        <div className='py-7'>

            <div className='education w-[300px] mx-auto md:w-[650px] common-border rounded-xl text-gray-400 p-4 mb-6'>
                <div className='flex gap-4'>
                    <div>
                        <img className='w-14 rounded-xl' src="images/ahmadsit.jpg" alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold'> Ahmad's Education IT Institute. </h3>
                        <h5> Web Development </h5>
                        <p className='text-[12px]'> April 2025 - Current </p>
                    </div>
                </div>
                <p className='mt-3'> I am learning Web Development at Ahmad's Education IT Institute and I also completed 2 month's Spoken English course from here. </p>
            </div>

            <div className='education w-[300px] mx-auto md:w-[650px] common-border rounded-xl text-gray-400 p-4 mb-6'>
                <div className='flex gap-4'>
                    <div>
                        <img className='w-14 rounded-xl' src="images/college-logo.png" alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold'> Rajbari Government College, Rajbari </h3>
                        <h5> Masters of Business Administration (MBA) </h5>
                        <p className='text-[12px]'> 2017 - 2021 </p>
                    </div>
                </div>
                <div>
                    {/* <p className='py-2.5 font-bold'> CGPA : 2.88 out of 4 </p> */}
                    <p className='mt-3'> I completed my Master's degree from the Department of Accounting at Rajbari Government College. </p>
                </div>
            </div>

            <div className='education w-[300px] mx-auto md:w-[650px] common-border rounded-xl text-gray-400 p-4 mb-6'>
                <div className='flex gap-4'>
                    <div>
                        <img className='w-14 rounded-xl' src="images/college-logo.png" alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold'> Rajbari Government College, Rajbari </h3>
                        <h5> Bachelor of Business Administration (BBA) </h5>
                        <p className='text-[12px]'> 2021 - 2022 </p>
                    </div>
                </div>
                <div>
                    {/* <p className='py-2.5 font-bold'> CGPA : 2.91 out of 4 </p> */}
                    <p className='mt-3'> I completed my Honours degree from the Department of Accounting at Rajbari Government College.  </p>
                </div>
            </div>

            <div className='education w-[300px] mx-auto md:w-[650px] common-border rounded-xl text-gray-400 p-4 mb-6'>
                <div className='flex gap-4'>
                    <div>
                        <img className='w-14 rounded-xl' src="images/kumarkhali-college.jpg" alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold'> Kumarkhali Government College, Kumarkhali </h3>
                        <h5> Business Management (BM) </h5>
                        <p className='text-[12px]'> 2015 - 2017 </p>
                    </div>
                </div>
                <div>
                    {/* <p className='py-2.5 font-bold'> CGPA : 3.92 out of 5 </p> */}
                    <p className='mt-3'> I completed my HSC from the department of Businessment Management (B.M.) Group at Kumarkhali Government College. </p>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Education
