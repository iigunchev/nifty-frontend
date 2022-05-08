<<<<<<< HEAD
import React from 'react';
=======
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
>>>>>>> dev
import Aside from '../../organism/Aside/Aside';
import Player from '../../organism/Player/Player';
// styles
import 'react-toastify/dist/ReactToastify.css';
import './AppTemplate.scss';

function AppTemplate({ children }) {
  return (
    <div className="appWrapper">
      <aside className="appAside">
        <Aside />
      </aside>
<<<<<<< HEAD
      <article className="appContent">{children}</article>
      <Player />
=======
      <article className="appContent">
        {children} {isMedia ? <Player /> : null}
      </article>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
>>>>>>> dev
    </div>
  );
}

export default AppTemplate;
