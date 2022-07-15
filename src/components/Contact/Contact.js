import React from "react";
import { ContactWrapper, Email } from "./ContactElements";
function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <Email>
            <span>Vladip31@gmail.com</span>
            <a
              className="btn PrimaryBtn"
              href="mailto:Vladip31@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Mail
            </a>
          </Email>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
