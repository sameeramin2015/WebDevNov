var firebaseConfig = {
    apiKey: "AIzaSyCXwhRFIHPA6QZYyS2hsynBBIeyWiL9X7E",
    authDomain: "to-do-live-d32f2.firebaseapp.com",
    projectId: "to-do-live-d32f2",
    storageBucket: "to-do-live-d32f2.appspot.com",
    messagingSenderId: "164616315710",
    appId: "1:164616315710:web:2cf5c6e7b246eda821026f",
    measurementId: "G-S91TXZL3EX"
  };

  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.getAnalytics();
    const db = getFirestore();
