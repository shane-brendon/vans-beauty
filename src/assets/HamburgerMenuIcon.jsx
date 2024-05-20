const HamburgerMenuIcon = (props) => {
  const { fill, width = 24, height = 24, className } = props;
  return (
    <svg
      viewBox="0 0 512 512"
      height={height}
      width={width}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <g data-name="1" id="_1">
        <path
          d="M441.13,166.52h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z"
          fill={fill}
        />
        <path
          d="M441.13,279.72h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z"
          fill={fill}
        />
        <path
          d="M441.13,392.92h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default HamburgerMenuIcon;
