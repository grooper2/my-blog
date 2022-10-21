import React, { useState } from "react";
import DropDown from "../../components/Button/dropDown";
import Tabs from "../../components/Tabs";
import { ReactComponent as CrossIcon } from "../../Assets/Icons/cross.svg";
import TagForm from "../../Forms/TagForm";

const CreateComponentPage = () => {
  const [isAddingTag, setIsAddingTag] = useState(false);
  const dropOptions = [
    "NavBar",
    "Inputs",
    "Animations",
    "Cards",
    "Buttons",
    "Forms",
    "Switch",
    "SideBar",
  ];
  return (
    <div className="library-body">
      <h2>Create Component</h2>
      <div className="Input">
        <input
          type="text"
          id="input"
          className="Input-text"
          placeholder="Component title ..."
          style={{ width: "100%" }}
        />
      </div>
      <div className="tag-container">
        <DropDown
          name="Select Tags"
          dropOptions={dropOptions}
          isSorting={false}
        />
      </div>
      <div className="tag-container">
        <p>Add a new tag</p>
        <CrossIcon
          className="crossIcon"
          onClick={() => setIsAddingTag(!isAddingTag)}
          style={isAddingTag ? { transform: "rotate(90deg)" } : {}}
        />
      </div>
      {isAddingTag && <TagForm />}
      <Tabs
        htmlValue=""
        htmlLanguage="html"
        cssValue=""
        cssLanguage="css"
        jsValue=""
        jsLanguage="javascript"
      />
      <button className="btnYellow">Submit</button>
    </div>
  );
};

export default CreateComponentPage;
