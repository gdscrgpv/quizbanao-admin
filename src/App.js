import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import firebase from "./firebase";
import { collection, doc, addDoc, getDocs, setDoc } from "firebase/firestore";
import ViewQueAns from "./pages/ViewQueAns";
import MainDashboard from "./pages/Dashboard";

function App() {
  // Get collection named quizzes from Firebase Firestore
  const [deleteID, setDeleteID] = useState(10);
  const [quizzes, setQuizzes] = useState([]);
  async function getQuizzes() {
    const quizzesSnapshot = await getDocs(collection(firebase, "quizzes"));
    const quizzesList = quizzesSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setQuizzes(quizzesList);
    // To set Data in Doc
    // await setDoc(doc(firebase, "quizzes", "test2212"),{active:true,questions: questions});
  }
  useEffect(() => {
    getQuizzes();
  }, []);
  const changeID = (val) => {
    setDeleteID(val);
  };
  console.log("app", deleteID);
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MainDashboard
              quizzes={quizzes}
              idQuiz={deleteID}
              setIdQuiz={setDeleteID}
              changeID={changeID}
            />
          }
        />
        <Route
          exact
          path="/analysis"
          element={
            <MainDashboard
              quizzes={quizzes}
              idQuiz={deleteID}
              setIdQuiz={setDeleteID}
              changeID={changeID}
            />
          }
        />
        <Route exact path="/view/:id" element={<ViewQueAns />} />
      </Routes>
    </>
  );
}

export default App;
