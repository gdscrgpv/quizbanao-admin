
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAytJswXmn97zLSQ1WG9nx8OjXJ-fUZqo",
    authDomain: "quiz-banao.firebaseapp.com",
    projectId: "quiz-banao",
    storageBucket: "quiz-banao.appspot.com",
    messagingSenderId: "330849933840",
    appId: "1:330849933840:web:28caba2692831cb6584895",
    measurementId: "G-Z5NBFRSYRG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
export const auth=getAuth(app);
export default db;
