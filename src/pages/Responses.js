import React from 'react';
import MainLayout from '../layouts/MainLayout';
import QuizzesTable from '../components/QuizzesTable';

export default function Responses({quizzes,idQuiz,setIdQuiz,changeID}) {
  return (
  <MainLayout>
    <div className="container-fluid">
      <QuizzesTable quizzes={quizzes} idQuiz={idQuiz} setIdQuiz={setIdQuiz} changeID={changeID} />
    </div>
  </MainLayout>
  );
}
