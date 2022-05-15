import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBOuP6C0i_AE3fP-9EhRntC8zk1s2t0_RI",
  authDomain: "team-voting-p67.firebaseapp.com",
  projectId: "team-voting-p67",
  storageBucket: "team-voting-p67.appspot.com",
  messagingSenderId: "754936788551",
  appId: "1:754936788551:web:ea5c666ebd434737046362"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
