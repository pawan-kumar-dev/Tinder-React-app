import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDqvHOildNyYfKPuzcBFsQT0NpQVRCu_Wk",
  authDomain: "tinder-react-clone-77956.firebaseapp.com",
  databaseURL: "https://tinder-react-clone-77956.firebaseio.com",
  projectId: "tinder-react-clone-77956",
  storageBucket: "tinder-react-clone-77956.appspot.com",
  messagingSenderId: "1006808954924",
  appId: "1:1006808954924:web:2fe9ba239d3667ad13b989"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
