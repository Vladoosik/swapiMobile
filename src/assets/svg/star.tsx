// modules
import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
// types
import { SvgProps } from "../../types/SvgProps";

const StarIcon: FC<SvgProps> = (props): JSX.Element => {
  const { width, height, fill, style, strokeColor } = props;
  return (
    <Svg
      fill="#000"
      width={width}
      height={height}
      style={style}
      viewBox="0 0 36.09 36.09"
    >
      <Path
        fill={fill}
        stroke={strokeColor}
        d="M36.042 13.909a1.006 1.006 0 00-.85-.688l-11.549-1.172L18.96 1.43a1 1 0 00-1.83.002L12.446 12.05.899 13.221a1.003 1.003 0 00-.565 1.743l8.652 7.738-2.453 11.343a1 1 0 001.481 1.074l10.032-5.84 10.03 5.84a.997.997 0 001.091-.059 1 1 0 00.391-1.02l-2.453-11.344 8.653-7.737a.992.992 0 00.284-1.05zm-10.706 7.689a1 1 0 00-.311.957l2.097 9.695-8.574-4.99a.995.995 0 00-1.006 0l-8.576 4.99 2.097-9.695a1 1 0 00-.311-.957l-7.396-6.613 9.87-1.002c.358-.035.668-.264.814-.592l4.004-9.077 4.003 9.077c.146.328.456.557.814.592l9.87 1.002-7.395 6.613z"
      />
    </Svg>
  );
};

export default StarIcon;

StarIcon.defaultProps = {
  width: 25,
  height: 25,
  fill: "none",
};