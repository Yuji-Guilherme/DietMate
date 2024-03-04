import type { CSSProperties } from 'react';
import type { SideBarIconsProps } from '.';

type ListIconProps = {
  circleStyle: CSSProperties;
  circleClassName: string;
} & SideBarIconsProps;

function ListIcon({
  svgClassName,
  pathClassName,
  circleClassName,
  pathStyle,
  circleStyle,
  ...props
}: ListIconProps) {
  return (
    <svg
      width="1.2608148mm"
      height="0.99995714mm"
      viewBox="0 0 1.2608148 0.99995714"
      version="1.1"
      id="svg1"
      className={svgClassName}
      {...props}
    >
      <g
        id="layer2"
        transform="matrix(0.08436445,0,0,0.08436445,-0.5831328,-2.8262164)"
      >
        <path
          className={pathClassName}
          style={{
            fill: 'none',
            fillOpacity: 1,
            strokeWidth: 1.54093,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
            paintOrder: 'normal',
            ...pathStyle
          }}
          d="m 12.423867,44.348178 8.662595,-0.0028"
          id="path18-7-3"
        />
        <path
          className={pathClassName}
          style={{
            fill: 'none',
            fillOpacity: 1,
            strokeWidth: 1.54093,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
            paintOrder: 'normal',
            ...pathStyle
          }}
          d="m 12.423867,39.606845 8.662595,-0.0028"
          id="path18-7"
        />
        <path
          className={pathClassName}
          style={{
            opacity: 1,
            fill: 'none',
            fillOpacity: 1,
            strokeWidth: 1.54093,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
            paintOrder: 'normal',
            ...pathStyle
          }}
          d="m 12.423867,34.865511 8.662595,-0.0028"
          id="path18"
        />
        <circle
          className={circleClassName}
          style={{
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 1.0668,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
            paintOrder: 'normal',
            ...circleStyle
          }}
          id="path17-3-7"
          cx="8.0974016"
          cy="44.16758"
          r="1.1853334"
        />
        <circle
          className={circleClassName}
          style={{
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 1.0668,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
            paintOrder: 'normal',
            ...circleStyle
          }}
          id="path17-3"
          cx="8.0974016"
          cy="39.426247"
          r="1.1853334"
        />
        <circle
          className={circleClassName}
          style={{
            opacity: 1,
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 1.0668,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
            paintOrder: 'normal',
            ...circleStyle
          }}
          id="path17"
          cx="8.0974016"
          cy="34.685421"
          r="1.1853334"
        />
      </g>
    </svg>
  );
}

export { ListIcon };
