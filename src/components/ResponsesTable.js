import React, { useState, useEffect }from "react";
import DeleteModal from "./DeleteModal";
import ResponsesEditViewModal from "./ResponsesEditModal";
import ResponsesViewModal from "./ResponsesViewModal";
export default function AnalysisTable(props) {
  const [delId , setDelId] = useState('');
  const [responseId , setResponseId] = useState('')
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
                    <select className="custom-select">
                      <option value={0} selected>
                        Monthly
                      </option>
                      <option value={1}>Daily</option>
                      <option value={2}>Weekly</option>
                      <option value={3}>Yearly</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* title */}
            </div>
            <div className="table-responsive">
              <table className="table v-middle">
                <thead>
                  <tr className="bg-light">
                    <th className="border-top-0">Sno.</th>
                    <th className="border-top-0">Name</th>
                    <th className="border-top-0">Email</th>
                    <th className="border-top-0">Marks</th>
                    <th className="border-top-0">Quiz</th>
                    <th className="border-top-0">Time</th>
                    <th className="border-top-0">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {props.responses.map((quiz, index) => {
                    return (
                      <>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{quiz.fullName}</td>
                          <td>{quiz.email}</td>
                          <td>{quiz.marks}</td>
                          <td>{quiz.quizId}</td>
                          <td>{Math.round(quiz.time_taken)}</td>
                          <td>
                            <a
                              href="#"
                              role="button"
                              type="button"
                              data-toggle="modal"
                              data-target="#responsesViewModal"
                              onClick={() => {
                                setResponseId(quiz.id);
                              }}
                              className="btn btn-outline-primary"
                            >
                              
                              <i className="mdi mdi-eye" />
                            </a>
                            <a 

                              href="#"
                              role="button"
                              type="button"
                              data-toggle="modal"
                              data-target="#responsesEditModal"
                              onClick={() => {
                                setResponseId(quiz.id);
                              }}                            
                            className="btn btn-outline-success">
                              <i className="mdi mdi-pencil" />
                            </a>

                            <a
                              href="#"
                              role="button"
                              type="button"
                              data-toggle="modal"
                              data-target="#deleteModal"
                              onClick={() => {
                                setDelId(quiz.id);
                              }}
                              className="btn btn-outline-danger"
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
              <DeleteModal collection="users" id={delId} />
              <ResponsesViewModal id={responseId} />
              <ResponsesEditViewModal id={responseId} />
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
}
