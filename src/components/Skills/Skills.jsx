import React from "react";
import "./Skills.css";
import Cards from "../S_Cards/S_Cards";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const Skills = () => {
  return (
    <div className="skills" id="Skills">
      <div className="s-info">
        <div className="s-head">
          <p>
            My{" "}
            <span style={{ color: "#FF0000", marginTop: "0.5rem" }}>
              SkillSet
            </span>{" "}
          </p>
        </div>
        <p className="s-body">
          Here are some languages and tools I tried. I mainly use Adobe and
          Figma for designing purposes
        </p>
      </div>
      <div className="s-card">
        <Cards
          header={"Frontend Developer"}
          l1={"HTML"}
          w1={"80%"}
          l2={"CSS"}
          w2={"70%"}
          l3={"Javascript"}
          w3={"65%"}
          l4={"React"}
          w4={"60%"}
        />
        <Cards header={"Backend Developer (soon)"} />
        <Cards
          header={"Designer"}
          l1={"Adobe Photoshop"}
          w1={"90%"}
          l2={"Adobe Illustrator"}
          w2={"95%"}
          l3={"Adobe Premiere Pro"}
          w3={"70%"}
          l4={"Figma"}
          w4={"75%"}
        />
      </div>
      <ParallaxProvider>
        <Parallax speed={-30}>
          <div className="s-innerWordCloud">
            <p>ReactJS</p>
            <p>CSS3</p>
            <p>HTML5</p>
            <p>Photoshop</p>
            <p>Figma</p>
            <p>Adobe</p>
            <p>ReactJS</p>
            <p>Illustrator</p>
            <p>ReactJS</p>
            <p>HTML5</p>
            <p>CSS3</p>
          </div>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
};

export default Skills;
