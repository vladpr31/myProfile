import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/"></Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            <span>Projects</span>
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            <span>About</span>
          </NavLink>

          <NavLink className="menu-item" to="contact" smooth={true}>
            <span>Contact</span>
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="cvBtn"
            href="https://drive.google.com/file/d/1e3vFfbEMuPSeztObJxABUc9VDing_KRb/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Download CV
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
