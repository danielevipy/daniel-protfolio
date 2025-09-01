import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = ({ class_style, icon_style }) => {
  return (
    <div className={class_style}>
      <a
        className={icon_style}
        href="https://www.linkedin.com/in/danielevipy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        className={icon_style}
        href="https://github.com/danielevipy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
