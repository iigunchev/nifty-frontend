import React from 'react';
// components
import { ToastContainer } from 'react-toastify';
import Player from '../../organism/Player/Player';
import Aside from '../../organism/Aside/Aside';
// styles
import 'react-toastify/dist/ReactToastify.css';
import './AppTemplate.scss';
import Hamburger from '../../atoms/Hamburger/Hamburger';

function AppTemplate({ children }) {
  return (
    <div className="appWrapper">
      <aside className="appAside">
        <Aside />
      </aside>
      <article className="appContent">{children}</article>
      <Player />
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
      <Hamburger />
    </div>
  );
}

export default AppTemplate;
