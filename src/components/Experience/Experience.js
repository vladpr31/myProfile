import React from "react";
import { Card } from "./ExperienceElements";
import SkillsIcon from "../../Assets/skills.png";
import personalSkills from "../../Assets/personalSkills.png";
import EducationIcon from "../../Assets/education.png";
const Experience = () => {
  return (
    <Card>
      <ul className="cards">
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src={SkillsIcon} />
            </div>
            <div className="card_content">
              <h2 className="card_title">Skills & Knowledge</h2>
              <p className="card_text">- Javascript/ReactJS</p>
              <p className="card_text">- NodeJS</p>
              <p className="card_text">- Java</p>
              <p className="card_text">- Python</p>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src={personalSkills} />
            </div>
            <div className="card_content">
              <h2 className="card_title">Personal Skills</h2>
              <p className="card_text">- Listening to feedbacks</p>
              <p className="card_text">- Quick & Eager Learner</p>
              <p className="card_text">- Good Communications</p>
              <p className="card_text">- Motivated and Passionate</p>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src={EducationIcon} />
            </div>
            <div className="card_content">
              <h2 className="card_title">Education</h2>
              <p className="card_text">
                - B.sc Software Engineer - Graduated from S.C.E College.
              </p>
              <p className="card_text">- Udemy Course: Fullstack Course</p>
              <p className="card_text">- Udemy Course: Docker & Kubernetes</p>
            </div>
          </div>
        </li>
      </ul>
    </Card>
  );
};

export default Experience;
