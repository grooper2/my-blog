import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tabs from "../../components/Tabs";
import { ComponentContext } from "../../context/componentProvider";

const ComponentsPage = () => {
  const [savedComponent, setSavedComponent] = useState(null)
  const { components } = useContext(ComponentContext);

  const { cssTab, htmlTab, jsTab, id } = components;

  console.log(cssTab.id === undefined)

  useEffect(() => {
    if(!!components){
      localStorage.setItem('htmlValue', htmlTab.value)
      localStorage.setItem('cssValue', cssTab.value)
      localStorage.setItem('jsValue', jsTab.value)
    }
    console.log(localStorage.getItem('htmlValue'))
  }, [])

  return (
    <div className="library-body">
      <Tabs
        htmlValue={htmlTab?.value}
        htmlLanguage={htmlTab?.language}
        cssValue={cssTab?.value}
        cssLanguage={cssTab?.language}
        jsValue={jsTab?.value}
        jsLanguage={jsTab?.language}
      />
    </div>
  );
};

export default ComponentsPage;
