import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyD0b-DyZOfDCSzOg2brbJNbgKQX9w8CRxk",
  authDomain: "fir-prc-e67be.firebaseapp.com",
  databaseURL: "https://fir-prc-e67be-default-rtdb.firebaseio.com",
  projectId: "fir-prc-e67be",
  storageBucket: "fir-prc-e67be.appspot.com",
  messagingSenderId: "875758586937",
  appId: "1:875758586937:web:570c60b43839afa52451e8",
  measurementId: "G-B4Y3EK42SY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


async function Register  (userInfo) {
  
try{
  const prc = getAuth(app)
  const {email , password , fullname , age} = userInfo
  await createUserWithEmailAndPassword(prc, email, password);
  return addDoc(collection(db , "users"), {email , fullname , age});}
  
catch(e)
  {e.message}
};


function Login (email , password) {
  return signInWithEmailAndPassword(auth, email, password)
}

export {
  Register ,
  Login
}
