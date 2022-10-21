import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import DropDown from "../../components/Button/dropDown";
import Card from "../../components/Card";
import SearchInput from "../../components/Input/SearchInput";
import Tabs from "../../components/Tabs";
import { ComponentContext } from "../../context/componentProvider";

function Library() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortedComponents, setSortedComponents] = useState([]);
  const { setComponents } = useContext(ComponentContext);

  const dummyData = [
    {
      id: "werqwe-213dqwe-qw234-qfwefq",
      htmlTab: {
        id: "HTML",
        language: "html",
        value: `
        <div class="webflow-style-input">
          <input class="searchField" type='text' placeholder="Search for components"/>
        </div>`,
      },
      cssTab: {
        id: "CSS",
        language: "css",
        value: `@keyframes gradient {
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
      },
      jsTab: {
        id: "JS",
        language: "javascript",
        value: "document.body.style.backgroundColor = '#494949'; ",
      },
      tag: "Inputs",
    },
    { id: "we9rqwe-213234dqwe-qw234-qfwefq", tag: "Inputs" },
    { id: "wer6qwe-213dqwe-qw234-qwewefq", tag: "Animations" },
    { id: "we34rqwe-213d34we-qw234-qfwefq", tag: "Inputs" },
    { id: "6werqwe-213dq234we-qw234-qfwefq", tag: "Cards" },
    { id: "werq4we-213dq1we-qw234-qfw45efq", tag: "NavBar" },
    { id: "we423qwe-213dqwe-qw25534-qfwefq", tag: "Animations" },
    { id: "werq45we-213dqwe-qw234-qfwefq", tag: "Inputs" },
    { id: "we123rqwe-213dqwe-qw234-qfwefq", tag: "Cards" },
  ];

  const dropOptions = ["NavBar", "Inputs", "Animations", "Cards"];

  const tag = searchParams.get('tag')

  useEffect(() => {
    let arr = [];
    dummyData.map((data) => {
      if (!!tag && data.tag === tag) {
         return arr.push(data);
      }
      return
    });
    setSortedComponents(arr);
  }, [tag]);

  return (
    <div className="library-body">
      <div className="library-row">
        <div className="btn-container">
          <Link to="/create_component"><button className="btnYellow">Create Component</button></Link>
        </div>
        <SearchInput />
        <div className="btn-container">
          <DropDown name="Sort Components" dropOptions={dropOptions} isSorting/>
        </div>
      </div>
      <div className="card-container">
        {!!tag === false ? (
          <>
            {dummyData.map((data) => (
              <Link
                className="clickable-container"
                key={data.id}
                to={`/library/${data.id}`}
                onClick={() => setComponents(data)}
              >
                <Card tag={data.tag} />
              </Link>
            ))}
          </>
        ) : (
          <>
            {sortedComponents.map((data) => (
              <Link
                className="clickable-container"
                key={data.id}
                to={`/library/${data.id}`}
                onClick={() => setComponents(data)}
              >
                <Card tag={data.tag} />
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Library;
