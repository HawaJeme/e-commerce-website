import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAxz1Uym0TPKzsuFiMxb2ZZoIjCcw0nYdg",
  authDomain: "opulence-a8.firebaseapp.com",
  projectId: "opulence-a8",
  storageBucket: "opulence-a8.appspot.com",
  messagingSenderId: "980419287871",
  appId: "1:980419287871:web:5c41d85348da375a39518a",
  measurementId: "G-6K8XYR84BL",
  databaseURL: "https://opulence-a8-default-rtdb.firebaseio.com/"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const database = getDatabase(app)
