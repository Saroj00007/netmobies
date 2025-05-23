// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCinu8k3bYFevUraMWNnMY1iOvXV9RNkp4",
  authDomain: "netmobies.firebaseapp.com",
  projectId: "netmobies",
  storageBucket: "netmobies.firebasestorage.app",
  messagingSenderId: "963282320808",
  appId: "1:963282320808:web:81493936ae1d07fb72f19d",
  measurementId: "G-4HQRXMJZ69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);