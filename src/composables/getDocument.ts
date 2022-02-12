import { ref } from "vue";

import { DocumentReference, onSnapshot } from "firebase/firestore";

const useDocument = (docRef: DocumentReference) => {

  const document = ref<Record<string, unknown> | undefined>(undefined);
  const error = ref<string | null>(null);

  const unsub = onSnapshot(docRef, (doc) => {
    if (doc.data() != undefined) {
      document.value = doc.data();
      error.value = null;
    } else {
      error.value = "document do not exist";
    }
  });
};

export default useDocument;
