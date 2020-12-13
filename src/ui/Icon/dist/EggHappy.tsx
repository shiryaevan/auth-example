import * as React from "react";

function SvgEggHappy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="1em"
      viewBox="0 0 512 512"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M488 304c0 128.13-103.87 184-232 184S24 432.13 24 304 127.87 24 256 24s232 151.87 232 280z"
        fill="#ffc70d"
      />
      <path
        d="M256 456c-122.746 0-223.161-51.321-231.389-168.276C24.25 293.179 24 298.616 24 304c0 128.13 103.87 184 232 184s232-55.87 232-184c0-5.384-.25-10.821-.611-16.276C479.161 404.679 378.746 456 256 456z"
        fill="#f89f00"
      />
      <path
        d="M256 456c-122.746 0-223.161-51.321-231.389-168.276C24.25 293.179 24 298.616 24 304c0 128.13 103.87 184 232 184s232-55.87 232-184c0-5.384-.25-10.821-.611-16.276C479.161 404.679 378.746 456 256 456z"
        fill="#f89f00"
      />
      <ellipse cx={96} cy={232} fill="#f597a4" rx={24} ry={16} />
      <ellipse cx={416} cy={232} fill="#f597a4" rx={24} ry={16} />
      <path d="M256 16C123.055 16 16 173.555 16 304c0 120.223 89.719 192 240 192s240-71.777 240-192c0-130.445-107.055-288-240-288zm0 464c-140.258 0-224-65.793-224-176 0-123.2 99.922-272 224-272s224 148.8 224 272c0 110.207-83.742 176-224 176z" />
      <path d="M160 192a8 8 0 008-8 8 8 0 0116 0 8 8 0 0016 0 24 24 0 00-48 0 8 8 0 008 8zM320 192a8 8 0 008-8 8 8 0 0116 0 8 8 0 0016 0 24 24 0 00-48 0 8 8 0 008 8zM368 208a8 8 0 00-8 8c0 48.523-46.656 88-104 88s-104-39.477-104-88a8 8 0 00-16 0c0 57.348 53.828 104 120 104s120-46.652 120-104a8 8 0 00-8-8z" />
    </svg>
  );
}

export default SvgEggHappy;