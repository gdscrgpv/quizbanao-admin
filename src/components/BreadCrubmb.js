import React from 'react'

export default function BreadCrubmb() {
    return (
        <>
          <div className="page-breadcrumb">
            <div className="row">
              <div className="col-6">
                <h4 className="page-title">Dashboard</h4>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col-6">
                <div className="text-right">
                  <small>Users</small>
                  <h5 className="text-info">3,458</h5>
                </div>
              </div>
            </div>
          </div>  
        </>
    )
}
