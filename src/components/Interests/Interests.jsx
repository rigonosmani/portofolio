import React from "react";
import "./Interests.css";

const Interests = () => {
  return (
    <div className="interests">
      <div className="in-head">
        <p>
          Things <span style={{ color: "var(--yellow)" }}>I</span> Love
        </p>
      </div>
      <div className="in-cards">
        <div className="in-card">
          <section className="card-img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 265 265"
            >
              <path
                fill="#FFF"
                stroke="#FFF"
                d="M0 0h265v265H0V0zm194 120q-11 2-18 8-7 5-10 14l-2 10 2 14 8 13 9 6 30 14q7 3 5 15-3 6-11 7h-10l-9-4-10-11-21 13 5 8 14 11 19 6q24 2 37-8 9-7 12-20v-14l-6-14-13-12-30-14-5-5 1-9q3-5 10-6l9 2 8 9 19-12-4-7q-11-16-39-14zm-75 1v90l-2 6-7 4q-8 1-11-2l-8-11-21 13 3 7q9 13 28 16 22 2 33-8 6-6 9-14l2-10v-91h-26z"
              ></path>
            </svg>
          </section>
          <p className="card-title">Javascript</p>
          <p className="card-text">
            I extremely love to code in Javascript, it's fun
          </p>
        </div>

        <div className="in-card">
          <section className="card-img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg-inline--fa fa-code fa-w-20"
              data-icon="code"
              data-prefix="fas"
              viewBox="0 0 640 512"
              height={40}
            >
              <path
                fill="#FFF"
                d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"
              ></path>
            </svg>
          </section>
          <p className="card-title">Coding</p>
          <p className="card-text">
            I love to code in differnt languages in free time
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interests;
