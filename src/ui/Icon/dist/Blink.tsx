import * as React from "react";

function SvgBlink(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19.9 11.7s-.8-1-2.1-2c-1.8-1.3-3.8-2-5.8-2s-4 .7-5.8 2c-1.3 1-2.1 1.9-2.1 2-.2.2-.2.5 0 .7 0 0 .6.8 1.6 1.6L5 15.5c-.1.3 0 .6.3.8.1 0 .2.1.3.1.2 0 .4-.1.5-.3l.7-1.3c.6.4 1.2.7 1.8.9L7.9 17c-.1.3 0 .6.3.8.1 0 .2.1.3.1.2 0 .4-.1.5-.3l.7-1.5c.6.2 1.3.3 1.9.3v1.3c0 .3.3.6.6.6s.6-.3.6-.6v-1.3c.6 0 1.3-.1 1.9-.3l.7 1.5c.1.2.3.3.5.3.1 0 .2 0 .3-.1.3-.1.4-.5.3-.8l-.7-1.3c.6-.2 1.2-.6 1.8-.9L18 16c.1.2.3.3.5.3.1 0 .2 0 .3-.1.3-.1.4-.5.3-.8l-.8-1.4c1-.8 1.6-1.6 1.6-1.6.1-.3.1-.5 0-.7zm-2.8 1.7c-1.6 1.1-3.3 1.7-5.1 1.7-1.8 0-3.5-.6-5.1-1.7-.7-.5-1.3-1.1-1.6-1.4.3-.3.9-.9 1.6-1.4 1.6-1.1 3.3-1.7 5.1-1.7 1.8 0 3.5.6 5.1 1.7.7.5 1.3 1.1 1.6 1.4-.3.3-.9.9-1.6 1.4z" />
    </svg>
  );
}

export default SvgBlink;
