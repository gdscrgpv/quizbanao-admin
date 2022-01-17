import React from 'react'

export default function StatCards(props) {
    return (
        <>
         <div className="row">
              {/* column */}
              <div className="col-sm-12 col-lg-4">
                <div className="card card-hover">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="mr-4">
                        <small>Total Quizzes</small>
                        <h4 className="mb-0">{props.quizzes.length}</h4>
                      </div>
                      <div className="chart ml-auto">asdfadf</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* column */}
              <div className="col-sm-12 col-lg-4">
                <div className="card card-hover bg-red">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="mr-4">
                        <small>InActive Quizzes</small>
                        <h4 className="mb-0">
                          {props.quizzes.filter(quiz => !quiz.active).length}
                          </h4>

                      </div>
                      <div className="chart ml-auto">asdfadf</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* column */}
              <div className="col-sm-12 col-lg-4">
                <div className="card card-hover bg-green">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="mr-4">
                        <small>Active Quizzes</small>
                        <h4 className="mb-0">
                          {props.quizzes.filter(quiz => quiz.active).length}</h4>
                      </div>
                      <div className="chart ml-auto">asdfadf</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>   
        </>
    )
}
