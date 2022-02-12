import {
  CollectionReference,
  addDoc,
  deleteDoc,
  DocumentReference,
  updateDoc,
  FieldValue,
} from "firebase/firestore";
import { ref } from "vue";

const useCollection = (colRef: CollectionReference) => {
  const error = ref<string | null>(null);
  const isPending = ref<boolean>(false);

  const addDocument = async (doc: Record<string, unknown>) => {
    error.value = null;
    isPending.value = true;

    try {
      const res = await addDoc(colRef, doc);
      isPending.value = false;
      return res;
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        error.value = "Could not add this document";
      }
      isPending.value = false;
    }
  };

  const deleteDocument = async (docRef: DocumentReference) => {
    error.value = null;
    isPending.value = true;

    try {
      const res = await deleteDoc(docRef);
      isPending.value = false;
      return res;
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        error.value = "Could not delete this document";
      }
      isPending.value = false;
    }
  };

  const updateDocument = async (
    docRef: DocumentReference,
    data: Record<string, FieldValue | Partial<unknown>>
  ) => {
    error.value = null;
    isPending.value = true;

    try {
      const res = await updateDoc(docRef, data);
      isPending.value = false;
      return res;
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        error.value = "Could not update this document";
      }
      isPending.value = false;
    }
  };

  return { addDocument, deleteDocument,updateDocument, isPending, error };
};

export default useCollection;
