import { collection, doc, addDoc, getDocs, setDoc } from "firebase/firestore";

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
    const docSnapshot = await doc(firebase, collectionName, docName);
    const docData = docSnapshot.data();
    return docData;
}

// delete Record of given collection name and document name
export async function deleteDocument(collectionName, docName) {
    await doc(firebase, collectionName, docName).delete();
}

// Add Record of given collection name and document name
export async function addDocument(collectionName, docName, data) {
    await addDoc(firebase, collectionName, docName, data);
}

// Update Record of given collection name and document name
export async function updateDocument(collectionName, docName, data) {
    await setDoc(firebase, collectionName, docName, data);
}
