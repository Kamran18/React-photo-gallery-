import React, { useState } from "react";
import "./Galary.css";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import UploadForm from "./UploadForm";

function Galary() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="galary">
      <div className="galary__top">
        <div className="galary__title">Your Pictures</div>
        <div className="galary__subtitle">
          A React, Firebase &#38; Framer Motion Photo Galary
        </div>
      </div>

      <div className="galary__form">
        <UploadForm />
      </div>

      <div className="galary__bottom">
        <ImageGrid setSelectedImage={setSelectedImage} />
      </div>

      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
}

export default Galary;
