import React, { useEffect, useState } from "react";
import { updateDocument, getDocument } from "../helpers/firebase";

function ResponsesEditModal(props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [marks, setMarks] = useState("");
  const [quizId, setQuizId] = useState("");
  const [time_taken, setTime_taken] = useState("");
  useEffect(async () => {
    console.log(`Looking for ${props.id}`);
    const data = await getDocument("users", props.id);
    setFullName(data.fullName);
    setEmail(data.email);
    setMarks(data.marks);
    setQuizId(data.quizId);
    setTime_taken(data.time_taken);
  }, [props.id]);

  async function updateData() {
    const formdata = {
      fullName,
      email,
      marks,
      quizId,
      time_taken,
    };
    console.log("Updating Data......");
    await updateDocument("users", props.id, formdata);
    console.log("Data Updated......");
  }
    
  

  return (
    <>
      <div
        className="modal fade"
        id="responsesEditModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                View Response
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">              
              <form>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => {setFullName(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="marks">Marks</label>
                  <input
                    type="text"
                    className="form-control"
                    id="marks"
                    placeholder="Marks"
                    value={marks}
                    onChange={(e) => {setMarks(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="quizId">Quiz Id</label>
                  <input
                    type="text"
                    className="form-control"
                    id="quizId"
                    placeholder="Quiz Id"
                    value={quizId}
                    onChange={(e) => {setQuizId(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time_taken">Time Taken</label>
                  <input
                    type="text"
                    className="form-control"
                    id="time_taken"
                    placeholder="Time Taken"
                    value={time_taken}
                    onChange={(e) => {setTime_taken(e.target.value)}}
                  />
                </div>
              </form>
              
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => updateData()}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResponsesEditModal;
