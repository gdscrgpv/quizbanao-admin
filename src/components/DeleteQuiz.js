import React, { useEffect, useState } from "react";


function DeleteQuiz(props) {
    console.log("d",props)
  return (
    <>
      {/* // <!-- Button trigger modal --> */}
      {/* <a type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
      Launch demo modal
    </a> */}

      {/* <a
        href="#"
        role="button"
        type="button"
        data-toggle="modal"
        data-target={"#exampleModalCenter-"+props.d
         }
        className="btn btn-outline-danger"
      >
        <i className="mdi mdi-trash-can" />
      </a> */}
      {/* // <!-- Modal --> */}

      <div
        className="modal fade"
        id={"exampleModalCenter"}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modal title
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
              Are you sure You want to delete? {props.d}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" 
               data-dismiss="modal"
              onClick={()=>{props.delFunc(props.d)}}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteQuiz;
