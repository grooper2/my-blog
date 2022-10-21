import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tabs from "../../components/Tabs";
import { ComponentContext } from "../../context/componentProvider";
import { formatter } from "../../utils";

const ComponentsPage = () => {
  const [savedComponent, setSavedComponent] = useState(null);
  const { components } = useContext(ComponentContext);

  const { cssTab, htmlTab, jsTab, id } = components;

  useEffect(() => {
    if (
      htmlTab?.value !== undefined ||
      cssTab?.value !== undefined ||
      jsTab?.value !== undefined
    ) {
      sessionStorage.removeItem("htmlValue");
      sessionStorage.removeItem("cssValue");
      sessionStorage.removeItem("jsValue");
      sessionStorage.setItem("htmlValue", JSON.stringify(formatter(htmlTab?.value, 'html')));
      sessionStorage.setItem("cssValue", JSON.stringify(formatter(cssTab?.value, 'css')));
      sessionStorage.setItem("jsValue", JSON.stringify(formatter(jsTab?.value, 'js')));
    }
  }, []);

  const savedHtml = sessionStorage.getItem("htmlValue");
  const initialHtml = JSON.parse(savedHtml);

  const savedCss = sessionStorage.getItem("cssValue");
  const initialCss = JSON.parse(savedCss);

  const savedJs = sessionStorage.getItem("jsValue");
  const initialJs = JSON.parse(savedJs);

  return (
    <div className="library-body">
      <Tabs
        htmlValue={formatter(htmlTab?.value, 'html') || initialHtml}
        htmlLanguage={htmlTab?.language}
        cssValue={formatter(cssTab?.value, 'css') || initialCss}
        cssLanguage={cssTab?.language}
        jsValue={formatter(jsTab?.value, 'js') || initialJs}
        jsLanguage={jsTab?.language}
      />
    </div>
  );
};

export default ComponentsPage;
