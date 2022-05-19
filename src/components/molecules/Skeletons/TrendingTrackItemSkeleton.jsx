import React from 'react';
// components
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
// styles
import 'react-loading-skeleton/dist/skeleton.css';

import './Skeletons.scss';

function TrendingTrackItemSkeleton({ count = 10 }) {
  const iteration = Array.from({ length: count });
  return iteration.map((_, idx) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={idx} className="trendingTrackItemContainer">
      <SkeletonTheme
        borderRadius={5}
        baseColor="#dcd9de"
        highlightColor="#c685fd"
      >
        <div className="skeletonRow">
          <Skeleton circle height={35} width={35} />
          <Skeleton height={50} width={50} />
          <div className="skeletonColumn">
            <Skeleton count={2} width={80} />
          </div>
        </div>
        <Skeleton circle height={50} width={50} />
        <Skeleton height={30} width={10} />
      </SkeletonTheme>
    </div>
  ));
}

export default TrendingTrackItemSkeleton;
