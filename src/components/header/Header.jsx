import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import "./Header.css";

function Header({ pageColor }) {
  const [logo, setLogo] = useState(`${process.env.PUBLIC_URL}/img/logo.png`);

  // Change the pageColor of logo based on the parameter
  useEffect(() => {
    if (pageColor === "#FFFFFF") {
      setLogo(`${process.env.PUBLIC_URL}/img/logo.png`)
    } else if (pageColor === "#85ECE0") {
      setLogo(`${process.env.PUBLIC_URL}/img/logo_green.png`)
    } else if (pageColor === "#EC7979") {
      setLogo(`${process.env.PUBLIC_URL}/img/logo_red.png`)
    }
  }, [pageColor, setLogo])

  return (
    <div id="header">
      <nav id="header-navigation">
        <Link to="/home">
          <img src={logo} alt="Logo_Nathan-Seung" />
        </Link>
        <ul id="header-navigation-list">
          <li>
            <NavLink to="/" style={{ color: pageColor }}>Intro</NavLink>
          </li>
          <li>
            <NavLink to="/home" style={{ color: pageColor }}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" style={{ color: pageColor }}>About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
