import React from "react";
import { Card } from "./ExperienceElements";
const Experience = () => {
  return (
    <Card>
      <div class="container">
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img src="https://cdn-icons.flaticon.com/png/512/2703/premium/2703996.png?token=exp=1657763951~hmac=9c7de1bf51c6712539e8543821ebb452"></img>
              <h3>Skills</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                <li>Game Development</li>
                <br></br>
                <li>Web Applications</li>
                <br></br>
                <li>Photoshop</li>
                <br></br>
                <li>MERN Stack</li>
                <br></br>
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img src="https://cdn-icons-png.flaticon.com/512/4727/4727496.png"></img>
              <h3>Interpersonal</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                <li>Self Learning</li>
                <br></br>
                <li>High Motivation</li>
                <br></br>
                <li>Love Challenges</li>
                <br></br>
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img src="https://cdn-icons.flaticon.com/png/512/2936/premium/2936735.png?token=exp=1657764592~hmac=014b931bdafcaae8e100c3108c29b31b"></img>
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
