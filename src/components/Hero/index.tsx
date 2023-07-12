import React from "react";
import style from "./style/index.module.css";

const Hero: React.FC = () => {
  return (
    <div className={style.hero_banner}>
      <div className={style.hero_banner__text_content}>
        <h2>I create websites.</h2>
      </div>
      <div className={style.hero_banner__bg}>
        <svg
          id={style.bg_1}
          width="1638"
          height="990"
          viewBox="0 0 1638 990"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 530.737V0H1638V639.167C1574.5 672.159 1440.25 772.038 1304 788.5C1057.58 818.271 948.199 636.824 700 639.167C556.979 640.517 481.657 726.259 340 706.508C191.96 685.867 16 583 0 530.737Z"
            fill="url(#paint0_linear_39_108)"
            fillOpacity="0.75"
          />

          <defs>
            <linearGradient
              id="paint0_linear_39_108"
              x1="-0.500164"
              y1="309.547"
              x2="1638"
              y2="309.547"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#CB48FF" />
              <stop offset="1" stopColor="#52C1FF" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          id={style.bg_2}
          width="1638"
          height="990"
          viewBox="0 0 1638 990"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1638 530.413V0H0V638.777C63.5 671.749 186.188 807.479 335.5 838.488C598.152 893.035 700.391 533.251 966.5 567.154C1159.39 591.728 1222.72 813.199 1400 759.536C1523.51 722.148 1622 582.644 1638 530.413Z"
            fill="url(#paint0_linear_57_165)"
            fillOpacity="0.65"
          />

          <defs>
            <linearGradient
              id="paint0_linear_57_165"
              x1="-0.500164"
              y1="309.547"
              x2="1638"
              y2="309.547"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#CB48FF" />
              <stop offset="1" stopColor="#52C1FF" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          id={style.bg_3}
          width="1638"
          height="990"
          viewBox="0 0 1638 990"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1638 693.619V0H-0.00012207V766.013C87 710 178.845 647.487 309.5 635C495.505 617.223 579.935 747.138 763.5 766.013C943.251 784.495 1225 732.6 1225 732.6C1225 732.6 1515.63 691.081 1638 693.619Z"
            fill="url(#paint0_linear_49_139)"
            fillOpacity="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_49_139"
              x1="1638.5"
              y1="335.618"
              x2="1.12405e-05"
              y2="335.618"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#52C1FF" />
              <stop offset="1" stopColor="#CB48FF" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          id={style.bg_4}
          width="1638"
          height="990"
          viewBox="0 0 1638 990"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1638 693.619V0H-0.00012207V766.013C27.5 757.5 164.712 745.516 270.5 749C459.652 755.23 555.912 855.424 745 847.5C965.252 838.27 1059.23 681.804 1279 664.5C1419.22 653.459 1456 666.5 1638 693.619Z"
            fill="url(#paint0_linear_49_153)"
            fillOpacity="0.25"
          />
          <defs>
            <linearGradient
              id="paint0_linear_49_153"
              x1="1638.5"
              y1="335.618"
              x2="1.12405e-05"
              y2="335.618"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#52C1FF" />
              <stop offset="1" stopColor="#CB48FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
