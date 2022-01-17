import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import firebase from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import Topbar from "./components/Topbar";
import AsideBAr from "./components/AsideBAr";
import Sidebar from "./components/Sidebar";
import BreadCrubmb from "./components/BreadCrubmb";
import StatCards from "./components/StatCards";
import QuizzesTable from "./components/QuizzesTable";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="dashboardPage">
        <Topbar />
        <Sidebar />
        <main>
          <BreadCrubmb />
          <div className="container-fluid">
            <StatCards />
            <QuizzesTable />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
