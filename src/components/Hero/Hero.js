import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import profilePic from "../../Assets/hero.png";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import Arrow from "../../Assets/right-dowb.png";
import TextScramble from "@twistezo/react-text-scramble/lib/TextScramble";
import "./Hero";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const h5Text = ["I am a Software Engineer"];
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>My Name Is</h1>
            <h1>Vlad Propisnov</h1>
            <h5>
              <TextScramble texts={h5Text} />
            </h5>
            <p>
              I’m a recent Software Engineer Graduate, With a passion for
              Developing Games, Applications, and Websites.
            </p>
          </HeroLeft>
          <HeroRight>
            <Image src={profilePic} alt="man-svgrepo" />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Get To Know Me More
            <img src={Arrow} alt="scroll-down-Arrow" />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
