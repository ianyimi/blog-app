import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCROPhbfQTXOeHRFgcpMegY4fwqk07BcfM",
  authDomain: "ianyimi-blog-app.firebaseapp.com",
  databaseURL: "https://ianyimi-blog-app-default-rtdb.firebaseio.com",
  projectId: "ianyimi-blog-app",
  storageBucket: "ianyimi-blog-app.appspot.com",
  messagingSenderId: "289401383556",
  appId: "1:289401383556:web:f2ebfbc948623a02cf70d1"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
