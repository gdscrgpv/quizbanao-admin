import React from 'react'

export default function StatCards() {
    return (
        <>
         <div className="row">
              {/* column */}
              <div className="col-sm-12 col-lg-4">
                <div className="card card-hover">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="mr-4">
                        <small>Wallet Balance</small>
                        <h4 className="mb-0">$3,567.53</h4>
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
                        <small>Wallet Balance</small>
                        <h4 className="mb-0">$3,567.53</h4>
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
                        <small>Wallet Balance</small>
                        <h4 className="mb-0">$3,567.53</h4>
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
