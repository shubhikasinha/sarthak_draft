import svgPaths from "./svg-5uhitc8qcv";

export default function Rectangle() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[-1.5%_-1.76%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 235 275">
          <g filter="url(#filter0_f_1_23)" id="Rectangle 1">
            <path d={svgPaths.p2fa9a00} fill="var(--fill-0, white)" fillOpacity="0.5" />
            <path d={svgPaths.p39fecd00} stroke="var(--stroke-0, black)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="274.503" id="filter0_f_1_23" width="235" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_23" stdDeviation="2" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}