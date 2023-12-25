import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FaqItems = ({ data, key }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div key={key} className="w-full">
      <motion.button
        onClick={toggleAccordion}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full"
      >
        <div className={`bg-[#F1F8FB] w-full flex justify-between items-center p-5 ${!isOpen ? 'mb-5':'mb-0'}`}>
          <p className="text-xl leading-6 font-medium -tracking-3 text-black md:w-full w-60 text-left md:text-center">
            {data.question}
          </p>
          {isOpen ? (
            <span className="text-2xl ">x</span>
          ) : (
            <span className="text-2xl ">+</span>
          )}
        </div>
      </motion.button>
      <AnimatePresence key={data.id}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mb-5 px-5 pb-5 bg-[#F1F8FB]">{data.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItems;
