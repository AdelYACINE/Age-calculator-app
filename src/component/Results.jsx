import { useContext } from "react";
import { Context } from "../context/Context";

const Results = () => {
  const { day, mounth, year } = useContext(Context);
  return (
    <div className="container-results">
      <p className="text">
        <span className="text-result">{year ? year : "- -"}</span> years
      </p>
      <p className="text">
        <span className="text-result">{mounth ? mounth : "- -"}</span> mounths
      </p>
      <p className="text">
        <span className="text-result">{day ? day : "- -"}</span> days
      </p>
    </div>
  );
};

export default Results;
