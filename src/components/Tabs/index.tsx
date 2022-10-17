import React, { useState } from "react";
import IDE from "../IDEComponent";

function Tabs() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const ideTabs = [
    {
      id: "HTML",
      language: "xml",
      value: "<input className='something' type='something />",
    },
    {
      id: "CSS",
      language: "css",
      value: "<input className='css' type='something />",
    },
    {
      id: "JS",
      language: "javascript",
      value: "<input className='js' type='something />",
    },
  ];

  const srcDoc = (
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  );

  const setLanguage = (lan: string) => {
    if (lan === 'xml') {
        return setHtml
    }else if(lan === 'css'){
        return setCss
    }else if(lan === 'javascript'){
        return setJs
    }
  }

  return (
    <div className="tabset">
      <input
        type="radio"
        name="tabset"
        id="tab1"
        aria-controls="HTML"
        checked
      />
      <label htmlFor="tab1">HTML</label>

      <input type="radio" name="tabset" id="tab2" aria-controls="CSS" />
      <label htmlFor="tab2">CSS</label>

      <input type="radio" name="tabset" id="tab3" aria-controls="JS" />
      <label htmlFor="tab3">JS</label>
      <div className="tab-panels">
        {ideTabs.map((tab) => (
          <section key={tab.id} id={tab.id} className="tab-panel">
            <IDE language={tab.language} value={tab.value} onChange={setLanguage(tab.language)}/>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
