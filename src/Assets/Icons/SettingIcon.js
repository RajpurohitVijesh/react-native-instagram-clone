import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SettingIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.0042 0.251404C13.915 0.0959127 13.7495 0 13.5703 0H11.1357C10.9563 0 10.7907 0.0960805 10.7016 0.251788L10.0756 1.3469C8.85963 1.61312 7.72253 2.09007 6.70449 2.73753L5.49336 2.40961C5.32041 2.36266 5.13556 2.41187 5.00883 2.5386L3.28727 4.26016C3.16043 4.387 3.11126 4.57205 3.15839 4.74512L3.48492 5.94596C2.82956 6.96854 2.34664 8.11224 2.0772 9.33601L1.0014 9.95373C0.845913 10.0428 0.75 10.2083 0.75 10.3875V12.8222C0.75 13.0016 0.846081 13.1672 1.00179 13.2563L2.0772 13.8719C2.34664 15.0956 2.82956 16.2393 3.48492 17.2619L3.15961 18.4645C3.11266 18.6375 3.16187 18.8223 3.2886 18.949L5.01016 20.6706C5.137 20.7974 5.32205 20.8466 5.49512 20.7995L6.70449 20.4703C7.72253 21.1178 8.85963 21.5948 10.0756 21.861L10.7037 22.9565C10.7928 23.112 10.9583 23.2079 11.1375 23.2079H13.5722C13.7516 23.2079 13.9172 23.1118 14.0063 22.9561L14.6396 21.8495C15.8416 21.5799 16.9656 21.1042 17.9727 20.4615L19.2145 20.7983C19.3875 20.8452 19.5723 20.796 19.699 20.6693L21.4206 18.9477C21.5474 18.8209 21.5966 18.6358 21.5495 18.4628L21.2094 17.2132C21.8439 16.2111 22.3133 15.0943 22.5796 13.9009L23.7065 13.2542C23.862 13.165 23.9579 12.9995 23.9579 12.8203V10.3857C23.9579 10.2063 23.8618 10.0407 23.7061 9.95162L22.5796 9.30697C22.3132 8.11315 21.8435 6.996 21.2088 5.99373L21.5483 4.74336C21.5952 4.57041 21.546 4.38556 21.4193 4.25883L19.6977 2.53727C19.5709 2.41043 19.3858 2.36126 19.2128 2.40839L17.9727 2.74641C16.9653 2.1035 15.8409 1.62773 14.6386 1.35818L14.0042 0.251404ZM3.35118 11.0061C3.65889 6.31424 7.56197 2.60394 12.3316 2.60394C17.3022 2.60394 21.3316 6.63338 21.3316 11.6039C21.3316 16.5745 17.3022 20.6039 12.3316 20.6039C7.56197 20.6039 3.65889 16.8936 3.35118 12.2018V11.0061Z"
      fill="#262626"
    />
  </Svg>
);

export default SettingIcon;