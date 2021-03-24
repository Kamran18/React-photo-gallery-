import { useEffect, useState } from "react";
import { projectStorage, projectFirestore, timeStamp } from "../config/config";

function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [fileURL, setFileURL] = useState(null);
  const [uploadError, setUploadError] = useState(null);

  useEffect(() => {
    let storageRef = projectStorage.ref();
    let uploadTask = storageRef.child("images/" + file.name).put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        setUploadError(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          const url = downloadURL;
          const createdAt = timeStamp();

          setFileURL(url);
          projectFirestore.collection("images").add({ url, createdAt });
        });
      }
    );
  }, [file]);

  return { progress, fileURL, uploadError };
}

export default useStorage;
