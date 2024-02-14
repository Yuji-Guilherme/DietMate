import type { SVGAttributes } from 'react';

type EyeLinedIconProps = {
  svgClassName: string;
  pathClassName: string;
} & SVGAttributes<SVGElement>;

function EyeLinedIcon({ svgClassName, pathClassName }: EyeLinedIconProps) {
  return (
    <svg
      width="1.7923024mm"
      height="1.3216982mm"
      viewBox="0 0 1.7923024 1.3216982"
      version="1.1"
      id="svg1"
      xmlSpace="preserve"
      className={svgClassName}
    >
      <defs id="defs1" />
      <g
        id="layer2"
        transform="matrix(0.08436445,0,0,0.08436445,0.07986717,-0.5821736)"
      >
        <circle
          style={{
            opacity: 1,
            fill: 'none',
            fillOpacity: 0,
            strokeWidth: 2.1336,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
            paintOrder: 'normal'
          }}
          className={pathClassName}
          id="path22"
          cx="9.6738949"
          cy="14.735752"
          r="2.3706667"
        />
        <path
          id="path21"
          style={{
            opacity: 1,
            fill: 'none',
            fillOpacity: 0,
            strokeWidth: 2.1336,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
            paintOrder: 'normal'
          }}
          className={pathClassName}
          d="m 9.2768206,21.496121 c 0.406024,-0.01586 5.7581124,0.532936 9.9544604,-6.800903 C 15.799813,8.6886384 11.588759,7.9705564 9.6756876,7.9675064 7.7626156,7.9644064 3.5515616,8.6825384 0.12009157,14.689105 4.0187266,21.506324 8.8707976,21.51198 9.2768206,21.496121 Z"
        />
        <path
          style={{
            display: 'inline',
            fill: 'none',
            fillOpacity: 0,
            strokeWidth: 2.1336,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none'
          }}
          className={pathClassName}
          d="M 3.0582079,21.041755 16.253985,8.4282515"
          id="path1-2"
        />
      </g>
    </svg>
  );
}

export { EyeLinedIcon };
