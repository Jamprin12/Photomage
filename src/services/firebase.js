import { storage as st, firestore, initializeApp, analytics } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-1KEzy2lHoPayIVTj3tezT3KDwtEPeeY",
  authDomain: "photomage-978ac.firebaseapp.com",
  databaseURL: "https://photomage-978ac.firebaseio.com",
  projectId: "photomage-978ac",
  storageBucket: "photomage-978ac.appspot.com",
  messagingSenderId: "96254698681",
  appId: "1:96254698681:web:78b2756c0723e39835e768",
  measurementId: "G-9D55HGXVLB",
};
// Initialize Firebase
initializeApp(firebaseConfig);
analytics();

const storage = st();
const db = firestore();

export { storage, db };
