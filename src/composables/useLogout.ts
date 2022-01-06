import { ref } from "vue";

// firebase imports
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

const error = ref<string | null>(null);
const isPending = ref<boolean>(false);

const logout = async () => {
  error.value = null;
  isPending.value = true;

  try {
    await signOut(auth);
    isPending.value = false;
  } catch (err) {
    if (err instanceof Error) {
      error.value = err.message;
      isPending.value = false;
    }
  }
};

const useLogout = () => {
  return { error, isPending, logout };
};
