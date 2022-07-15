import React from "react";
import { Card } from "./ExperienceElements";
import SkillsIcon from "../../Assets/skills.png";
import personalSkills from "../../Assets/personalSkills.png";
import EducationIcon from "../../Assets/education.png";
const Experience = () => {
  return (
    <Card>
      <div class="container">
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img className="skills" src={SkillsIcon}></img>
              <h3>Skills</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                <li>Game Development</li>
                <li>Web Applications</li>
                <li>Photoshop</li>
                <li>MERN Stack</li>
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img className="personal" src={personalSkills}></img>
              <h3>Interpersonal</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                <li>Self Learning</li>
                <li>High Motivation</li>
                <li>Love Challenges</li>
                <li>Verbal Communication</li>
                <li>Listening Skills.</li>
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img className="education" src={EducationIcon}></img>
              <h3>Education</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>2018-2022</p>
              <p>- Software Engineer, SCE College</p>
              <br></br>
              <p>03/22 - 05/22</p>
              <p>- Udemy Fullstack Course</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Experience;
