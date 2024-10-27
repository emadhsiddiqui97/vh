import React, { FC } from 'react'
import { buttonProps } from './button.type'
import Link from 'next/link'

const Button:FC<buttonProps> = ({text, className, href}) => {
  return (
    <Link href={href}>
    <button className={`${className?className:""} text-white w-fit rounded-md py-2 px-4 bg-blue-500 font-semibold hover:brightness-105 transistion-all ease-in-out`} >{text}</button></Link>
  )
}

export default Button