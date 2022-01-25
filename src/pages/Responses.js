import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ResponsesTable from '../components/ResponsesTable';

export default function Responses({quizzes,idQuiz,setIdQuiz,changeID}) {
  return (
  <MainLayout>
    <div className="container-fluid">
      <ResponsesTable quizzes={quizzes} idQuiz={idQuiz} setIdQuiz={setIdQuiz} changeID={changeID} />
    </div>
  </MainLayout>
  );
}
