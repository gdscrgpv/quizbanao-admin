import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocument } from "../helpers/firebase";
import MainLayout from "../layouts/MainLayout";

export default function ViewQuiz() {
  const [Questions, setQuestions] = useState({});
  const [active, setActive] = useState(false);
  const params = useParams();
  const id = params.id;
  useEffect(async () => {
    const data = await getDocument("quizzes", id);
    setQuestions(data.questions);
    setActive(data.active);
    console.log(data);
  }, []);
  return (
    <MainLayout pageName={"View Quiz " + id}>
      <div className="container">
        {active ? (
          <h2 className="text-success">Active</h2>
        ) : (
          <h2 className="text-danger"></h2>
        )}

        <hr />
        <div>
          {Object.keys(Questions).map((key,question) => (
            <div key={key}>
              <h3>{key}</h3>
              </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
