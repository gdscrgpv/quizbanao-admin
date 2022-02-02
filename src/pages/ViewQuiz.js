import React from 'react';
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout"; 

export default function ViewQuiz() {
    
  const params = useParams();
  const id = params.id;
  return (
    <MainLayout pageName={"View Quiz "+id}>
      <div className="container-fluid">
          Hello World
      </div>
    </MainLayout>
    );
}
