import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

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

async function Register(userInfo) {
  const { email, password, age, fullname } = userInfo;
  console.log('Registering user with info:', userInfo);

  if (!email || !password || !age || !fullname) {
    throw new Error('user information');
  }

  await createUserWithEmailAndPassword(auth, email, password);
  return addDoc(collection(db, "users"), { email, fullname, age });
}

function Login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export {
  Register,
  Login
}

