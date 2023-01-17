import { initializeApp } from 'firebase/app';
import { getAuth, 
        signInWithRedirect, 
        signInWithPopup, 
        GoogleAuthProvider, 
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyZiBlzSi2oqB7JhbivA2moyBV0dUhigc",
    authDomain: "crown-shop-27ccc.firebaseapp.com",
    projectId: "crown-shop-27ccc",
    storageBucket: "crown-shop-27ccc.appspot.com",
    messagingSenderId: "859282838966",
    appId: "1:859282838966:web:4b174db32d417ddb69dd17"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);