import React from "react";
import "./ImageGrid.css";
import useFirestore from "../Hooks.js/useFirestore.js";
import Skeleton from "./Skeleton";
import { motion } from "framer-motion";

function ImageGrid({ setSelectedImage }) {
  const { docs } = useFirestore("images");
  const skeletonCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // console.log(docs);

  return (
    <div className="img-grid">
      {docs.length
        ? docs.map((doc) => (
            <motion.div
              key={doc.id}
              className="img-wrap"
              layout
              whileHover={{ opacity: 1 }}
              onClick={() => setSelectedImage(doc.url)}
            >
              <motion.img
                src={doc.url}
                alt={"pic: " + doc.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
            </motion.div>
          ))
        : skeletonCount.map((num) => <Skeleton key={num} />)}
    </div>
  );
}

export default ImageGrid;
