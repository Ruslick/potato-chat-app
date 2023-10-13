import * as React from 'react';
import { SVGProps } from 'react';
const SvgHamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 39 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2 11H37'
      stroke={props.stroke}
      stroke-width={props.strokeWidth}
      stroke-linecap='round'
    />
    <path
      d='M2 2H37'
      stroke={props.stroke}
      stroke-width={props.strokeWidth}
      stroke-linecap='round'
    />
    <path
      d='M2 20H37'
      stroke={props.stroke}
      stroke-width={props.strokeWidth}
      stroke-linecap='round'
    />
  </svg>
);
export default SvgHamburger;
