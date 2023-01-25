import React from "react";
import { Card } from "./ExperienceElements";
import SkillsIcon from "../../Assets/skills.png";
import personalSkills from "../../Assets/personalSkills.png";
import EducationIcon from "../../Assets/education.png";
const Experience = () => {
  return (
    <Card>
      <ul class="cards">
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img src={SkillsIcon} />
            </div>
            <div class="card_content">
              <h2 class="card_title">Skills & Knowledge</h2>
              <p class="card_text">
                <p>- Javascript</p>
                <p>- ReactJS</p>
                <p>- Python</p>
                <p>- NodeJS</p>
              </p>
            </div>
          </div>
        </li>
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img src={personalSkills} />
            </div>
            <div class="card_content">
              <h2 class="card_title">Personal Skills</h2>
              <p class="card_text">
                <p>- Listening to feedbacks</p>
                <p>- Quick & Eager Learner</p>
                <p>- Good Communications</p>
                <p>- Motivated and Passionate</p>
              </p>
            </div>
          </div>
        </li>
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img src={EducationIcon} />
            </div>
            <div class="card_content">
              <h2 class="card_title">Education</h2>
              <p class="card_text">
                <p>- B.sc Software Engineer - Graduated from S.C.E College.</p>
                <p>- Udemy Course: Fullstack Course by Angela Yu</p>
                <p>
                  - Udemy Course: Docker & Kubernetes by Maximilian
                  Schwarzmüller
                </p>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </Card>
  );
};

export default Experience;
