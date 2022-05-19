import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function CardSkeleton({ count = 10 }) {
  const iteration = Array.from({ length: count });
  return iteration.map((_, idx) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={idx} className="cardContainer">
      <SkeletonTheme
        borderRadius={5}
        baseColor="#dcd9de"
        highlightColor="#c685fd"
      >
        <Skeleton borderRadius={24} height={200} width={200} />
      </SkeletonTheme>
    </div>
  ));
}

export default CardSkeleton;
