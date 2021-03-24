import { motion } from "framer-motion";
import React from "react";
import "./Modal.css";

function Modal({ selectedImage, setSelectedImage }) {
  const handleClick = (event) => {
    if (event.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImage}
        alt="Selected Pic"
        initial={{ y: '-20px' }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
}

export default Modal;
