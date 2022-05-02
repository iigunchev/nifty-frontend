import React from 'react';
import { Link } from 'react-router-dom';
import TrendingItem from '../../molecules/TrendingItem/TrendingItem';

import './TrendingList.scss';

function TrendingList() {
  return (
    <section className="trendingTracksContainer">
      <div className="trendingHeaderWrapper">
        <h2 className="heading2">Trending</h2>
        <Link to="/trending-tracks/all">See More</Link>
      </div>
      <div className="trendingListWrapper">
        <TrendingItem />
        <TrendingItem />
        <TrendingItem />
        <TrendingItem />
        <TrendingItem />
      </div>
    </section>
  );
}

export default TrendingList;
