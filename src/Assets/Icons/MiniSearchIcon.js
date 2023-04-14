import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MiniSearchIcon = (props) => (
    <Svg
        width={15}
        height={15}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.75 6C11.75 2.82436 9.17564 0.25 6 0.25C2.82436 0.25 0.25 2.82436 0.25 6C0.25 9.17564 2.82436 11.75 6 11.75C7.31725 11.75 8.53105 11.3071 9.50057 10.562L12.6517 13.7123L12.7358 13.7849C13.0294 14.0028 13.446 13.9786 13.7123 13.7123C14.0052 13.4194 14.0052 12.9445 13.7123 12.6517L10.562 9.50057C11.3071 8.53105 11.75 7.31725 11.75 6ZM1.75 6C1.75 3.65279 3.65279 1.75 6 1.75C8.34721 1.75 10.25 3.65279 10.25 6C10.25 8.34721 8.34721 10.25 6 10.25C3.65279 10.25 1.75 8.34721 1.75 6Z"
            fill="#3C3C43"
            fillOpacity={0.6}
        />
    </Svg>
);

export default MiniSearchIcon;