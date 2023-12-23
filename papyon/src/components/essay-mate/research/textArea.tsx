import React from 'react'

const TextArea = () => {
  return (
    <div className="flex flex-col  px-4">
    <h1 className="md:text-[40px] text-[30px] font-semibold leading-[49px] -tracking-3 text-black lg:text-left text-center z-40">
      Essay Research for <br /> Any Topic
    </h1>
    <p className="text-lg leading-8 font-normal text-black lg:text-left text-center w-full xl:w-[462px] mt-[10px] text-opacity-80 z-40">
      The AI Essay Writer conducts research on any given topic using
      specified keywords, leveraging a database and natural language
      processing (NLP). The app can also summarize PDFs or URLs to
      complete the research. Additionally, users can converse with
      ChatGPT-3 to get answers to any question.
    </p>
  </div>
  )
}

export default TextArea