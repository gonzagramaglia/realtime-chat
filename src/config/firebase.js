import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCZIE570VEzrcyZjg-6JPVOdv96CIVV9DU",
  authDomain: "realtime-chat-4c16e.firebaseapp.com",
  projectId: "realtime-chat-4c16e",
  storageBucket: "realtime-chat-4c16e.firebasestorage.app",
  messagingSenderId: "960960127642",
  appId: "1:960960127642:web:ec4f445e058e4d2fdab523",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "Hey there, I'm using chat app",
      lastSeen: Date.now(),
    });
    await setDoc(doc(db, "chats", user.uid), {
      chatData: [],
    });
  } catch (err) {
    console.error(err);
    toast.error(err.code);
  }
};

export { signup };
