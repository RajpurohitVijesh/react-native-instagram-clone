import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CameraOutlineIcon = (props) => (
    <Svg
        width={24}
        height={22}
        viewBox="0 0 24 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5739 1.37242C16.0213 0.5168 15.0723 0 14.0537 0H9.44491C8.42573 0 7.47626 0.517432 6.92383 1.37391L6.17039 2.54203C5.98625 2.82752 5.66976 3 5.33003 3H4.5C2.01472 3 0 5.01472 0 7.5V17.5C0 19.9853 2.01472 22 4.5 22H19C21.4853 22 23.5 19.9853 23.5 17.5V7.5C23.5 5.01472 21.4853 3 19 3H18.1696C17.8301 3 17.5137 2.82773 17.3295 2.54253L16.5739 1.37242ZM9.44491 1.5H14.0537C14.563 1.5 15.0375 1.7584 15.3138 2.18621L16.0695 3.35631C16.53 4.06933 17.3208 4.5 18.1696 4.5H19C20.6569 4.5 22 5.84315 22 7.5V17.5C22 19.1569 20.6569 20.5 19 20.5H4.5C2.84315 20.5 1.5 19.1569 1.5 17.5V7.5C1.5 5.84315 2.84315 4.5 4.5 4.5H5.33003C6.17935 4.5 6.97057 4.06881 7.43093 3.35508L8.18437 2.18695C8.46058 1.75872 8.93532 1.5 9.44491 1.5ZM11.75 6.5C14.9256 6.5 17.5 9.07436 17.5 12.25C17.5 15.4256 14.9256 18 11.75 18C8.57436 18 6 15.4256 6 12.25C6 9.07436 8.57436 6.5 11.75 6.5ZM7.5 12.25C7.5 9.90279 9.40279 8 11.75 8C14.0972 8 16 9.90279 16 12.25C16 14.5972 14.0972 16.5 11.75 16.5C9.40279 16.5 7.5 14.5972 7.5 12.25Z"
            fill="#262626"
        />
    </Svg>
);

export default CameraOutlineIcon;