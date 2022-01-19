import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import firebase from "./firebase";
import { collection, doc, addDoc, getDocs, setDoc } from "firebase/firestore";
import Topbar from "./components/Topbar";
import AsideBAr from "./components/AsideBAr";
import Sidebar from "./components/Sidebar";
import BreadCrubmb from "./components/BreadCrubmb";
import StatCards from "./components/StatCards";
import QuizzesTable from "./components/QuizzesTable";
import Footer from "./components/Footer";
import questions from "./questions";

function App() {
  // Get collection named quizzes from Firebase Firestore
 const [quizzes, setQuizzes] = useState([]);
  async function getQuizzes() {
    const quizzesSnapshot = await getDocs(collection(firebase, "quizzes"));
    const quizzesList = quizzesSnapshot.docs.map(doc => {return {id: doc.id,...doc.data()}});
    setQuizzes(quizzesList);
    // To set Data in Doc
    // await setDoc(doc(firebase, "quizzes", "test1901"),{active:true,questions: questions});
  }
  useEffect(() => {
  getQuizzes();
  }, []);

  return (
    <>
      <div id="dashboardPage">
        <Topbar />
        <Sidebar />
        <main>
          <BreadCrubmb />

          <div className="container-fluid">
            <StatCards quizzes={quizzes}/>
            <QuizzesTable quizzes={quizzes}/>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
