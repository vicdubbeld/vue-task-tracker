import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAEfKrYJlXmCkbgyi2Z-nTBbNePkK45nwA",
  authDomain: "vue-task-tracker.firebaseapp.com",
  databaseURL: "https://vue-task-tracker-default-rtdb.firebaseio.com",
  projectId: "vue-task-tracker",
  storageBucket: "vue-task-tracker.appspot.com",
  messagingSenderId: "947499355173",
  appId: "1:947499355173:web:0033d998debb08c5e503cc",
  measurementId: "G-Y9HLSXL2DN",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
