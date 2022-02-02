import { collection, doc, addDoc, getDocs, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import firebase from "../firebase";

// Get All Record of given collection name
export async function getCollection(collectionName) {
    const collectionSnapshot = await getDocs(collection(firebase, collectionName));
    const collectionList = collectionSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    return collectionList;
}

// Get Record of given collection name and document name
export async function getDocument(collectionName, docName) {
    const docSnapshot = await getDoc(doc(firebase, collectionName, docName));
    const docData =  docSnapshot.data();
    return docData;
}

// delete Record of given collection name and document name
export async function deleteDocument(collectionName, docName) {
    await deleteDoc(doc(firebase, collectionName, docName))
}

// Add Record of given collection name and document name
export async function addDocument(collectionName, docName, data) {
    await setDoc(doc(firebase, collectionName, docName), data);
}

// Update Record of given collection name and document name
export async function updateDocument(collectionName, docName, data) {
    await setDoc(doc(firebase, collectionName, docName), data);
}

export function yepp() {
    console.log("yepp");
}