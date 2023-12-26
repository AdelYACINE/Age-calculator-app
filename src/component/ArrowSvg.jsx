const ArrowSvg = () => {
  return (
    <button type="submit" className="arrow-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="44"
        viewBox="0 0 46 44"
        className="arrow-svg"
      >
        <g fill="none" stroke="white" strokeWidth="2">
          <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
        </g>
      </svg>
    </button>
  );
};

export default ArrowSvg;
