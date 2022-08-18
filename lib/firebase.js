
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCYNGPrTmRIqCrilsKKZ8Ad6_v-Kh15ntM",
  authDomain: "ecommerce-native-app-b8948.firebaseapp.com",
  projectId: "ecommerce-native-app-b8948",
  storageBucket: "ecommerce-native-app-b8948.appspot.com",
  messagingSenderId: "757619187880",
  appId: "1:757619187880:web:b6d19cc1389bba1760229d"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
