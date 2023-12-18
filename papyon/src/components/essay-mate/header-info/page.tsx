import React from 'react'
import HeaderText from './headerText'
import HeaderImage from './headerImage'

const HeaderInfo = () => {
  return (
    <div className='mt-[200px] flex flex-col md:flex-row justify-center items-center'>
        <HeaderText/>
        <HeaderImage/>
    </div>
  )
}

export default HeaderInfo