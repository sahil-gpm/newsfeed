import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyADt8A10ad1Dzzn4GBRpKaHtcRuFczfC2I",
  authDomain: "newsfeed-cd37a.firebaseapp.com",
  projectId: "newsfeed-cd37a",
  storageBucket: "newsfeed-cd37a.appspot.com",
  messagingSenderId: "883666310973",
  appId: "1:883666310973:web:2681f0ab3203d3c91dd754"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()
export {app,auth,db}
