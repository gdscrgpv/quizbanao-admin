import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import firebase from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function App() {
  return (
    <>
        <div id="dashboardPage">
          {/* Main Menu */}
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
                            See more messages{" "}
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
          <aside className="offcanvas-menu">
            <div className="offcanvas-button">
              <a href="#" className="btn wave-effect offcanvas-toggle font-20">
                <span aria-hidden="true">×</span>
              </a>
            </div>
            <h5 className="offcanvas-title">List Group</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <h5 className="offcanvas-title">List Group</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Cras justo odio
                <span className="badge badge-primary badge-pill">14</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Dapibus ac facilisis in
                <span className="badge badge-primary badge-pill">2</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Morbi leo risus
                <span className="badge badge-primary badge-pill">1</span>
              </li>
            </ul>
            <h5 className="offcanvas-title">List Group Content</h5>
            <div className="list-group list-group-flush">
              <a
                href="#"
                className="list-group-item list-group-item-action flex-column align-items-start"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">List group item heading</h5>
                  <small>3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small>Donec id elit non mi porta.</small>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action flex-column align-items-start"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">List group item heading</h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small className="text-muted">
                  Donec id elit non mi porta.
                </small>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action flex-column align-items-start"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">List group item heading</h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small className="text-muted">
                  Donec id elit non mi porta.
                </small>
              </a>
            </div>
          </aside>
          {/* Main Menu */}
          <div className="sidebar">
            <div className="logo">
              <a href="/">
                <span className="logo-emblem">
                  Q
                </span>
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
                        <span className="menu-title">
                          Boxed &amp; Horizontal
                        </span>
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
          <main>
            <div className="page-breadcrumb">
              <div className="row">
                <div className="col-6">
                  <h4 className="page-title">Dashboard</h4>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
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
            <div className="container-fluid">
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
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      {/* title */}
                      <div className="d-md-flex align-items-center">
                        <div>
                          <h4 className="card-title">Top Selling Products</h4>
                          <p className="card-subtitle">
                            Overview of Top Selling Items
                          </p>
                        </div>
                        <div className="ml-auto">
                          <div className="dl">
                            <select className="custom-select">
                              <option value={0} selected>
                                Monthly
                              </option>
                              <option value={1}>Daily</option>
                              <option value={2}>Weekly</option>
                              <option value={3}>Yearly</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      {/* title */}
                    </div>
                    <div className="table-responsive">
                      <table className="table v-middle">
                        <thead>
                          <tr className="bg-light">
                            <th className="border-top-0">Products</th>
                            <th className="border-top-0">License</th>
                            <th className="border-top-0">Support Agent</th>
                            <th className="border-top-0">Technology</th>
                            <th className="border-top-0">Tickets</th>
                            <th className="border-top-0">Sales</th>
                            <th className="border-top-0">Earnings</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="m-r-10">
                                  <a className="btn btn-circle btn-info text-white">
                                    EA
                                  </a>
                                </div>
                                <div className>
                                  <h4 className="m-b-0 font-16">Elite Admin</h4>
                                </div>
                              </div>
                            </td>
                            <td>Single Use</td>
                            <td>John Doe</td>
                            <td>
                              <label className="label label-danger">
                                Angular
                              </label>
                            </td>
                            <td>46</td>
                            <td>356</td>
                            <td>
                              <h5 className="m-b-0">$2850.06</h5>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="m-r-10">
                                  <a className="btn btn-circle btn-warning text-white">
                                    MA
                                  </a>
                                </div>
                                <div className>
                                  <h4 className="m-b-0 font-16">
                                    Monster Admin
                                  </h4>
                                </div>
                              </div>
                            </td>
                            <td>Single Use</td>
                            <td>Venessa Fern</td>
                            <td>
                              <label className="label label-info">Vue Js</label>
                            </td>
                            <td>46</td>
                            <td>356</td>
                            <td>
                              <h5 className="m-b-0">$2850.06</h5>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="m-r-10">
                                  <a className="btn btn-circle btn-success text-white">
                                    MP
                                  </a>
                                </div>
                                <div className>
                                  <h4 className="m-b-0 font-16">
                                    Material Pro Admin
                                  </h4>
                                </div>
                              </div>
                            </td>
                            <td>Single Use</td>
                            <td>John Doe</td>
                            <td>
                              <label className="label label-success">
                                Bootstrap
                              </label>
                            </td>
                            <td>46</td>
                            <td>356</td>
                            <td>
                              <h5 className="m-b-0">$2850.06</h5>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="m-r-10">
                                  <a className="btn btn-circle btn-primary text-white">
                                    AA
                                  </a>
                                </div>
                                <div className>
                                  <h4 className="m-b-0 font-16">Ample Admin</h4>
                                </div>
                              </div>
                            </td>
                            <td>Single Use</td>
                            <td>John Doe</td>
                            <td>
                              <label className="label label-purple">
                                React
                              </label>
                            </td>
                            <td>46</td>
                            <td>356</td>
                            <td>
                              <h5 className="m-b-0">$2850.06</h5>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* column */}
                <div className="col-lg-6">
                  <div className="card card-hover">
                    <div className="card-body">
                      <h4 className="card-title">Recent Comments</h4>
                      <table className="table table-striped table-hover table-borderless table-vcenter font-size-sm">
                        <thead>
                          <tr className="text-uppercase">
                            <th className="font-w700">Product</th>
                            <th className="d-none d-sm-table-cell font-w700">
                              Date
                            </th>
                            <th className="font-w700">State</th>
                            <th
                              className="d-none d-sm-table-cell font-w700 text-right"
                              style={{ width: 120 }}
                            >
                              Price
                            </th>
                            <th
                              className="font-w700 text-center"
                              style={{ width: 60 }}
                            />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <span className="font-w600">iPhone X</span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                              <span className="font-size-sm text-muted">
                                today
                              </span>
                            </td>
                            <td>
                              <span className="font-w600 text-warning">
                                Pending..
                              </span>
                            </td>
                            <td className="d-none d-sm-table-cell text-right">
                              $999,99
                            </td>
                            <td className="text-center">
                              <a
                                href="javascript:void(0)"
                                data-toggle="tooltip"
                                data-placement="left"
                                title
                                className="js-tooltip-enabled"
                                data-original-title="Manage"
                              >
                                <i className="fa fa-fw fa-pencil-alt" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="font-w600">MacBook Pro 15"</span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                              <span className="font-size-sm text-muted">
                                today
                              </span>
                            </td>
                            <td>
                              <span className="font-w600 text-warning">
                                Pending..
                              </span>
                            </td>
                            <td className="d-none d-sm-table-cell text-right">
                              $2.299,00
                            </td>
                            <td className="text-center">
                              <a
                                href="javascript:void(0)"
                                data-toggle="tooltip"
                                data-placement="left"
                                title
                                className="js-tooltip-enabled"
                                data-original-title="Manage"
                              >
                                <i className="fa fa-fw fa-pencil-alt" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="font-w600">
                                Nvidia GTX 1080 Ti
                              </span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                              <span className="font-size-sm text-muted">
                                today
                              </span>
                            </td>
                            <td>
                              <span className="font-w600 text-warning">
                                Pending..
                              </span>
                            </td>
                            <td className="d-none d-sm-table-cell text-right">
                              $1200,00
                            </td>
                            <td className="text-center">
                              <a
                                href="javascript:void(0)"
                                data-toggle="tooltip"
                                data-placement="left"
                                title
                                className="js-tooltip-enabled"
                                data-original-title="Manage"
                              >
                                <i className="fa fa-fw fa-pencil-alt" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="font-w600">
                                Playstation 4 Pro
                              </span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                              <span className="font-size-sm text-muted">
                                today
                              </span>
                            </td>
                            <td>
                              <span className="font-w600 text-danger">
                                Cancelled
                              </span>
                            </td>
                            <td className="d-none d-sm-table-cell text-right">
                              $399,00
                            </td>
                            <td className="text-center">
                              <a
                                href="javascript:void(0)"
                                data-toggle="tooltip"
                                data-placement="left"
                                title
                                className="js-tooltip-enabled"
                                data-original-title="Manage"
                              >
                                <i className="fa fa-fw fa-pencil-alt" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="font-w600">Nintendo Switch</span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                              <span className="font-size-sm text-muted">
                                yesterday
                              </span>
                            </td>
                            <td>
                              <span className="font-w600 text-success">
                                Completed
                              </span>
                            </td>
                            <td className="d-none d-sm-table-cell text-right">
                              $349,00
                            </td>
                            <td className="text-center">
                              <a
                                href="javascript:void(0)"
                                data-toggle="tooltip"
                                data-placement="left"
                                title
                                className="js-tooltip-enabled"
                                data-original-title="Manage"
                              >
                                <i className="fa fa-fw fa-pencil-alt" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="font-w600">iPhone X</span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                              <span className="font-size-sm text-muted">
                                yesterday
                              </span>
                            </td>
                            <td>
                              <span className="font-w600 text-success">
                                Completed
                              </span>
                            </td>
                            <td className="d-none d-sm-table-cell text-right">
                              $999,00
                            </td>
                            <td className="text-center">
                              <a
                                href="javascript:void(0)"
                                data-toggle="tooltip"
                                data-placement="left"
                                title
                                className="js-tooltip-enabled"
                                data-original-title="Manage"
                              >
                                <i className="fa fa-fw fa-pencil-alt" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="font-w600">Echo Dot</span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                              <span className="font-size-sm text-muted">
                                yesterday
                              </span>
                            </td>
                            <td>
                              <span className="font-w600 text-success">
                                Completed
                              </span>
                            </td>
                            <td className="d-none d-sm-table-cell text-right">
                              $39,99
                            </td>
                            <td className="text-center">
                              <a
                                href="javascript:void(0)"
                                data-toggle="tooltip"
                                data-placement="left"
                                title
                                className="js-tooltip-enabled"
                                data-original-title="Manage"
                              >
                                <i className="fa fa-fw fa-pencil-alt" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="font-w600">Xbox One X</span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                              <span className="font-size-sm text-muted">
                                yesterday
                              </span>
                            </td>
                            <td>
                              <span className="font-w600 text-success">
                                Completed
                              </span>
                            </td>
                            <td className="d-none d-sm-table-cell text-right">
                              $499,00
                            </td>
                            <td className="text-center">
                              <a
                                href="javascript:void(0)"
                                data-toggle="tooltip"
                                data-placement="left"
                                title
                                className="js-tooltip-enabled"
                                data-original-title="Manage"
                              >
                                <i className="fa fa-fw fa-pencil-alt" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* column */}
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">File Tree</h4>
                      <div className="tree">
                        <ul>
                          <li>
                            <i className="fa fa-folder-open" /> Project
                            <ul>
                              <li>
                                <i className="fa fa-folder-open" /> Opened
                                Folder <span>- 15kb</span>
                                <ul>
                                  <li>
                                    <i className="fa fa-folder-open" /> css
                                    <ul>
                                      <li>
                                        <i className="fa fa-code" /> CSS Files{" "}
                                        <span>- 3kb</span>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-folder" /> Folder close{" "}
                                    <span>- 10kb</span>
                                  </li>
                                  <li>
                                    <i className="fab fa-html5" /> index.html
                                  </li>
                                  <li>
                                    <i className="fa fa-picture-o" />{" "}
                                    favicon.ico
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <i className="fa fa-folder" /> Folder close{" "}
                                <span>- 420kb</span>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* column */}
                <div className="col-lg-6">
                  <div className="card has-shadow">
                    <div className="card-body border-top">
                      <h4 className="card-title">Stocks</h4>
                      <table className="table mb-0">
                        <tbody>
                          <tr>
                            <td>APPL</td>
                            <td>$ 9,500</td>
                            <td className="color-green">+ 458</td>
                          </tr>
                          <tr>
                            <td>GOOG</td>
                            <td>$ 15,425</td>
                            <td className="color-red">- 1,632</td>
                          </tr>
                          <tr>
                            <td>AMD</td>
                            <td>$ 11,540</td>
                            <td className="color-green">+ 8,326</td>
                          </tr>
                          <tr>
                            <td>HGM</td>
                            <td>$ 15,855</td>
                            <td className="color-green">+ 11,326</td>
                          </tr>
                          <tr>
                            <td>MKR</td>
                            <td>$ 18,500</td>
                            <td className="color-red">- 6,586</td>
                          </tr>
                          <tr>
                            <td>APPL</td>
                            <td>$ 9,500</td>
                            <td className="color-green">+ 458</td>
                          </tr>
                          <tr>
                            <td>GOOG</td>
                            <td>$ 15,425</td>
                            <td className="color-red">- 1,632</td>
                          </tr>
                          <tr>
                            <td>AMD</td>
                            <td>$ 11,540</td>
                            <td className="color-green">+ 8,326</td>
                          </tr>
                          <tr>
                            <td>HGM</td>
                            <td>$ 15,855</td>
                            <td className="color-green">+ 11,326</td>
                          </tr>
                          <tr>
                            <td>MKR</td>
                            <td>$ 18,500</td>
                            <td className="color-red">- 6,586</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* column */}
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Recent Comments</h4>
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Customer</th>
                            <th>Purchased On</th>
                            <th>Status</th>
                            <th>Tracking No#</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="https://bootadmin.org/images/icons/lulu/Desktop.png"
                                style={{ width: 50 }}
                                alt="iMac"
                              />
                            </td>
                            <td>iMac</td>
                            <td>Russell</td>
                            <td>22/08/2018</td>
                            <td>
                              <span className="badge badge-success font-weight-100">
                                Paid
                              </span>
                            </td>
                            <td>#98BC85SD84</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="https://bootadmin.org/images/icons/lulu/Mobile.png"
                                style={{ width: 50 }}
                                alt="iPhone"
                              />
                            </td>
                            <td>iPhone</td>
                            <td>Carol</td>
                            <td>15/07/2018</td>
                            <td>
                              <span className="badge badge-warning font-weight-100">
                                Pending
                              </span>
                            </td>
                            <td>#98SA3C9SC</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="https://bootadmin.org/images/icons/lulu/Clock.png"
                                style={{ width: 50 }}
                                alt="apple_watch"
                              />
                            </td>
                            <td>Apple Watch</td>
                            <td>Austin Pena</td>
                            <td>10/07/2018</td>
                            <td>
                              <span className="badge badge-success font-weight-100">
                                Paid
                              </span>
                            </td>
                            <td>#98BC85SD84</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="https://bootadmin.org/images/icons/lulu/Headphones.png"
                                style={{ width: 50 }}
                                alt="mac_mouse"
                              />
                            </td>
                            <td>Headphones</td>
                            <td>Randy</td>
                            <td>22/04/2018</td>
                            <td>
                              <span className="badge badge-default font-weight-100">
                                Failed
                              </span>
                            </td>
                            <td>#98SA3C9SC</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer */}
            <footer>
              <p>
                © Bootadmin. All Rights Reserved. <br />
                Designed and Developed by{" "}
                <a href="https://sazzad.me">Sazzad Hossain</a>.
              </p>
            </footer>
          </main>
        </div>
    
    </>
  );
}

export default App;
