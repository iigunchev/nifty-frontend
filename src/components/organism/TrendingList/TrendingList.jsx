import React from 'react';
import { Link } from 'react-router-dom';
import TrendingItem from '../../molecules/TrendingItem/TrendingItem';

import './TrendingList.scss';

const mockTrackList = [
  {
    artistImg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75VCBzmMSP6nD506JfAy8GXuuRMqese0Nr-vetjHT4wQXbPnaHL3ZkvaBePzYTCo03Pc&usqp=CAU',
    trackName: 'Motomami',
    artistName: 'Rosalia',
    trackDuration: '3.05'
  },
  {
    artistImg:
      'https://i1.sndcdn.com/artworks-000129437053-bgvku6-t500x500.jpg',
    trackName: 'Thunderstruck',
    artistName: 'AC/DC',
    trackDuration: '3.25'
  },
  {
    artistImg: 'https://m.media-amazon.com/images/I/71nIIQmyG5L._SS500_.jpg',
    trackName: 'Memories',
    artistName: 'Maroon 5',
    trackDuration: '2.55'
  }
];

function TrendingList() {
  return (
    <section className="trendingTracksContainer">
      <div className="trendingHeaderWrapper">
        <h2 className="heading2">Trending</h2>
        <Link to="/trending-tracks/all">See More</Link>
      </div>
      <div className="trendingListWrapper">
        {mockTrackList.map((track, index) => (
          <TrendingItem
            spot={index + 1}
            key={track.trackName}
            artistImg={track.artistImg}
            trackName={track.trackName}
            artistName={track.artistName}
            trackDuration={track.trackDuration}
          />
        ))}
      </div>
    </section>
  );
}

export default TrendingList;
