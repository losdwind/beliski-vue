import {
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { storage } from "../firebase/config";

import { ref } from "vue";
import getUserState from "./getUserState";

const { user } = getUserState();

const useStorage = () => {
  const error = ref<string | null>(null);
  const url = ref<string | null>(null);
  const filePath = ref<string | null>(null);

  const uploadImage = async (file: File) => {
    if (user.value != null) {
      filePath.value = `${user.value.uid}/${file.name}`;
    } else {
      error.value = "user status is invalid, please try log in again.";
      return;
    }

    const stRef = storageRef(storage, filePath.value);
    const uploadTask = uploadBytesResumable(stRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (err) => {
        // Handle unsuccessful uploads
        console.log(err.message);
        error.value = err.message;
      },
      async () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        console.log("File available at", downloadURL);
        url.value = downloadURL;
      }
    );
  };

  const deleteImage = async (path: string) => {
    const stRef = storageRef(storage, path);

    try {
      await deleteObject(stRef);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        error.value = err.message;
      }
    }
  };

  return { uploadImage, deleteImage, url, filePath, error };
};

export default useStorage;
