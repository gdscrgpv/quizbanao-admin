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
          <h2 className="text-success">{id} - Active</h2>
        ) : (
          <h2 className="text-danger">{id} - InActive</h2>
        )}

        <hr />
        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}>
          {Object.keys(Questions).map((key,index) => (
            <div style={{
              padding: "5%",
              boxShadow: "0px 0px 10px #ccc",
              borderRadius: "10px",
              margin: "10px",
              backgroundColor: "#fff"
            }} key={key}>
              <span style={{
                fontSize: "1.3em",
                fontWeight: "bold",
                color: "#444"
              }}>{index+1+") "+Questions[key].text}</span>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  {Object.keys(Questions[key].options).map((optionKey,optionIndex) => (
                    <div key={"options"+optionKey}
                    style={{
                      padding: "5%",
                      borderRadius: "5px",
                      marginTop: "12px",
                      backgroundColor: Questions[key].answer === optionKey ? "rgb(131, 234, 155)" : "#ddd"
                    }}>
                      {Questions[key].options[optionKey]}
                      </div>
                  ))}
                  </div>
                <div className="col-md-6">
              <img src={Questions[key].imageUrl} alt="" style={{
                maxHeight: "300px",
              }} />
              </div>
              </div>
              </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
