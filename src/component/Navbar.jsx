import React from 'react'

const Navbar = () => {
  return (
    <header>

        <nav className="bg-[rgba(0,0,0,0.78)] md:bg-black fixed w-full z-20 top-0 start-0">
            <div className="max-w-[1180px] flex flex-wrap items-center justify-between mx-auto p-4">
                
                <a href="#about" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap text-fuchsia-500 font-serif"> M.H. Belal </span>
                </a>


                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                    <a href='https://github.com/mahbub-hb-dev' target='_blank' type="button" className="text-white bg-transparent common-border hover:bg-gradient-to-r from-fuchsia-700 to-purple-600 focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 text-center dark:focus:ring-blue-800"> Github Profile </a>
                    
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>

                </div>


                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul id='sections' className="flex flex-col px-2 md:p-0 mt-3 font-medium bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                        {/* <li> <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a> </li> */}
                        <li> <a href="#about" className="block py-2 px-3 text-white transition-all hover:text-fuchsia-500 md:p-0 md:dark:hover:bg-transparent cursor-text">About</a> </li>
                        <li> <a href="#skills" className="block py-2 px-3 text-white transition-all hover:text-fuchsia-500 md:p-0 md:dark:hover:bg-transparent cursor-text">Skills</a> </li>
                        <li> <a href="#projects" className="block py-2 px-3 text-white transition-all hover:text-fuchsia-500 md:p-0 md:dark:hover:bg-transparent cursor-text">Projects</a> </li>
                        <li> <a href="#education" className="block py-2 px-3 text-white transition-all hover:text-fuchsia-500 md:p-0 md:dark:hover:bg-transparent cursor-text">Education</a> </li>
                        <li> <a href="#contact" className="block py-2 px-3 text-white transition-all hover:text-fuchsia-500 md:p-0 md:dark:hover:bg-transparent cursor-text">Contact</a> </li>
                    </ul>
                </div>

            </div>
        </nav>

    </header>
  )
}

export default Navbar
