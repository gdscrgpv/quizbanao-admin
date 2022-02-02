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

  const inputStyle = {
    padding: "10px",
    border: "none",
    borderBottom: "2px solid #777",
    outline: "none",
    fontSize: "1.4em",
    width: "100%",
  };

  const updateQuestions = (e, key, property) => {
    const newQuestions = { ...Questions };
    newQuestions[key][property] = e.target.value;
    setQuestions(newQuestions);
  };

  const updateOptions = (e, key, option) => {
    const newQuestions = { ...Questions };
    newQuestions[key]["options"][option] = e.target.value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    const newQuestions = {...Questions};
    newQuestions[`${Object.keys(Questions).length}`] = {
        question: "",
        options: ["", "", "", ""]
    };
    setQuestions(newQuestions);
    
    };
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
            ...inputStyle,
            width: "85%",
          }}
          onChange={(e) => setId(e.target.value)}
        />
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck1"
            onChange={() => setActive(!active)}
            checked={active}
          />
          <label class="custom-control-label" for="customCheck1">
            {active ? "Active" : "InActive"}
          </label>
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
              <input
                style={inputStyle}
                value={Questions[key].text}
                onChange={(e) => updateQuestions(e, key, "text")}
              />
              <hr />
              <div className="row">
                <div className="col-md-6">
                  {Object.keys(Questions[key].options).map(
                    (optionKey, optionIndex) => (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <input
                          type="radio"
                          name={"option" + key}
                          value={optionKey}
                          style={{
                            transform: "scale(1.5)",
                            width: "10%",
                          }}
                          checked={optionKey === Questions[key].answer}
                          onChange={(e) => updateQuestions(e, key, "answer")}
                        />
                        <input
                          key={"options" + optionKey}
                          style={{
                            ...inputStyle,
                            width: "90%",
                            display: "inline-block",
                            fontSize: "1em",
                            marginBottom: "12px",
                            borderRadius: "5px",
                            backgroundColor:
                              Questions[key].answer === optionKey
                                ? "rgb(131, 234, 155)"
                                : "#eee",
                          }}
                          value={Questions[key].options[optionKey]}
                          onChange={(e) => updateOptions(e, key, optionKey)}
                        />
                      </div>
                    )
                  )}
                </div>
                <div className="col-md-6">
                  <input
                    style={{
                      ...inputStyle,
                      fontSize: "1em",
                    }}
                    value={Questions[key].imageUrl}
                    onChange={(e) => updateQuestions(e, key, "imageUrl")}
                  />
                  <img
                    src={Questions[key].imageUrl}
                    style={{
                      maxHeight: "300px",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
          <hr />
          <div
          style={{ 
            display: "flex",
            justifyContent: "center",
          }}
          >
            <button
              className="btn btn-lg m-auto btn-primary"
              onClick={() => addQuestion()}
            >
              Update Questions
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
