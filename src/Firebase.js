import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAlTJrFIOldYWpypxHmSdARQ97Ylf_UynU",
    authDomain: "personal-website-7263c.firebaseapp.com",
    projectId: "personal-website-7263c",
    storageBucket: "personal-website-7263c.appspot.com",
    messagingSenderId: "37532546764",
    appId: "1:37532546764:web:200bb8f806bd1baec73469",
    measurementId: "G-PXDH3KZRM1"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;