import Image from 'next/image'
import React from 'react'
import logo from '../../logo.webp'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center p-4'>
        <div className='flex w-full mx-2'>
            <div className='flex flex-col basis-1/3 space-y-4 justify-center items-center'>
                <Image src={logo} alt=''/>
            <span className='text-justify'>We love car enthusiasts! Our passion for cars goes beyond just knowledge—we live and breathe them.</span>
            <div>socials</div>
            </div>
            <div className='flex basis-1/3'>
                links
            </div>
            <div className='flex basis-1/3'>
                contact
            </div>
        </div>
        <div className='bg-[#6EC1E4] w-full p-4 flex justify-center font-bold py-8'>2024. Get vin info. All Rights Reserved.</div>
    </div>
  )
}

export default Footer