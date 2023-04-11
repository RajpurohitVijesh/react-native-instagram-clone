import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HomeFillIcon = (props) => (
    <Svg
        width={22}
        height={25}
        viewBox="0 0 22 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.7 0.904491L21.7 10.7059C21.8919 10.894 22 11.1514 22 11.4201V23.4997C22 23.7758 21.7761 23.9997 21.5 23.9997H14.5C14.2239 23.9997 14 23.7758 14 23.4997V18C14 16.4023 12.7511 15.0963 11.1763 15.0051L11 15C9.40232 15 8.09634 16.2489 8.00509 17.8237L8 18V23.4997C7.99998 23.7758 7.77613 23.9996 7.5 23.9997L0.5 24C0.25454 24 0.0503841 23.8231 0.00803813 23.5899L0 23.5V11.4201C0 11.1514 0.108129 10.894 0.300019 10.7059L10.3 0.904491C10.6889 0.523373 11.3111 0.523373 11.7 0.904491Z"
            fill="#262626"
        />
    </Svg>
);

export default HomeFillIcon;