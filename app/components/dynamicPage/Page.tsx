import React, { FC } from 'react'
import { pageProps } from './dynamicPage.type'

const Page:FC<pageProps> = (pageProps) => {
  return (
    <div className={`lg:max-w-[1250px] flex flex-col m-auto${pageProps.className ? pageProps.className : ""}`}>{pageProps.children}</div>
  )
}

export default Page