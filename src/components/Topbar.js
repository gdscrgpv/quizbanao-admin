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
                    {/* Profile Menu */}
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
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li>
                          <a
                            href="/account/profile"
                            className="animsition-link dropdown-item wave-effect"
                          >
                            <i className="feather icon-user" /> Profile
                          </a>
                        </li>
                        <li>
                          <a
                            href="/account/billing"
                            className="animsition-link dropdown-item wave-effect"
                          >
                            <i className="feather icon-dollar-sign" /> Billing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/account/settings"
                            className="animsition-link dropdown-item wave-effect"
                          >
                            <i className="feather icon-settings" /> Settings
                          </a>
                        </li>
                        <li>
                          <a
                            href="/login"
                            className="animsition-link dropdown-item wave-effect"
                          >
                            <i className="feather icon-log-in" /> Logout
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Offcanvas Menu */}
                    <li>
                      <a href="#" className="btn wave-effect offcanvas-toggle">
                        <i className="feather icon-settings" />
                      </a>
                    </li>
                    {/* Notification Menu */}
                    <li className="btn-group notification">
                      <a
                        href="javascript:;"
                        className="btn dropdown-toggle wave-effect"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="feather icon-bell">
                          <span className="notification-count">27</span>
                        </i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li>
                          <a href="#" className="wave-effect">
                            <span className="avatar">
                              <img
                                src="https://bootadmin.org/images/demo/profile.png"
                                alt="Mr. Chu"
                              />
                            </span>
                            <span className="name">Jas Gillionaire</span>
                            <span className="message">
                              Like your post: “Contact Form 7 Multi-Step”
                            </span>
                            <span className="time">45 min</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="wave-effect">
                            <span className="avatar">
                              <img
                                src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/samkit_jain.JPG"
                                alt="Andrew"
                              />
                            </span>
                            <span className="name">Gurinder Singh</span>
                            <span className="message">
                              Like your post: “Contact Form 7 Multi-Step”
                            </span>
                            <span className="time">45 min</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="wave-effect">
                            <span className="avatar">
                              <img
                                src="https://bootadmin.org/images/demo/profile.png"
                                alt="Mr. Chu"
                              />
                            </span>
                            <span className="name">Andrew the Canadian</span>
                            <span className="message">
                              Like your post: “Contact Form 7 Multi-Step”
                            </span>
                            <span className="time">45 min</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="wave-effect">
                            <span className="avatar">
                              <img
                                src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/samkit_jain.JPG"
                                alt="Mr. Chu"
                              />
                            </span>
                            <span className="name">Artsy Shohan</span>
                            <span className="message">
                              Like your post: “Contact Form 7 Multi-Step”
                            </span>
                            <span className="time">45 min</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="wave-effect">
                            <span className="avatar">
                              <img
                                src="https://bootadmin.org/images/demo/profile.png"
                                alt="Mr. Chu"
                              />
                            </span>
                            <span className="name">Sazzad Shammad</span>
                            <span className="message">
                              Like your post: “Contact Form 7 Multi-Step”
                            </span>
                            <span className="time">45 min</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/notification"
                            className="dropdown-item all-notifications wave-effect"
                          >
                            See more messages
                            <i className="feather icon-arrow-down" />
                          </a>
                        </li>
                      </ul>
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
