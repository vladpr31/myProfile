import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

const SiderBar = styled.div`
  background: #151418;
  position: fixed;
  height: 100%;
  width: 100%;
  /* top: 0; */
  left: 0;
  z-index: 999;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  font-size: 2rem;
  color: #fff;
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
`;
export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .menu-item + .menu-item {
    margin-top: 2rem;
  }
`;

export const NavLink = styled(ScrollLink)`
  color: #fff;
  cursor: pointer;
  font-size: 1.7rem;

  &:hover {
    color: rgb(119, 119, 121);
  }
`;

export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  a {
    font-size: 25px;
    overflow: hidden;
    color: white;
    background-color: transparent;
    height: fit-content;
    width: fit-content;
    border: 2.5px solid;
    box-shadow: 0 0 20px #f37335, 0 0 20px #fdc830, 0 0 20px #03e9f4,
      0 0 20px #f37335;
    background: linear-gradient(
      to top,
      #fdc830,
      #f37335
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    background-size: 500% 200%;
    background-position: 25% 50%;
    font-family: inherit;
    font-weight: 500;
  }
`;

function Dropdown({ isOpen, toggle }) {
  return (
    <SiderBar isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle} />
      <NavMenu>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="projects"
          smooth={true}
        >
          Projects
        </NavLink>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="about"
          smooth={true}
        >
          About
        </NavLink>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="contact"
          smooth={true}
        >
          Contact
        </NavLink>
      </NavMenu>
      <NavBtn onClick={toggle}>
        <a
          className="btn PrimaryBtn"
          href="https://drive.google.com/uc?export=download&id=1mVp-L8Gx3vyOY3phIgxNYKq4aXYI_vIY"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </NavBtn>
    </SiderBar>
  );
}

export default Dropdown;
