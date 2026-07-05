import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// YOUR CONFIG (safe to use client-side)
const firebaseConfig = {
  apiKey: "AIzaSyAtqvfpAwJDghiXC1qlKc_5GCj4qkEWcJ0",
  authDomain: "keideg.firebaseapp.com",
  projectId: "keideg",
  storageBucket: "keideg.firebasestorage.app",
  messagingSenderId: "914397358620",
  appId: "1:914397358620:web:cdb26f5f04fd0191d2cdd9",
  measurementId: "G-1629PW3FT9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// SIGN UP
window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Account created");
    })
    .catch((err) => {
      alert(err.message);
    });
};

// LOGIN
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Logged in");
    })
    .catch((err) => {
      alert(err.message);
    });
};

// DISCORD (placeholder for now)
window.discordLogin = function () {
  alert("Discord login coming next step (OAuth setup needed)");
};