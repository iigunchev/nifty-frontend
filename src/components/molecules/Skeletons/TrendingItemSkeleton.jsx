import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function TrendingItemSkeleton({ count = 10 }) {
  const iteration = Array.from({ length: count });
  return iteration.map((_, idx) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={idx} className="cardContainer">
      <SkeletonTheme
        borderRadius={5}
        baseColor="#dcd9de"
        highlightColor="#c685fd"
      >
        <div className="skeletonRow">
          <Skeleton height={50} width={50} />
          <Skeleton count={2} width={80} />
        </div>
      </SkeletonTheme>
    </div>
  ));
}

export default TrendingItemSkeleton;
