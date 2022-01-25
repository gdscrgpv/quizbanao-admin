import React from 'react';

export default function MainLayout(props) {
  return <>
     <div id="dashboardPage">
        <Topbar />
        <Sidebar />
        <main>
           {props.children}
          <Footer />
        </main>
      </div>
  </>;
}
