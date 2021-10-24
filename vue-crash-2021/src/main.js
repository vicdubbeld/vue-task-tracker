import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEfKrYJlXmCkbgyi2Z-nTBbNePkK45nwA",
  authDomain: "vue-task-tracker.firebaseapp.com",
  projectId: "vue-task-tracker",
  databseURL: "https://vue-task-tracker-default-rtdb.firebaseio.com/",
  storageBucket: "vue-task-tracker.appspot.com",
  messagingSenderId: "947499355173",
  appId: "1:947499355173:web:0033d998debb08c5e503cc",
  measurementId: "G-Y9HLSXL2DN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

function writeUserData(id, text, day, reminder) {
  const db = getDatabase();
  set(ref(db, "tasks/" + id), {
    id: id,
    text: text,
    day: day,
    reminder: reminder,
  });
}

createApp(App)
  .use(router)
  .mount("#app");
