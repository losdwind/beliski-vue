import { Ref, ref, watchEffect } from "vue";

import { db } from "../firebase/config";
import {
  collection,
  onSnapshot,
  query,
  QueryConstraint,
} from "firebase/firestore";

const getCollection = (path: string, queryConstraints: QueryConstraint[]) => {
  const documents = ref<Record<string, unknown>[] | null>(null);
  const colRef = collection(db, path);
  let compundQuery = query(colRef);
  if (queryConstraints.length > 0) {
    console.log(queryConstraints);
    compundQuery = query(colRef, ...queryConstraints);
  }
  const unsub = onSnapshot(compundQuery, (snapshot) => {
    const results: Record<string, unknown>[] | null = [];
    snapshot.docs.forEach((doc) => {
      results.push(doc.data());
    });
    documents.value = results;
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { documents };
};

export default getCollection;
