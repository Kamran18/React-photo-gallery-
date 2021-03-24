import { useState, useEffect } from "react";
import { projectFirestore } from "../config/config";

function useFirestore(collectionName) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubs = projectFirestore
      .collection(collectionName)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsubs();
  }, [collectionName]);

  return { docs };
}

export default useFirestore;
