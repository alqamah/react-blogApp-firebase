// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1oZG6OK5CePSgnlWSNd6FKtXfETD9Yqk",
  authDomain: "react-cn-8064f.firebaseapp.com",
  projectId: "react-cn-8064f",
  storageBucket: "react-cn-8064f.appspot.com",
  messagingSenderId: "377428763654",
  appId: "1:377428763654:web:dcd9fca3d4b2dfdbbe4f87"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
//Export the reference to be used in other files
export const db = getFirestore(app);

/**const firebaseConfig = {
  apiKey: "*********************************",
  authDomain: "*******************************",
  projectId: "***********************",
  storageBucket: "******************************",
  messagingSenderId: "******************",
  appId: "************************"
}; */