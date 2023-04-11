import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MenuOutlineIcon = (props) => (
  <Svg
    width={21}
    height={18}
    viewBox="0 0 21 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.25 0H1.25L1.14823 0.00684662C0.782154 0.056509 0.5 0.370304 0.5 0.75C0.5 1.16421 0.835786 1.5 1.25 1.5H20.25L20.3518 1.49315C20.7178 1.44349 21 1.1297 21 0.75C21 0.335786 20.6642 0 20.25 0ZM1.25 8H20.25C20.6642 8 21 8.33579 21 8.75C21 9.1297 20.7178 9.44349 20.3518 9.49315L20.25 9.5H1.25C0.835786 9.5 0.5 9.16421 0.5 8.75C0.5 8.3703 0.782154 8.05651 1.14823 8.00685L1.25 8ZM1.25 16H20.25C20.6642 16 21 16.3358 21 16.75C21 17.1297 20.7178 17.4435 20.3518 17.4932L20.25 17.5H1.25C0.835786 17.5 0.5 17.1642 0.5 16.75C0.5 16.3703 0.782154 16.0565 1.14823 16.0068L1.25 16Z"
      fill="#262626"
    />
  </Svg>
);

export default MenuOutlineIcon;