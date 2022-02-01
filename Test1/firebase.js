const firebaseConfig = {
  apiKey: "AIzaSyCXwhRFIHPA6QZYyS2hsynBBIeyWiL9X7E",
  authDomain: "to-do-live-d32f2.firebaseapp.com",
  projectId: "to-do-live-d32f2",
  storageBucket: "to-do-live-d32f2.appspot.com",
  messagingSenderId: "164616315710",
  appId: "1:164616315710:web:b756cb4c8cd29e1921026f",
  measurementId: "G-1W66WVSZLZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();