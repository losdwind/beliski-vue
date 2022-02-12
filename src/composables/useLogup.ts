import { ref } from "vue";

// firebase imports
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const error = ref<string | null>(null);
const isPending = ref<boolean>(false);

const logup = async (email: string, password: string) => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Could not complete signup");
    }

    error.value = null;
    isPending.value = false;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
      error.value = err.message;
      isPending.value = false;
    }
  }
};

const useLogup = () => {
  return { error, isPending, logup };
};

export default useLogup;
