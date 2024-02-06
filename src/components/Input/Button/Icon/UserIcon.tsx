import type { SVGAttributes } from 'react';

type UserIconProps = {
  svgClassName: string;
  pathClassName: string;
} & SVGAttributes<SVGElement>;

function UserIcon({ svgClassName, pathClassName, ...rest }: UserIconProps) {
  return (
    <svg
      width="1.089448mm"
      height="1.1691504mm"
      viewBox="0 0 1.089448 1.1691504"
      version="1.1"
      id="svg1"
      xmlSpace="preserve"
      className={svgClassName}
      {...rest}
    >
      <defs id="defs1" />
      <g id="layer2" transform="translate(-23.346727,-16.140781)">
        <path
          id="path4"
          style={{
            opacity: 1,
            fill: 'none',
            fillOpacity: 1,
            strokeWidth: 0.14,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
            paintOrder: 'stroke fill markers'
          }}
          className={pathClassName}
          d="m 23.891903,16.210781 c -0.158227,-2.68e-4 -0.286572,0.128077 -0.286304,0.286306 1.6e-4,0.15793 0.128373,0.285797 0.286304,0.28553 0.157634,-1.58e-4 0.285372,-0.1279 0.28553,-0.28553 2.7e-4,-0.15793 -0.127604,-0.286146 -0.28553,-0.286306 z m 0.474272,1.02915 c -5.17e-4,-0.230788 -0.212676,-0.417685 -0.474337,-0.41785 -0.261965,-2.11e-4 -0.474597,0.186799 -0.475111,0.41785"
        />
      </g>
    </svg>
  );
}

export { UserIcon };
