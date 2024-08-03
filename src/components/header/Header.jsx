import { NavLink, Link } from "react-router-dom";

import "./Header.css";

function Header() {
  const logo = `${process.env.PUBLIC_URL}/img/logo.png`;

  return (
    <div id="header">
      {/* Header Component for Routing */}
      <nav id="header-navigation">
        <Link to="/">
          <img src={logo} alt="Logo_Nathan-Seung" />
        </Link>
        <ul id="header-navigation-list">
          <li>
            <NavLink to="/intro">Intro</NavLink>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
