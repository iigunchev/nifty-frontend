import React, { useEffect, useState } from 'react';
import Aside from '../../organism/Aside/Aside';
import Player from '../../organism/Player/Player';

import './AppTemplate.scss';

function AppTemplate({ children }) {
  const [isMedia, setIsMedia] = useState(window.innerWidth < 1000);
  const updateMedia = () => {
    setIsMedia(window.innerWidth < 1000);
  };
  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);
  return (
    <div className="appWrapper">
      <aside className="appAside">
        <Aside />
      </aside>
      <article className="appContent">
        {children} {isMedia ? <Player /> : null}
      </article>
    </div>
  );
}

export default AppTemplate;
