import React from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import BreadCrubmb from "../components/BreadCrubmb";

export default function MainLayout(props) {
  return (
    <>
      <div id="dashboardPage">
        <Topbar />
        <Sidebar />
        <main>
          <BreadCrubmb pageName={props.pageName} />
          {props.children}
          <Footer />
        </main>
      </div>
    </>
  );
}
