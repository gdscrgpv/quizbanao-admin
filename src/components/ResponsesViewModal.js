import React, { useEffect, useState } from "react";
import {deleteDocument} from '../helpers/firebase';

function ResponsesViewModal(props) {
  async function deleteDoc(){
    await deleteDocument(props.collection, props.id);
    window.location.reload();
  }
  return (
    <>
       <div
        className="modal fade"
        id="responsesViewModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Delete
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
              Are you sure You want to delete <b>{props.id}</b> from collection <b>{props.collection}</b>? 
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-danger" 
               data-dismiss="modal"
              onClick={()=>{deleteDoc()}}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResponsesViewModal;
