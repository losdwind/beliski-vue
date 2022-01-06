import {ref } from "vue";

// firebase imports
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const user = ref(auth.currentUser);

// auth changes
onAuthStateChanged(auth, (_user) => {
  console.log("user state changed. current user is:", _user);
  user.value = _user;
});

const getUserState = () => {
  return { user };
};

export default getUserState;
