import React, { useEffect } from "react";
import useStorage from "../Hooks.js/useStorage";
import { motion } from "framer-motion";
import "./ProgressBar.css";

function ProgressBar({ file, setFile }) {
  const { fileURL, progress } = useStorage(file);

  useEffect(() => {
    if (fileURL) {
      setFile(null);
    }
  }, [fileURL, setFile]);

  // console.log("PB", fileURL, uploadError, progress);

  return (
    <div className="progressBar-wrap">
      <motion.div
        className="progressBar"
        layout
        initial={{ width: 0 }}
        animate={{ width: progress + "%" }}
      ></motion.div>
    </div>
  );
}

export default ProgressBar;
