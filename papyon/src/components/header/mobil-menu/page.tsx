import React from 'react'
import Logo from '../logo'
import Hamburger from './hamburger/page'

const MobileMenu = () => {
  return (
    <div className='w-full flex justify-between items-center p-5 bg-black'>
        <Logo width={168} height={20} />
        <Hamburger/>
    </div>
  )
}

export default MobileMenu