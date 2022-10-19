import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ReactComponent as SortIcon } from "../../Assets/Icons/sortIcon.svg";

type DropDownProps = {
  dropOptions: string[];
  name: string;
};

const DropDown: React.FunctionComponent<DropDownProps> = ({
  dropOptions,
  name,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="sec-center">
      <input
        type="checkbox"
        id="dropdown"
        name="dropdown"
        className="dropdown"
      />
      <label className="for-dropdown" htmlFor="dropdown">
        {name}
        <SortIcon className="uil uil-arrow-down" />
      </label>
      <div className="section-dropdown">
        <a
          onClick={() => {
            const param = searchParams.get("tag");

            if (param) {
              searchParams.delete("tag");

              setSearchParams(searchParams);
            }
          }}
        >
          Show All
        </a>
        <div className="divider" />
        {dropOptions.map((option) => (
          <a
            onClick={() => {
              setSearchParams({ tag: `${option}` });
            }}
            key={option}
          >
            {option}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
