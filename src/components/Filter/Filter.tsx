import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './Filter.css';

const Filter = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleModalToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleModalToggle}>Open Modal</button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            onClick={handleModalToggle}
          >
            <motion.div
              className="modal-content"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>Modal Content</h2>
              <p>This is a framer-motion animated modal.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Filter;
