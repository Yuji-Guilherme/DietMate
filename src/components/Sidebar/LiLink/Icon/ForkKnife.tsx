import type { SideBarIconsProps } from '.';

function ForkKnifeIcon({
  svgClassName,
  pathClassName,
  pathStyle,
  ...props
}: SideBarIconsProps) {
  return (
    <svg
      width="1.0813372mm"
      height="1.2110316mm"
      viewBox="0 0 1.0813372 1.2110316"
      version="1.1"
      id="svg1"
      className={svgClassName}
      {...props}
    >
      <g id="layer2" transform="translate(-23.353146,-16.150828)">
        <g
          id="layer2-2"
          transform="matrix(0.15242798,0,0,0.15242798,19.068004,16.171115)"
          style={{ strokeWidth: 0.997192, strokeDasharray: 'none' }}
        >
          <g
            id="g2"
            style={{
              display: 'inline',
              strokeWidth: 0.997192,
              strokeDasharray: 'none'
            }}
            transform="translate(0,-14.550773)"
          >
            <path
              className={pathClassName}
              id="path1-8"
              style={{
                display: 'inline',
                opacity: 1,
                fill: 'none',
                fillOpacity: 1,
                strokeWidth: 0.852862,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeDasharray: 'none',
                strokeOpacity: 1,
                ...pathStyle
              }}
              d="m 28.543755,14.850773 c 0,0 -0.01584,1.094659 0.01034,2.261361 0.01271,0.566426 0.65492,1.127228 1.397331,0.992704 m 0,0 5.16e-4,10e-4 5.17e-4,-10e-4 c -3.38e-4,6.2e-5 -6.95e-4,-6.1e-5 -0.001,0 z m 10e-4,0 c 0.742414,0.134529 1.384617,-0.425759 1.397331,-0.992187 0.02618,-1.166702 0.01034,-2.261878 0.01034,-2.261878"
            />
            <path
              className={pathClassName}
              style={{
                opacity: 1,
                fill: 'none',
                fillOpacity: 1,
                strokeWidth: 0.852862,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeDasharray: 'none',
                strokeOpacity: 1,
                ...pathStyle
              }}
              d="m 29.951718,14.857725 -0.0022,7.076067"
              id="path2"
            />
          </g>
          <path
            className={pathClassName}
            style={{
              display: 'inline',
              opacity: 1,
              fill: 'none',
              fillOpacity: 1,
              strokeWidth: 0.852862,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
              ...pathStyle
            }}
            d="m 34.775921,7.3854181 0.0043,-7.08103437 c 0,0 -1.689805,-0.2063533 -1.723479,1.25361117 -0.04673,2.0258826 -0.02252,2.4789889 0.09776,2.7408461 0.120282,0.2618581 0.290281,0.4468437 1.478806,0.468115"
            id="path3"
          />
        </g>
      </g>
    </svg>
  );
}

export { ForkKnifeIcon };
