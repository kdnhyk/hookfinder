import { appFireStore, tiemstamp } from "../firebase";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";

export const useFirestore = (transaction) => {
  const collectionRef = collection(appFireStore, transaction);

  const addDocument = async (doc) => {
    try {
      const createdTime = tiemstamp.fromDate(new Date());
      const docRef = await addDoc(collectionRef, { ...doc, createdTime });
      console.log(docRef);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteDocument = async (id) => {
    try {
      await deleteDoc(doc(collectionRef, id));
      console.log(doc(appFireStore, transaction, id));
    } catch (error) {
      console.log(error.message);
    }
  };

  return { addDocument, deleteDocument };
};
