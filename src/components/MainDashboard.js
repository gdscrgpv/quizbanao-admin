import React from "react";
import BreadCrubmb from "./BreadCrubmb";
import StatCards from "./StatCards";
import QuizzesTable from "./QuizzesTable";

function MainDashboard({quizzes,idQuiz,setIdQuiz,changeID}) {
    console.log("main",idQuiz);
  return (
    <div>
      <BreadCrubmb />

      <div className="container-fluid">
        <StatCards quizzes={quizzes} />
        <QuizzesTable quizzes={quizzes} idQuiz={idQuiz} setIdQuiz={setIdQuiz} changeID={changeID} />
      </div>
    </div>
  );
}

export default MainDashboard;
