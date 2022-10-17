import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { githubDark } from "@uiw/codemirror-theme-github";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import { xml } from "@codemirror/lang-xml";

function IDE({ language, value, onChange }) {
  function handleChange(editor, data, value) {
    onChange(value);
  }

  console.log(language);
  return (
    <CodeMirror
      value={value}
      height="600px"
      width="900px"
      theme={githubDark}
      extensions={
        language === "javascript"
          ? [javascript({ jsx: true })]
          : language === "css"
          ? [StreamLanguage.define(css)]
          : language === "xml"
          ? [StreamLanguage.define(xml)]
          : []
      }
      onChange={onChange}
    />
  );
}

export default IDE;
