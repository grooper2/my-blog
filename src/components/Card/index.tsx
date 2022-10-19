import React from "react";

const Card = () => {

    const htmlTab = {
        id: "HTML",
        language: "html",
        value: `
        <div class="webflow-style-input">
          <input class="searchField" type='text' placeholder="Type here ..."/>
        </div>`,
      };
      const cssTab = {
        id: "CSS",
        language: "css",
        value: `body{ 
            transform: scale(0.5);
        }
        @keyframes gradient {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 100% 0;
      }
    }
    
    .webflow-style-input {
      position: relative;
      display: flex;
      flex-direction: row;
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
      border-radius: 2px;
      padding: 1.4rem 2rem 1.6rem;
      background: rgba(57, 63, 84, 0.8);
    }
    
    .webflow-style-input::after {
      content: "";
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 999;
      height: 2px;
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
      background-position: 0% 0%;
      background: linear-gradient(
        to right,
        #b294ff,
        #57e6e6,
        #feffb8,
        #57e6e6,
        #b294ff,
        #57e6e6
      );
      background-size: 500% auto;
      animation: gradient 3s linear infinite;
    }
    
    .searchField {
      border-style: none;
      background: transparent;
      outline: none;
      flex-grow: 1;
      color: #bfd2ff;
      font-size: 1.8rem;
      line-height: 2.4rem;
      vertical-align: middle;
    }
    .searchField::-webkit-input-placeholder {
      color: #7881a1;
    }`,
      };
      const jsTab = {
        id: "JS",
        language: "javascript",
        value: "document.body.style.backgroundColor = '#494949'; ",
      };

    let srcDoc = `
    <html>
      <body>${htmlTab.value}</body>
      <style>${cssTab.value}</style>
      <script>${jsTab.value}</script>
    </html>`;

    const typeColor = (type : string) => {
      switch (type) {
        case "Nav Bar":
          return 'tag-teal'
          break;
        case 'Inputs':
          return 'tag-purple'
          break;
        case 'Animations':
          return 'tag-pink'
          break;
        case 'Cards':
          return 'tag-green'
        default:
          break;
      }
    }

    const obj = {
      type: 'Inputs',
      content : 'Input field with a animated gradient bottom border'
    }

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <iframe
            srcDoc={srcDoc}
            title="output"
            frameBorder="0"
            sandbox="allow-scripts"
            width="100%"
            height="100%"
          />
        </div>
        <div className="card-body">
          <span className={`tag ${typeColor(obj.type)}`}>{obj.type}</span>
          <h4>{obj.content}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
