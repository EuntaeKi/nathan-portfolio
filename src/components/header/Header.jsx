import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";

import "./Header.css";
import usePreviousLocation from '../../contexts/usePreviousLocation';

function Header({ pageColor, triggerBlink, setTriggerBlink }) {
  const [logo, setLogo] = useState(`${process.env.PUBLIC_URL}/img/logo.png`);
  const [destPath, setDestPath] = useState("");
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const previousLocation = usePreviousLocation();

  // Change the pageColor of logo based on the parameter
  useEffect(() => {
    if (pageColor === "#FFFFFF") {
      setLogo(`${process.env.PUBLIC_URL}/img/logo.png`);
    } else if (pageColor === "#85ECE0") {
      setLogo(`${process.env.PUBLIC_URL}/img/logo_green.png`);
    } else if (pageColor === "#EC7979") {
      setLogo(`${process.env.PUBLIC_URL}/img/logo_red.png`);
    }
  }, [pageColor, setLogo]);

  // Trigger blink effect before navigating via click 
  const handleNavLinkClick = (event, path) => {
    // Prevent navigation
    event.preventDefault();

    const shouldTriggerBlink = ((location.pathname === "/about" || location.pathname === "/home" || location.pathname === "/projects") && !triggerBlink);

    if (previousLocation) {
      const exceptionPaths = (path !== location.pathname);
      if (shouldTriggerBlink && exceptionPaths) {
        setTriggerBlink(true);
        setDestPath(path);
        setClicked(true);
      } else {
        setDestPath(path);
        setClicked(true);
      }
    } else { // When user refreshes
      if (shouldTriggerBlink) {
        setTriggerBlink(true);
        setDestPath(path);
        setClicked(true);
      } else {
        setDestPath(path);
        setClicked(true);
      }
    }

    document.body.classList.add('overflow-y-hidden');
    document.documentElement.classList.add('overflow-y-hidden');
  };

  // Blink Finished & Clean up
  useEffect(() => {
    if (!triggerBlink && clicked) {
      setClicked(false);
      navigate(destPath);
    }
    return () => {
      document.body.classList.remove('overflow-y-hidden');
      document.documentElement.classList.remove('overflow-y-hidden');
    };
  }, [triggerBlink, destPath, clicked, setClicked, navigate])

  return (
    <div id="header">
      <nav id="header-navigation">
        <Link to="/home">
          <img src={logo} alt="Logo_Nathan-Seung" />
        </Link>
        <ul id="header-navigation-list">
          <li>
            <NavLink
              to="/"
              style={{ color: pageColor }}
              onClick={(event) => handleNavLinkClick(event, "/")}
              className="relative"
            >
              Intro
              <div className="navitem-underline" style={{ background: pageColor }} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home"
              style={{ color: pageColor }}
              onClick={(event) => handleNavLinkClick(event, "/home")}
              className="relative"
            >
              Home
              <div className="navitem-underline" style={{ background: pageColor }} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={{ color: pageColor }}
              onClick={(event) => handleNavLinkClick(event, "/about")}
              className="relative"
            >
              About
              <div className="navitem-underline" style={{ background: pageColor }} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              style={{ color: pageColor }}
              onClick={(event) => handleNavLinkClick(event, "/projects")}
              className="relative"
            >
              Projects
              <div className="navitem-underline" style={{ background: pageColor }} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
