import Image from 'next/image'
import React from 'react'
import logo from '../../logo.webp'

const Header = () => {
  return (
    <div className='flex justify-between items-center align-center self-center m-4 my-8 p-2 px-10 headerStyle max-w-[1250px] min-w-fit'>
        <div className='flex md:basis-1/5 flex-1'><Image src={logo} alt='' height={50}/></div>
        <div className='flex basis-1/5'></div>
        <div className=''>
            <ul className='md:flex gap-8 basis-3/5 justify-center hidden'>
                <li className="font-bold text-xl hover:text-[#06A9EF] hover:underline hover:underline-offset-4 transition-all ease-in-out">Home</li>
                <li className="font-bold text-xl hover:text-[#06A9EF] hover:underline hover:underline-offset-4 transition-all ease-in-out">Tools</li>
                <li className="font-bold text-xl hover:text-[#06A9EF] hover:underline hover:underline-offset-4 transition-all ease-in-out">About Us</li>
                <li className="font-bold text-xl hover:text-[#06A9EF] hover:underline hover:underline-offset-4 transition-all ease-in-out">Services</li>
                <li className="font-bold text-xl hover:text-[#06A9EF] hover:underline hover:underline-offset-4 transition-all ease-in-out">Support</li>
            </ul>
        </div>
    </div>
  )
}

export default Header