import React from "react";
import "./About.css";
import me from "../../img/me.png";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="a-head">
        About <span style={{ color: "var(--yellow)" }}>Me</span>
      </div>
      <div className="a-bodyContainer">
        <div className="a-body">
          <div className="a-bodyPic">
            <section className="picDiv">
              <svg
                style={{
                  position: "absolute",
                  height: "14rem",
                  width: "14rem",
                  top: "2%",
                }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <image width={"14rem"} preserveAspectRatio="none" href={me} />
              </svg>
            </section>
          </div>
          <div className="a-bodyInfo">
            <p>
              I'm Rigon Osmani, a self-taught developer from Kosovo who loves
              coding. I specialize in using JavaScript and React to build web
              applications, <br></br>
              <br></br>I'm passionate <b>about open source development. </b> If
              you want to collaborate or have any questions, feel free to reach
              out to me at rigonosmani01@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
