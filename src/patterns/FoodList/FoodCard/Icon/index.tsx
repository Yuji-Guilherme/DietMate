import type { CSSProperties, SVGAttributes } from 'react';

type PenIconProps = {
  pathStyle: CSSProperties;
} & SVGAttributes<SVGElement>;

function PenIcon({ pathStyle, ...props }: PenIconProps) {
  return (
    <svg
      version="1.1"
      id="svg1"
      width="3.64417"
      height="3.6276093"
      viewBox="0 0 3.6441701 3.6276092"
      {...props}
    >
      <g id="g1" transform="translate(-0.38439056,-238.38951)">
        <path
          style={{
            fill: 'none',
            stroke: '#031818',
            strokeWidth: 0.3,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            ...pathStyle
          }}
          d="m 0.85199458,240.84611 -0.327611,1.03102 0.94429202,-0.24089 2.36073,-2.41855 c 0,0 0.192712,-0.33724 -0.115628,-0.58777 -0.30834,-0.25053 -0.674494,0.0385 -0.674494,0.0385 z"
          id="path1"
        />
      </g>
    </svg>
  );
}

export { PenIcon };
