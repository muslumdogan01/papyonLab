import React from 'react'
import FaqHeader from './faqHeader'
import FaqContent from './faqContent'

const Faq = () => {
  return (
    <div className='flex flex-col w-full md:mt-[150px] mt-[100px] px-4 md:px-0'>
        <FaqHeader/>
        <FaqContent/>
    </div>
  )
}

export default Faq