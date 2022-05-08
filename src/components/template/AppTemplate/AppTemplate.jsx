import React from 'react';
import { ToastContainer } from 'react-toastify';
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
    </div>
  );
}

export default AppTemplate;
