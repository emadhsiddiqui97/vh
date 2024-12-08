import Image from 'next/image'
import React from 'react'
import logo from '../../../logo_black.webp'
import { footer } from '@/app/data/footerLinks'
import FooterItem from './FooterLink'

const Footer = () => {
  return (
    <div className='flex flex-col text-black justify-center items-center p-4'>
        <div className='flex flex-col md:flex-row w-full mx-2'>
            <div className='flex flex-col basis-1/3 space-y-4 justify-center items-center'>
                <Image src={logo} alt=''/>
            <span className='text-justify'>We love car enthusiasts! Our passion for cars goes beyond just knowledge—we live and breathe them.</span>
            <div>socials</div>
            </div>
            <div className='flex basis-1/3'>
                <ul>
                    {footer.map((link, index)=>{
                        return <li key={index}><FooterItem href={link.href} linkText={link.linkText}/></li>
                    })}
                </ul>
            </div>
            <div className='flex basis-1/3'>
                contact
            </div>
        </div>
        <div className='bg-[#06A9EF] w-[100vw] p-4 text-white flex justify-center font-bold py-8'>2024. Get vin info. All Rights Reserved.</div>
    </div>
  )
}

export default Footer