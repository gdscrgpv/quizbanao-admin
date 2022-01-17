
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwN25R7P0f66ihGlefd6ffcI84d00hPj0",
    authDomain: "test-project-973e5.firebaseapp.com",
    databaseURL: "https://test-project-973e5-default-rtdb.firebaseio.com",
    projectId: "test-project-973e5",
    storageBucket: "test-project-973e5.appspot.com",
    messagingSenderId: "292453911301",
    appId: "1:292453911301:web:75c239882693d83d22456c"
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

export default db;
