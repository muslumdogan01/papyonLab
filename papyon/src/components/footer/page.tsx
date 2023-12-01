import React from 'react'
import FooterHeader from './footerHeader'
import FooterContent from './footerContent'
import FooterMenu from './footerMenu'

const Footer = () => {
  return (
    <div className='w-full flex flex-col bg-gradient-to-b from-[#00030F00] to-[#21C1F333] z-0'>
        <FooterHeader/>
        <FooterContent/>
        <FooterMenu/>
    </div>
  )
}

export default Footer