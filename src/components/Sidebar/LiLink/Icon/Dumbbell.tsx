import type { SideBarIconsProps } from '.';

function DumbbellIcon({
  svgClassName,
  pathClassName,
  pathStyle,
  ...props
}: SideBarIconsProps) {
  return (
    <svg
      width="1.3106562mm"
      height="1.2970765mm"
      viewBox="0 0 1.3106562 1.2970765"
      version="1.1"
      id="svg1"
      className={svgClassName}
      {...props}
    >
      <g
        id="layer2"
        transform="matrix(0.08436445,0,0,0.08436445,-1.7578881,-0.80544841)"
      >
        <path
          className={pathClassName}
          id="path23-9-3"
          style={{
            fill: 'none',
            fillOpacity: 0,
            stroke: '#f2f2f2',
            strokeWidth: 1.74271,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
            paintOrder: 'normal',
            ...pathStyle
          }}
          d="m 33.109327,24.059439 2.400181,-2.536638 z"
        />
        <path
          className={pathClassName}
          id="path24"
          style={{
            fill: 'none',
            fillOpacity: 0,
            stroke: '#f2f2f2',
            strokeWidth: 2.08705,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
            paintOrder: 'normal',
            ...pathStyle
          }}
          d="m 26.924555,11.25253 -4.613642,4.745459 z m -1.13244,3.175622 6.626866,6.560957 z m 9.071497,4.020459 -4.553723,4.805377 z"
        />
        <path
          className={pathClassName}
          id="path23-9"
          style={{
            fill: 'none',
            fillOpacity: 0,
            stroke: '#f2f2f2',
            strokeWidth: 1.74271,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
            paintOrder: 'normal',
            ...pathStyle
          }}
          d="m 24.131239,10.409846 -2.431542,2.506591 z"
        />
      </g>
    </svg>
  );
}

export { DumbbellIcon };
