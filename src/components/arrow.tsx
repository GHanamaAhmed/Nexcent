import React, { SVGProps } from "react";

export default function Arrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12"
        // stroke={props?.stroke || "white"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
