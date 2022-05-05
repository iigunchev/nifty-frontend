import React from 'react';
import Aside from '../../organism/Aside/Aside';
import Player from '../../organism/Player/Player';

import './AppTemplate.scss';

function AppTemplate({ children }) {
  return (
    <div className="appWrapper">
      <aside className="appAside">
        <Aside />
      </aside>
      <article className="appContent">{children}</article>
      <Player />
    </div>
  );
}

export default AppTemplate;
