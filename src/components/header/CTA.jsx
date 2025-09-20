import React from "react";
import CV from "../../assets/Daniel_Levi_0509773977_Software Developer_CV_2026.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={CV}
        download="Daniel_Levi_0509773977_Software Developer_CV_2026"
        className="btn"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
