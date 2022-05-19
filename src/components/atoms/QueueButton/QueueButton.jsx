import React from 'react';
// routes
import { useNavigate } from 'react-router-dom';
import { APP, QUEUE } from '../../../routes/routes';
// styles
import './QueueButton.scss';
// icons
import queueIcon from '../../../assets/img/player/queue.png';

function QueueButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`${APP}${QUEUE}`)}
      className="queueButton"
      type="button"
    >
      <img src={queueIcon} className="filteredImg" alt="queue" />
    </button>
  );
}

export default QueueButton;
