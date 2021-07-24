import firebase from "firebase/app";
var firebaseConfig = {
  apiKey: "AIzaSyC589FCtN2ObZzfHg7jS40piooPiZxGmeo",
  authDomain: "jhc-entourage.firebaseapp.com",
  databaseURL:
    "https://jhc-entourage-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jhc-entourage",
  storageBucket: "jhc-entourage.appspot.com",
  messagingSenderId: "289958309120",
  appId: "1:289958309120:web:1e1366b2a67914604497e5",
  measurementId: "G-VXD302WG03",
};

// var firebaseConfig = {
//   apiKey: "AIzaSyBecfMO55oWZLQ5QqdaVivDBnW29bnD9_k",
//   authDomain: "quiz-1e08d.firebaseapp.com",
//   databaseURL:
//     "https://quiz-1e08d-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "quiz-1e08d",
//   storageBucket: "quiz-1e08d.appspot.com",
//   messagingSenderId: "724541893167",
//   appId: "1:724541893167:web:1fd97ec3b7d5af3df9b4da",
//   measurementId: "G-SH7FVMV004",
// };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebaseConfig;
