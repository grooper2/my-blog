import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Tabs from "../../components/Tabs";
import { ComponentContext } from "../../context/componentProvider";

const ComponentsPage = () => {
  const { components } = useContext(ComponentContext);
  // let { id } = useParams();
  console.log("component", components);

  const { cssTab, htmlTab, jsTab, id } = components;

  return (
    <div className="library-body">
      <Tabs
        htmlValue={htmlTab.value}
        htmlLanguage={htmlTab.language}
        cssValue={cssTab.value}
        cssLanguage={cssTab.language}
        jsValue={jsTab.value}
        jsLanguage={jsTab.language}
      />
    </div>
  );
};

export default ComponentsPage;
