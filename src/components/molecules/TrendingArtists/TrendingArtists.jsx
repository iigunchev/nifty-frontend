import React from 'react';

// import { useDispatch } from 'react-redux';

import TrendingItem from '../TrendingItem/TrendingItem';

function TrendingArtists({ artistImg, artistName }) {
  // const dispatch = useDispatch();
  // useState = () => {
  //   dispatch({
  //     artist: artistName,
  //     image: artistImg
  //   });
  // };

  return (
    <div className="trendingTrackItemContainer">
      <TrendingItem image={artistImg} description={artistName} />
    </div>
  );
}

export default TrendingArtists;
