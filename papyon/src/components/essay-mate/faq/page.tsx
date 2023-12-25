import React from 'react'
import FaqHeader from './faqHeader'
import FaqContent from './faqContent'

const Faq = () => {
  return (
    <div className='flex flex-col w-full mt-[150px] '>
        <FaqHeader/>
        <FaqContent/>
    </div>
  )
}

export default Faq