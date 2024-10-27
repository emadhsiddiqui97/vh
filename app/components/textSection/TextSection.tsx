import React, { FC } from 'react'
import { sectionProps } from './textSection.type'
import Image from 'next/image'
import Button from '../Button/Button'

const TextSection:FC<sectionProps> = (sectionProps) => {
  console.log(sectionProps.isFullWidth)
    return (
    <div className={`flex ${sectionProps.isFullWidth ? "" : "rounded-[30px]"} p-4 text-black ${sectionProps.className ? sectionProps.className: ""} ${sectionProps.button || sectionProps.isFullWidth ? "textSectionBackground" : "bg-gray-400"}`}>
        {sectionProps.right ? <div className='basis-2/5'>
            <Image src={sectionProps.image} alt="" width={400} height={800}/>
        </div> :""}
        <div className='basis-3/5 flex flex-col p-4 justify-around'>
            <h2 className='text-2xl font-bold'>{sectionProps.title}</h2>
            <p className='text-justify'>{sectionProps.text}</p>
        {sectionProps.button && <Button text="Expolre More" href={sectionProps.buttonLink}/>}
        </div>
        {!sectionProps.right ? <div className='basis-2/5'>
            <Image src={sectionProps.image} alt="" width={400} height={800}/>
        </div> :""}
    </div>
  )
}

export default TextSection

{/* <button className='rounded-md py-2 px-4 bg-blue-500 font-semibold'>{sectionProps.buttonText}</button> */}