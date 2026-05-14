import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// तुझ्या स्क्रीनशॉटमधील कॉन्फिगरेशन
const firebaseConfig = {
  apiKey: "AIzaSyA_B-n6C2CfDRdrdTinoV0YQkG3sYquf6o",
  authDomain: "shreya-traders-b4338.firebaseapp.com",
  projectId: "shreya-traders-b4338",
  storageBucket: "shreya-traders-b4338.firebasestorage.app",
  messagingSenderId: "1019147250987",
  appId: "1:1019147250987:web:7dd39ead9bf74436df696e",
  measurementId: "G-0V575V4C8B"
};

// Firebase Initialize करा
const app = initializeApp(firebaseConfig);

// या सर्व्हिसेस एक्सपोर्ट करा जेणेकरून त्या आपण इतर फाईल्समध्ये वापरू शकू
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);