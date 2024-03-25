import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { ImStackoverflow } from 'react-icons/im';

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
      <a
        className={icon_style}
        href="https://stackoverflow.com/users/5614722/daniel-levi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImStackoverflow />
      </a>
    </div>
  );
};

export default HeaderSocials;
