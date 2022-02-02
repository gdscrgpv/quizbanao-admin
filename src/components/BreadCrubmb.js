import React from 'react'

export default function BreadCrubmb(props) {
    return (
        <>
          <div className="page-breadcrumb">
            <div className="row">
              <div className="col-6">
                <h4 className="page-title">{props.pageName ?? 'Dashboard'}</h4>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {props.pageName ?? 'Dashboard'}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>  
        </>
    )
}
