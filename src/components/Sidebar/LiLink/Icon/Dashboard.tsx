import type { SideBarIconsProps } from '.';

function DashboardIcon({
  svgClassName,
  pathClassName,
  pathStyle,
  ...props
}: SideBarIconsProps) {
  return (
    <svg
      width="1.3368531mm"
      height="1.2313524mm"
      viewBox="0 0 1.3368531 1.2313524"
      version="1.1"
      id="svg1"
      className={svgClassName}
      {...props}
    >
      <g id="layer1" transform="translate(-105.698,-147.88401)">
        <rect
          className={pathClassName}
          style={{
            fill: 'none',
            fillOpacity: 0,
            strokeWidth: 0.13,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            ...pathStyle
          }}
          id="rect1-6-1"
          width="0.49875814"
          height="0.58192885"
          x="106.46"
          y="148.468"
          ry="0.063760079"
          rx="0.044354837"
        />
        <rect
          className={pathClassName}
          style={{
            fill: 'none',
            fillOpacity: 0,
            strokeWidth: 0.13,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            ...pathStyle
          }}
          id="rect1"
          width="0.50985175"
          height="0.32135552"
          x="105.76343"
          y="148.729"
          ry="0.063760079"
          rx="0.044354837"
        />
        <rect
          className={pathClassName}
          style={{
            fill: 'none',
            fillOpacity: 0,
            strokeWidth: 0.13,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            ...pathStyle
          }}
          id="rect1-3"
          width="0.50985175"
          height="0.32135552"
          x="106.46"
          y="147.94901"
          ry="0.063760079"
          rx="0.044354837"
        />
        <rect
          className={pathClassName}
          style={{
            fill: 'none',
            fillOpacity: 0,
            strokeWidth: 0.13,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            ...pathStyle
          }}
          id="rect1-6"
          width="0.49875814"
          height="0.58192885"
          x="105.763"
          y="147.94901"
          ry="0.063760079"
          rx="0.044354837"
        />
      </g>
    </svg>
  );
}

export { DashboardIcon };
