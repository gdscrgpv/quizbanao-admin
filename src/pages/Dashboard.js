import React from "react";
import BreadCrubmb from "../components/BreadCrubmb";
import StatCards from "../components/StatCards";
import QuizzesTable from "../components/QuizzesTable";
import MainLayout from "../layouts/MainLayout";

function MainDashboard({quizzes,idQuiz,setIdQuiz,changeID}) {
    console.log("main",idQuiz);
  return (
    <MainLayout>
      <div className="container-fluid">
        <StatCards quizzes={quizzes} />
        <QuizzesTable quizzes={quizzes} idQuiz={idQuiz} setIdQuiz={setIdQuiz} changeID={changeID} />
      </div>
    </MainLayout>
  );
}

export default MainDashboard;
