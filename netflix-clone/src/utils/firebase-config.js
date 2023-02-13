import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgPoCsrlILjj4rlz_vazN0z1dCFYOFnJY",
  authDomain: "react-netflix-clone-198a4.firebaseapp.com",
  projectId: "react-netflix-clone-198a4",
  storageBucket: "react-netflix-clone-198a4.appspot.com",
  messagingSenderId: "979080113980",
  appId: "1:979080113980:web:b1f86621c94730ed44b839",
  measurementId: "G-ECTYHNKVQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);