import React, { FC } from 'react'
import Link from 'next/link'
import { footerData } from './footer.type'
const FooterItem:FC<footerData> = ({linkText, href}) => {
  return (
    <Link href={href}><span>{linkText}</span></Link>
  )
}

export default FooterItem