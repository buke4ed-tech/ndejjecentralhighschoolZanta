import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDRrYe1VxsaTuY-nTtqbSAsz3Ohw3PrSK0",
  authDomain: "ndejjecentralhighschool-zanta.firebaseapp.com",
  projectId: "ndejjecentralhighschool-zanta",
  storageBucket: "ndejjecentralhighschool-zanta.firebasestorage.app",
  messagingSenderId: "1099010553575",
  appId: "1:1099010553575:web:229a4263ab664ed413d442",
  measurementId: "G-YBXSCZ4YTF"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

let analytics = null;

try {
  analytics = getAnalytics(app);
} catch (error) {
  console.warn(
    "Firebase Analytics could not be initialized.",
    error
  );
}

export {
  app,
  auth,
  db,
  analytics
};