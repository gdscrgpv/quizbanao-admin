import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocument } from "../helpers/firebase";
import MainLayout from "../layouts/MainLayout";

export default function EditQuiz() {
  const [Questions, setQuestions] = useState({});
  const [active, setActive] = useState(false);
  const params = useParams();
  const [id, setId] = useState(params.id);
  useEffect(async () => {
    const data = await getDocument("quizzes", id);
    setQuestions(data.questions);
    setActive(data.active);
    console.log(data);
  }, []);

  return (
    <MainLayout pageName={"View Quiz " + id}>
      <div
        className="container"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          value={id}
          style={{
            width: "85%",
            padding: "10px",
            border: "none",
            borderBottom: "2px solid #777",
            outline: "none",
            fontSize: "1.4em",
          }}
        />
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck1"
            onChange={() => setActive(!active)}
            checked={active}
          />
          <label class="custom-control-label" for="customCheck1">{active ? "Active" : "InActive"}</label>
        </div>
        <hr />
        <div>
          {Object.keys(Questions).map((key, index) => (
            <div
              style={{
                padding: "5%",
                boxShadow: "0px 0px 10px #ccc",
                borderRadius: "10px",
                margin: "10px",
                backgroundColor: "#fff",
              }}
              key={key}
            >
              <span
                style={{
                  fontSize: "1.3em",
                  fontWeight: "bold",
                  color: "#444",
                }}
              >
                {index + 1 + ") " + Questions[key].text}
              </span>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  {Object.keys(Questions[key].options).map(
                    (optionKey, optionIndex) => (
                      <div
                        key={"options" + optionKey}
                        style={{
                          padding: "5%",
                          borderRadius: "5px",
                          marginTop: "12px",
                          backgroundColor:
                            Questions[key].answer === optionKey
                              ? "rgb(131, 234, 155)"
                              : "#ddd",
                        }}
                      >
                        {Questions[key].options[optionKey]}
                      </div>
                    )
                  )}
                </div>
                <div className="col-md-6">
                  <img
                    src={Questions[key].imageUrl}
                    alt=""
                    style={{
                      maxHeight: "300px",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
