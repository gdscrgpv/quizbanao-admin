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
            <li className="title">
              <i className="feather icon-more-horizontal" />
              <span className="menu-title">Main</span>
            </li>
            <li className="nav-item">
              <a
                className="nav-link wave-effect collapsed wave-effect"
                data-parent="#sidebarCookie"
                data-toggle="collapse"
                href="#navDashboard"
                aria-expanded="false"
                aria-controls="page-dashboards"
              >
                <i className="feather icon-grid" />
                <span className="menu-title">Dashboard</span>
                <i className="feather icon-chevron-down down-arrow" />
              </a>
              <div className="collapse" id="navDashboard">
                <ul className="flex-column sub-menu">
                  <li className="nav-item">
                    <a
                      className="nav-link wave-effect"
                      href="http://bootadmin.org/"
                    >
                      <i className="feather icon-layout" />
                      <span className="menu-title">Dashboard</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link wave-effect"
                      href="http://bootadmin.org/"
                    >
                      <i className="feather icon-shopping-bag" />
                      <span className="menu-title">eCommerce</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link js-darkSidebar wave-effect"
                      href="javascript: void();"
                    >
                      <i className="feather icon-shopping-bag" />
                      <span className="menu-title">Toggle Sidebar Color</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link wave-effect collapsed"
                data-parent="#sidebarCookie"
                data-toggle="collapse"
                href="#navPageLayouts"
                aria-expanded="false"
                aria-controls="page-layouts"
              >
                <i className="feather icon-sidebar" />
                <span className="menu-title">Page Layouts</span>
                <i className="feather icon-chevron-down down-arrow" />
              </a>
              <div className="collapse" id="navPageLayouts">
                <ul className="flex-column sub-menu">
                  <li className="nav-item">
                    <a
                      className="nav-link wave-effect"
                      href="http://bootadmin.org/"
                    >
                      <i className="feather icon-layout" />
                      <span className="menu-title">Default</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link wave-effect"
                      href="http://bootadmin.org/boxed"
                    >
                      <i className="feather icon-bold" />
                      <span className="menu-title">Boxed</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link wave-effect"
                      href="http://bootadmin.org/horizontal"
                    >
                      <i className="feather icon-pause" />
                      <span className="menu-title">Horizontal Menu</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link wave-effect"
                      href="http://bootadmin.org/boxedhorizontal"
                    >
                      <i className="feather icon-copy" />
                      <span className="menu-title">Boxed &amp; Horizontal</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link wave-effect collapsed"
                data-parent="#sidebarCookie"
                data-toggle="collapse"
                href="#navElements"
                aria-expanded="false"
                aria-controls="page-elements"
              >
                <i className="feather icon-layout" />
                <span className="menu-title">Elements</span>
                <i className="feather icon-chevron-down down-arrow" />
              </a>
              <div className="collapse" id="navElements">
                <ul className="flex-column sub-menu">
                  <li className="nav-item">
                    <a
                      className="nav-link wave-effect"
                      href="http://bootadmin.org/elements/bootstrap"
                    >
                      <i className="feather icon-bold" />
                      <span className="menu-title">Bootstrap</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link wave-effect"
                      href="http://bootadmin.org/elements/gallery"
                    >
                      <i className="feather icon-image" />
                      <span className="menu-title">Gallery</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link wave-effect"
                      href="http://bootadmin.org/elements/cards"
                    >
                      <i className="feather icon-credit-card" />
                      <span className="menu-title">Cards</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link wave-effect"
                      href="http://bootadmin.org/elements/grid"
                    >
                      <i className="feather icon-grid" />
                      <span className="menu-title">Grid</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="title">
              <i className="feather icon-more-horizontal" />
              <span className="menu-title">App Features</span>
            </li>
            <li className="nav-item">
              <a
                className="nav-link wave-effect collapsed"
                data-parent="#sidebarCookie"
                data-toggle="collapse"
                href="#navMailbox"
                aria-expanded="false"
                aria-controls="page-mailbox"
              >
                <i className="feather icon-mail" />
                <span className="menu-title">Mailbox</span>
                <i className="feather icon-chevron-down down-arrow" />
              </a>
              <div className="collapse" id="navMailbox">
                <ul className="flex-column sub-menu">
                  <li className="nav-item">
                    <a
                      className="nav-link wave-effect"
                      href="http://bootadmin.org/app/inbox"
                    >
                      <i className="feather icon-inbox" />
                      <span className="menu-title">Inbox</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link wave-effect"
                      href="http://bootadmin.org/app/inbox/email"
                    >
                      <i className="feather icon-mail" />
                      <span className="menu-title">Email</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link wave-effect"
                      href="http://bootadmin.org/app/inbox/compose"
                    >
                      <i className="feather icon-send" />
                      <span className="menu-title">Compose</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                href="http://bootadmin.org/app/calendar"
                className="nav-link wave-effect nav-single"
              >
                <i className="feather icon-calendar" />
                <span className="menu-title">Calendar</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link wave-effect collapsed"
                data-parent="#sidebarCookie"
                data-toggle="collapse"
                href="#navProfilebox"
                aria-expanded="false"
                aria-controls="page-profilebox"
              >
                <i className="feather icon-users" />
                <span className="menu-title">Account</span>
                <i className="feather icon-chevron-down down-arrow" />
              </a>
              <div className="collapse" id="navProfilebox">
                <ul className="flex-column sub-menu">
                  <li className="nav-item">
                    <a
                      className="nav-link wave-effect"
                      href="http://bootadmin.org/account/profile"
                    >
                      <i className="feather icon-user" />
                      <span className="menu-title">Profile</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link wave-effect"
                      href="http://bootadmin.org/account/billing"
                    >
                      <i className="feather icon-dollar-sign" />
                      <span className="menu-title">Billing</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link wave-effect"
                      href="http://bootadmin.org/account/settings"
                    >
                      <i className="feather icon-settings" />
                      <span className="menu-title">Settings</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="title">
              <i className="feather icon-more-horizontal" />
              <span className="menu-title">Misc</span>
            </li>
            <li className="nav-item">
              <a
                href="http://bootadmin.org/credits"
                className="nav-link wave-effect nav-single"
              >
                <i className="feather icon-zap" />
                <span className="menu-title">Credits</span>
              </a>
            </li>
            <li className="spacer" />
            <li className="button-container">
              <a
                href="https://github.com/iamshipon1988/bootadmin"
                className="btn btn-primary display-block"
              >
                <i className="feather icon-download" /> Download on Github
              </a>
            </li>
          </ul>
        </div>   
        </>
    )
}
