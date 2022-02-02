import React, { useState, useEffect } from "react";
import DeleteModal from "./DeleteModal";

export default function QuizzesTable(props) {
  const [delId , setDelId] = useState('');
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <div className="d-md-flex align-items-center">
                <div>
                  <h3 className="card-title">Quizzes</h3>
                </div>
                <div className="ml-auto">
                  <div className="dl">
                    <a href="/add/quiz" type="button" className="btn btn-primary">
                      <i className="mdi mdi-plus" />  Add Quiz
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table v-middle">
                <thead>
                  <tr className="bg-light">
                    <th className="border-top-0">Sno.</th>
                    <th className="border-top-0">ID</th>
                    <th className="border-top-0">Active</th>
                    <th className="border-top-0">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {props.quizzes.map((quiz, index) => {
                    return (
                      <>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{quiz.id}</td>
                          <td>{quiz.active ? "Active" : "InActive"}</td>
                          <td>
                            <a
                              href={"/view/"+quiz.id}
                              className="btn btn-outline-primary"
                              onClick={()=>{props.changeID(quiz.id);
                              console.log("view",props.idQuiz)}}
                            >
                              
                              <i className="mdi mdi-eye" />
                            </a>
                            <a href={"/view/"+quiz.id} className="btn btn-outline-success">
                              <i className="mdi mdi-pencil" />
                            </a>

                            <a
                              href={"/edit/"+quiz.id}
                              role="button"
                              type="button"
                              data-toggle="modal"
                              data-target="#deleteModal"
                              className="btn btn-outline-danger"
                              onClick={() => {
                                setDelId(quiz.id);
                              }}
                            >
                              <i className="mdi mdi-trash-can" />
                            </a>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <DeleteModal id={delId} collection='quizzes' />
            
          </div>
        </div>
      </div>
    </>
    
  );
}
