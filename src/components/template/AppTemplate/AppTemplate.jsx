import React from 'react';
import Aside from '../../organism/Aside/Aside';

import './AppTemplate.scss';

function AppTemplate({ children }) {
  return (
    <div className="appWrapper">
      <aside className="appAside">
        <Aside />
      </aside>
      <article className="appContent">{children}</article>
    </div>
  );
}

export default AppTemplate;
