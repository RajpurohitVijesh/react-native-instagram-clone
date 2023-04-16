import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LeftChevron = (props) => (
    <Svg
        width={10}
        height={18}
        viewBox="0 0 10 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M9.57712 1.28033C9.87002 0.987437 9.87002 0.512563 9.57712 0.21967C9.28423 -0.0732233 8.80936 -0.0732233 8.51646 0.21967L0.707078 8.02906C0.316554 8.41958 0.316554 9.05275 0.707078 9.44327L8.51646 17.2527C8.80936 17.5455 9.28423 17.5455 9.57712 17.2527C9.87002 16.9598 9.87002 16.4849 9.57712 16.192L2.12129 8.73616L9.57712 1.28033Z"
            fill="#262626"
        />
    </Svg>
);

export default LeftChevron;