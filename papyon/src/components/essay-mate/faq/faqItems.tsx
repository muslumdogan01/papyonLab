import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useCallback } from 'react';

const FaqItems = ({ data, key }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = useCallback(() => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }, []);

  const accordionContent = useMemo(() => {
    return (
      <AnimatePresence key={data.id}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, maxHeight: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -60, maxHeight: isOpen ? "500px" : 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mb-5 px-5 pb-5 bg-[#F1F8FB]">{data.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }, [isOpen, data.id, data.answer]);

  return (
    <div className="w-full">
      <motion.button
        onClick={toggleAccordion}
        className="w-full"
      >
        <div className={`bg-[#F1F8FB] w-full flex justify-between items-center p-5 ${!isOpen ? 'mb-5' : 'mb-0'}`}>
          <p className="text-xl leading-6 font-medium -tracking-3 text-black md:w-full w-60 text-left md:text-center">
            {data.question}
          </p>
          <span className="text-2xl">{isOpen ? 'x' : '+'}</span>
        </div>
      </motion.button>
      {accordionContent}
    </div>
  );
};


export default FaqItems;
