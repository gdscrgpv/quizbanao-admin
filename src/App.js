import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import firebase from "./firebase";
import { collection, doc, addDoc, getDocs, setDoc } from "firebase/firestore";
import ViewQueAns from "./pages/ViewQueAns";
import Dashboard from "./pages/Dashboard";
import Responses from "./pages/Responses";
import Quizzes from "./pages/Quizzes";
import ViewQuiz from "./pages/ViewQuiz";
import EditQuiz from "./pages/EditQuiz";

function App() {
  // Get collection named quizzes from Firebase Firestore
  const [deleteID, setDeleteID] = useState(10);
  const [quizzes, setQuizzes] = useState([]);
  const [responses, setResponses] = useState([]);

  async function getQuizzes() {
    const quizzesSnapshot = await getDocs(collection(firebase, "quizzes"));
    const quizzesList = quizzesSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setQuizzes(quizzesList);
    // To set Data in Doc
    // await setDoc(doc(firebase, "quizzes", "test2212"),{active:true,questions: questions});
  }
  async function getResponses() {
    const responsesSnapshot = await getDocs(collection(firebase, "users"));
    const responsesList = responsesSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    setResponses(responsesList);
  }
  useEffect(() => {
    getQuizzes();
    getResponses();
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
            <Dashboard
              quizzes={quizzes}
              idQuiz={deleteID}
              setIdQuiz={setDeleteID}
              changeID={changeID}
            />
          }
        />
        <Route
          exact
          path="/responses"
          element={
            <Responses />
          }
        />
        <Route
          exact
          path="/quizzes"
          element={
            <Quizzes />
          }
        />
        <Route exact path="/view/:id" element={<ViewQuiz />} />
        <Route exact path="/edit/:id" element={<EditQuiz />} />
      </Routes>
    </>
  );
}

export default App;
