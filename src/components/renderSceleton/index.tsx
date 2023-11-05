// modules
import React from "react";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const RenderSceleton = (): JSX.Element => {
  return (
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item height={40} marginVertical={15} />
      </SkeletonPlaceholder>
  );
};

export default RenderSceleton;
