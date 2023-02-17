import React from "react";
import "./Intro.css";
import githubW from "../../img/githubW.png";
import linkedinW from "../../img/linkedinW.png";
import telegramW from "../../img/telegramW.png";

const Intro = () => {
  return (
    <div className="intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <p style={{ fontSize: "1.25rem" }}>Hello, I'm</p>
          <p className="name">Rigon Osmani</p>
          <p className="i-info">Front-end Developer</p>
        </div>
        <div className="i-connect">
          <a
            href="https://github.com/rigonosmani"
            target="_blank"
            rel="noreferrer"
            style={{ padding: "5px" }}
          >
            <img src={githubW} alt="github" height={70} width={70} />
          </a>
          <a
            href="https://www.linkedin.com/in/rigon-osmani-191838259/"
            target="_blank"
            rel="noreferrer"
            style={{ padding: "5px" }}
          >
            <img src={linkedinW} alt="linkedin" height={70} width={70} />
          </a>
          <a href="https://t.me/rigonosmani" target="_blank" rel="noreferrer">
            <img src={telegramW} alt="telegram" height={70} width={70} />
          </a>
        </div>
      </div>
      <div className="i-right">
        <div className="i-shape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 725 990"
          >
            <path
              fill="#FF0000"
              stroke="#FF0000"
              d="M209.5 0H725v934.5L8 218.5q-3.5-4-2-13l2-4L209.5 0z"
            ></path>
          </svg>
        </div>
        <div className="i-box">
          <div>
            <p>
              &nbsp;&nbsp;class <b>function Person() </b> {"{"}
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; const [name, setName] =
              useState("RigonOsmani");
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; const [age, setAge] =
              useState(new Date().getFullYear() - 2001);
            </p>

            <p>
              &nbsp;&nbsp;<b>return{"("} </b>
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <b>{"<div>"}</b>
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <b>{"<h1>{name}</h1>"}</b>
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <b>{"<p>Age: {age}</p>"}</b>
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <b>{"<div>"}</b>
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>{");"} </b>
            </p>

            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
