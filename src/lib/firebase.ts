import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHI0UIjaVrFY48pkpp5lHVXGU1lXPi8v0",
  authDomain: "painelecommerce.firebaseapp.com",
  projectId: "painelecommerce",
  storageBucket: "painelecommerce.firebasestorage.app",
  messagingSenderId: "288308785325",
  appId: "1:288308785325:web:823ff52855adc8d2f79624"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);