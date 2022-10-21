import React from "react";
import DropDown from "../components/Button/dropDown";

const TagForm = () => {
  return (
    <div className="Input">
      <input
        type="text"
        id="input"
        className="Input-text"
        placeholder="Tag name ..."
        style={{width: '50%'}}
      />
      <button type="submit" className='btnYellow'>Submit Tag</button>
    </div>
  );
};

export default TagForm;
