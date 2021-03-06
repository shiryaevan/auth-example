import * as React from "react";

function SvgEye(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19.9 11.7s-.8-1-2.1-2c-1.8-1.3-3.8-2-5.8-2s-4 .7-5.8 2c-1.3 1-2.1 1.9-2.1 2-.2.2-.2.5 0 .7 0 0 .8 1 2.1 2 1.8 1.3 3.8 2 5.8 2s4-.7 5.8-2c1.3-1 2.1-1.9 2.1-2 .1-.3.1-.5 0-.7zm-4.7.3c0 1.7-1.4 3.2-3.2 3.2S8.8 13.7 8.8 12s1.4-3.2 3.2-3.2 3.2 1.5 3.2 3.2zm-9.9 0c.5-.5 1.6-1.6 3.1-2.3-.4.6-.7 1.4-.7 2.3 0 .9.3 1.7.7 2.3-.5-.2-1-.5-1.5-.9-.7-.5-1.3-1.1-1.6-1.4zm11.8 1.4c-.5.4-1 .7-1.5.9.4-.7.7-1.5.7-2.3s-.3-1.7-.7-2.3c.5.2 1 .5 1.5.9.7.5 1.3 1.1 1.6 1.4-.3.3-.9.9-1.6 1.4zM12 11.1c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" />
    </svg>
  );
}

export default SvgEye;
