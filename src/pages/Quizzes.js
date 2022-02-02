import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import QuizzesTable from "../components/QuizzesTable";
import { getCollection } from "../helpers/firebase";

export default function Quizzes() {
  const [Quizzes, setQuizzes] = useState([]);
  async function getQuizzes() {
    setQuizzes(await getCollection("quizzes"));
  }
  useEffect(() => {
    getQuizzes();
  }, []);

  return (
    <MainLayout pageName="Quizzes">
      <div className="container-fluid">
        <QuizzesTable quizzes={Quizzes} />
      </div>
    </MainLayout>
  );
}
