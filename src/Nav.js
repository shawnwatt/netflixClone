import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.ScrollY > 100) {
         handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://banner2.cleanpng.com/20180629/eoe/kisspng-netflix-streaming-media-television-show-logo-netflix-logo-5b35b03b7c9120.2418554915302451795102.jpg"
        alt="logo"
      />

      <img
        className="nav__avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
        alt="logo"
      />
    </div>
  );
}

export default Nav;
