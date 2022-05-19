import React from 'react';
// redux
import { useSelector } from 'react-redux';
// components
import TrendingTrackItem from '../../components/molecules/TrendingTrackItem/TrendingTrackItem';

// styles
import './Queue.scss';
// icons
import defaultSong from '../../assets/img/defaultSong.png';

function Queue() {
  const { queue } = useSelector((state) => state.audio);
  return (
    <>
      <h1 className="heading1">Queue</h1>
      <section className="queueWrapper">
        {queue.length !== 0 ? (
          queue.map((track) => (
            <TrendingTrackItem
              key={track.id}
              trackSrc={track.src}
              artistImg={track.image || defaultSong}
              artistName={track.artist}
              trackId={track.id}
              trackName={track.title}
              isLiked={track.isLiked}
            />
          ))
        ) : (
          <h3 className="heading3">Your queue is empty!</h3>
        )}
      </section>
    </>
  );
}

export default Queue;
