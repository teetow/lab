import { SVGProps } from "react";

const defs = {
  topfade: (props: SVGProps<SVGLinearGradientElement>) => (
    <linearGradient x2="0%" y1="0%" y2="100%" {...props}>
      <stop offset="0%" stopColor="#fff" />
      <stop offset="25%" stopColor="rgba(255, 255, 255, 0.67)" />
      <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
    </linearGradient>
  ),
};

const elements = {
  sine1f: (props?: SVGProps<SVGPathElement>) => (
    <path
      d="M0 10.7988C10.4362 15.8186 20.419 20.5975 32 20.5975C43.581 20.5975 53.5638 15.8186 64 10.7988C74.4362 5.77899 84.419 1 96 1C107.581 1 117.564 5.77899 128 10.7988V128H0V10.7988Z"
      {...props}
    />
  ),
  sine2f: (props?: SVGProps<SVGPathElement>) => (
    <path
      d="M0 10.8765C5.21811 15.9362 10.2095 20.7531 16 20.7531C21.7905 20.7531 26.7819 15.9362 32 10.8765C37.2181 5.81692 42.2095 1 48 1C53.7905 1 58.7819 5.81692 64 10.8765C69.2181 15.9362 74.2095 20.7531 80 20.7531C85.7905 20.7531 90.7819 15.9362 96 10.8765C101.218 5.81692 106.209 1 112 1C117.791 1 122.782 5.81692 128 10.8765V128H0V10.8765Z"
      {...props}
    />
  ),
  liquid: (props?: SVGProps<SVGPathElement>) => (
    <path
      d="M33.8348 75.942L14.6348 107.942C13.0351 110.608 14.9556 114 18.0648 114H109.935C113.044 114 114.965 110.608 113.365 107.942L94.1652 75.942C93.4423 74.7372 92.1403 74 90.7352 74H37.2648C35.8597 74 34.5577 74.7372 33.8348 75.942Z"
      {...props}
    />
  ),
  flask: (props?: SVGProps<SVGPathElement>) => (
    <path
      d="M7.09186 107.944L38.8955 53.8777C39.6187 52.6483 40 51.2479 40 49.8215V24.4721C40 21.7313 38.429 19.2145 35.9776 17.9888C33.5534 16.7767 32 14.288 32 11.5777C32 9.60179 33.6018 8 35.5777 8H92.4223C94.3982 8 96 9.60179 96 11.5777C96 14.288 94.4466 16.7767 92.0224 17.9888C89.571 19.2145 88 21.7313 88 24.4721V49.8215C88 51.2479 88.3813 52.6483 89.1045 53.8777L120.908 107.944C124.045 113.277 120.2 120 114.013 120H13.9873C7.80001 120 3.95476 113.277 7.09186 107.944Z"
      {...props}
    />
  ),
};

const bp = {
  begin: "0s",
  dur: "2s",
  repeatCount: "indefinite",
} as SVGProps<SVGAnimateElement>;

const LabLogo = () => {
  return (
    <svg
      width="256"
      height="256"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {defs.topfade({ id: "topfade" })}
        {elements.flask({ id: "flask" })}
        {elements.sine2f({ id: "sine", transform: "scale(2,0.4)" })}

        <mask id="mask">
          <rect fill="black" width="100%" height="100%"></rect>
          {elements.liquid({ fill: "white" })}
        </mask>

        <use href="#sine" id="wave" x="0" y="80">
          <animate attributeName="x" dur="2s" repeatCount="indefinite" to={-128} />
        </use>
      </defs>

      <use href="#flask" fill="#356" />
      <use href="#flask" fill="url(#topfade)" opacity={0.2} />
      <use href="#wave" fill="#fe3" mask="url(#mask)" />
      <use href="#wave" fill="url(#topfade)" mask="url(#mask)" opacity={0.2} />

      <circle id="bubble" cx="48" cy="72" fill="#FFFF70">
        <animate {...bp} attributeName="r" values="0;3;1.2;0;0;0;0" />
        <animate {...bp} attributeName="cy" values="75;25" />
      </circle>

      <circle id="bubble" cx="58" cy="70" fill="#FFFF70">
        <animate {...bp} begin="0.3s" dur="2.2s" attributeName="r" values="0;2;1;0;0;0;0" />
        <animate {...bp} begin="0.3s" dur="2.2s" attributeName="cy" values="75;25" />
      </circle>

      <circle id="bubble" cx="77" cy="70" fill="#FFFF70">
        <animate {...bp} begin="0.413s" dur="1.9s" attributeName="r" values="0;2;1;0;0;0;0" />
        <animate {...bp} begin="0.413s" dur="1.9s" attributeName="cy" values="75;25" />
      </circle>
    </svg>
  );
};

export default LabLogo;
