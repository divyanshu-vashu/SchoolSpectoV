// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9mziK5Lhq7JwlNVJnp0sTpnhoHvA-l5M",
  authDomain: "prkashplayschool.firebaseapp.com",
  projectId: "prkashplayschool",
  storageBucket: "prkashplayschool.appspot.com",
  messagingSenderId: "1047583889828",
  appId: "1:1047583889828:web:1eec2fdbe93659a0ac8931",
  measurementId: "G-SXJWJGNVN2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
