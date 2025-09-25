import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='px-3 pb-10 common-section-style bg-gradient-to-bl from-[#1A1E30] to-[#311A40]'>
        <h2  className='common-h2'> Contact </h2>
        <p className='custom-mute text-center my-5'> Feel free to reach out to me for any questions or opportunities! </p>

        <form action="" className='max-w-[600px] mx-auto p-8 bg-[#171721] shadow-[0_4px_24px_rgba(23,92,230,0.15)] rounded-xl'>
            <h3 className='text-2xl font-bold text-white mb-4'> Email Me 🚀 </h3>
            <div>
                <input className='block w-full focus:border-fuchsia-500 text-white text-[18px] border border-gray-400 rounded-xl mb-5 bg-transparent py-3 px-4' type="text" name="name" id="name" placeholder='Your Name' />
                <input className='block w-full focus:border-fuchsia-500 text-white text-[18px] border border-gray-400 rounded-xl mb-5 bg-transparent py-3 px-4' type="email" name="email" id="email" placeholder='Your Email' />
                <input className='block w-full focus:border-fuchsia-500 text-white text-[18px] border border-gray-400 rounded-xl mb-5 bg-transparent py-3 px-4' type="text" name="name" id="name" placeholder='Subject' />
                <textarea className='block w-full focus:border-fuchsia-500 text-white text-[18px] border border-gray-400 rounded-xl mb-5 bg-transparent py-3 px-4' rows={5} name="message" id="message" placeholder='Message'></textarea>
                <button className='w-full text-white bg-gradient-to-r from-fuchsia-700 to-purple-600 text-2xl py-3 rounded-2xl cursor-pointer'> Send </button>
            </div>
        </form>

    </section>
  )
}

export default Contact

