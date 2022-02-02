import React, { useEffect, useState } from "react";
import {getDocument} from '../helpers/firebase';

function ResponsesEditModal(props) {
  const [responseData, setResponseData] = useState(null);
  useEffect(async () => {
    console.log(`Looking for ${props.id}`);
    const data = await getDocument('users', props.id);
    console.log("Response Data: " ,data);
    setResponseData(data);
  }, [props.id]);

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
              
              {responseData &&
                  <table className="table table-borderless">
                    <tr>
                      <th>Name</th>
                      <td>{responseData.fullName}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{responseData.email}</td>
                    </tr>
                    <tr>
                      <th>Marks</th>
                      <td>{responseData.marks}</td>
                    </tr>
                    <tr>
                      <th>Quiz Id</th>
                      <td>{responseData.quizId}</td>
                    </tr>
                    <tr>
                      <th>Time Taken</th>
                      <td>{responseData.time_taken}</td>
                    </tr>
                  </table>
  }
               </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResponsesEditModal;
