import React from "react";
import styled from "styled-components";
import bottomWave from "../../Assets/wave.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-brands-svg-icons";
const FooterSection = styled.div`
  background-image: url(${bottomWave});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: absolute;

  span {
    position: absolute;
    margin-left: -215px;
    bottom: 2rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
    ul {
      display: flex;
      position: absolute;
      transform: translate(-15%, -100%);
    }

    ul li {
      list-style: none;
    }

    ul li a {
      width: 60px;
      height: 60px;
      background-color: black;
      text-align: center;
      line-height: 80px;
      font-size: 35px;
      margin: 0 10px;
      display: block;
      border-radius: 50%;
      position: relative;
      overflow: hidden;
      border: 3px solid #fff;
      z-index: 1;
    }

    ul li a .icon {
      position: relative;
      color: #white;
      transition: 0.5s;
      z-index: 3;
      top: -20%;
    }

    ul li a:hover .icon {
      color: #fff;
      transform: rotateY(360deg);
    }

    ul li a:before {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 100%;
      background: #f00;
      transition: 0.5s;
      z-index: 2;
    }

    ul li a:hover:before {
      top: 0;
    }

    ul li:nth-child(1) a:before {
      background: #3b5999;
    }

    ul li:nth-child(2) a:before {
      background: #6cc644;
    }

    ul li:nth-child(3) a:before {
      background: #0077b5;
    }
    @media screen and (max-width: 768px) {
      left: 75%;
    }
    @media screen and (max-width: 780px) {
      left: 82%;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span>
          <ul>
            <li>
              <a href="https://www.facebook.com/vlad.ponchik">
                <FontAwesomeIcon className="icon" icon={Icons.faFacebook} />
              </a>
            </li>
            <li>
              <a href="https://github.com/vladpr31">
                <FontAwesomeIcon className="icon" icon={Icons.faGithub} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vlad-propisnov-90803620a/">
                <FontAwesomeIcon className="icon" icon={Icons.faLinkedin} />
              </a>
            </li>
            <li></li>
          </ul>
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;
