import * as React from "react";
const SvgMail = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <g clipPath="url(#mail_svg__a)">
      <mask id="mail_svg__b" fill="#fff">
        <path d="M19.107 5.314c0-.917-.75-1.667-1.667-1.667H4.107c-.917 0-1.667.75-1.667 1.667v10c0 .916.75 1.666 1.667 1.666H17.44c.917 0 1.667-.75 1.667-1.666zm-1.667 0L10.773 9.48 4.108 5.314zm0 10H4.107V6.98l6.667 4.167L17.44 6.98z" />
      </mask>
      <path
        fill="#BFBFBF"
        d="M17.44 5.314 18.5 7.01l5.914-3.696H17.44zM10.773 9.48l-1.06 1.696 1.06.663 1.06-.663zM4.108 5.314v-2h-6.974L3.047 7.01zm13.333 10v2h2v-2zm-13.333 0h-2v2h2zm0-8.334 1.06-1.696-3.06-1.912V6.98zm6.667 4.167-1.06 1.696 1.06.662 1.06-.662zM17.44 6.98h2V3.372l-3.06 1.912zm3.667-1.666a3.67 3.67 0 0 0-3.667-3.667v4a.33.33 0 0 1-.333-.333zM17.44 1.647H4.107v4H17.44zm-13.333 0A3.67 3.67 0 0 0 .44 5.314h4a.33.33 0 0 1-.333.333zM.44 5.314v10h4v-10zm0 10a3.67 3.67 0 0 0 3.667 3.666v-4c.188 0 .333.146.333.334zm3.667 3.666H17.44v-4H4.107zm13.333 0a3.67 3.67 0 0 0 3.667-3.666h-4c0-.188.145-.334.333-.334zm3.667-3.666v-10h-4v10zM16.38 3.618 9.714 7.784l2.12 3.392L18.5 7.01zm-4.546 4.166L5.167 3.618 3.047 7.01l6.667 4.166zm-7.727-.47H17.44v-4H4.107zm13.333 6H4.107v4H17.44zm-11.333 2V6.98h-4v8.334zm-3.06-6.638 6.667 4.167 2.12-3.392-6.667-4.167zm8.787 4.167L18.5 8.676l-2.12-3.392-6.666 4.167zM15.44 6.98v8.334h4V6.98z"
        mask="url(#mail_svg__b)"
      />
    </g>
    <defs>
      <clipPath id="mail_svg__a">
        <path fill="#fff" d="M.773.314h20v20h-20z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMail;
