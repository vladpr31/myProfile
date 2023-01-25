import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
  MyProjectsLink,
} from "./AboutElements";
import { ScrollDown, ScrollLink } from "../Hero/HeroElements";
import blondie from "../../Assets/Blonde_businessman-512.png";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image src={blondie} alt="aboutHero" />
          <div className="AboutBio">
            Hello! My name is <strong>Vlad Propisnov</strong> I’m a recent
            Software Engineer Graduate, With a passion for Developing Games,
            Applications, and Websites. <br></br>Efficient and goal-oriented
            worker, with good self-learning skills.<br></br> I have a high
            degree of creativity and resourcefulness as well as excellent
            communication and interpersonal skills.
          </div>
          <div className="AboutBio tagline2">Technologies I Use</div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
