import React from 'react';
import MainLayout from '../layouts/MainLayout';
import StatCards from '../components/StatCards';
import QuizzesTable from '../components/QuizzesTable';

export default function Responses({quizzes,idQuiz,setIdQuiz,changeID}) {
  return (
  <MainLayout>
    <div className="container-fluid">
      <StatCards quizzes={quizzes} />
      <QuizzesTable quizzes={quizzes} idQuiz={idQuiz} setIdQuiz={setIdQuiz} changeID={changeID} />
    </div>
  </MainLayout>
  );
}
