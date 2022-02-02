import React from 'react'

export default function Topbar() {
    return (
        <>
            <div className="topbar">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 hidden-xs">
                  <div className="logo">
                    <a href="/">
                      <span className="logo-emblem">
                       Q
                      </span>
                      <span className="logo-full">Quiz Banao</span>
                    </a>
                  </div>
                  <a href="#" className="menu-toggle wave-effect">
                    <i className="feather icon-menu" />
                  </a>
                </div>
                <div className="col-md-7 text-right">
                  <ul>
                    <li className="btn-group user-account">
                      <a
                        href="javascript:;"
                        className="btn dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div className="user-content">
                          <div className="user-name">Samkit Jain</div>
                          <div className="user-plan">Quiz Banao Team</div>
                        </div>
                        <div className="avatar">
                          <img
                            src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/samkit_jain.JPG"
                            alt="profile"
                          />
                        </div>
                      </a>
                    </li>
                 
                  
                    <li className="mobile-menu-toggle">
                      <a href="#" className="menu-toggle wave-effect">
                        <i className="feather icon-menu" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>   
        </>
    )
}
