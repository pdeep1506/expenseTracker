import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi9p23ps-fWJDzTZ6DXrPKrw13RQAB1JQ",
  authDomain: "rnativeproject-7980e.firebaseapp.com",
  projectId: "rnativeproject-7980e",
  storageBucket: "rnativeproject-7980e.appspot.com",
  messagingSenderId: "791960106438",
  appId: "1:791960106438:web:d59e995b24a081d9e52ec7"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;