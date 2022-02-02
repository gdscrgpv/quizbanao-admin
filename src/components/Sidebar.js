import React from 'react'

export default function Sidebar() {
    return (
        <>
         <div className="sidebar">
          <div className="logo">
            <a href="/">
              <span className="logo-emblem">Q</span>
              <span className="logo-full">Quiz Banao</span>
            </a>
          </div>
          <ul id="sidebarCookie">
            <li className="spacer" />
            <li className="profile">
              <span className="profile-image">
                <img
                  src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/samkit_jain.JPG"
                  alt="profile"
                />
              </span>
              <span className="profile-name">Samkit Jain</span>
              <span className="profile-info">Quiz Banao Team</span>
            </li>
            <li className="spacer" />
            
            
            
                  <li className="nav-item">
                    <a
                      className="nav-link wave-effect"
                      href="/"
                    >
                      <i className="feather icon-sliders" />
                      <span className="menu-title">Dashboard</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link wave-effect"
                      href="/quizzes"
                    >
                      <i className="feather icon-save" />
                      <span className="menu-title">Quizzes</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link js-darkSidebar wave-effect"
                      href="/responses"
                    >
                      <i className="feather icon-anchor" />
                      <span className="menu-title">Responses</span>
                    </a>
                  </li>
                  
            
           
          </ul>
        </div>   
        </>
    )
}
