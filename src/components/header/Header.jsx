import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import usePreviousLocation from "../../contexts/usePreviousLocation";

const Header = forwardRef(
  ({ pageColor, triggerBlink, setTriggerBlink, onNavLinkClick }, headerRef) => {
    const [logo, setLogo] = useState(`${process.env.PUBLIC_URL}/img/logo.png`);
    const [destPath, setDestPath] = useState("");
    const [clicked, setClicked] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const previousLocation = usePreviousLocation();

    useEffect(() => {
      if (pageColor === "#FFFFFF") {
        setLogo(`${process.env.PUBLIC_URL}/img/logo.png`);
      } else if (pageColor === "#85ECE0") {
        setLogo(`${process.env.PUBLIC_URL}/img/logo_green.png`);
      } else if (pageColor === "#EC7979") {
        setLogo(`${process.env.PUBLIC_URL}/img/logo_red.png`);
      }
    }, [pageColor]);

    const handleNavLinkClick = (event, path) => {
      event.preventDefault();
      const shouldTriggerBlink =
        (location.pathname === "/about" ||
          location.pathname === "/home" ||
          location.pathname === "/projects") &&
        !triggerBlink;

      if (previousLocation) {
        const exceptionPaths = path !== location.pathname;
        if (shouldTriggerBlink && exceptionPaths) {
          setTriggerBlink(true);
          setDestPath(path);
          setClicked(true);
        } else {
          setDestPath(path);
          setClicked(true);
        }
      } else {
        if (shouldTriggerBlink) {
          setTriggerBlink(true);
          setDestPath(path);
          setClicked(true);
        } else {
          setDestPath(path);
          setClicked(true);
        }
      }

      document.body.classList.add("overflow-y-hidden");
      document.documentElement.classList.add("overflow-y-hidden");
      setMobileMenuOpen(false); // Close menu on navigation

      if (onNavLinkClick) {
        onNavLinkClick(event, path);
      }
    };

    useImperativeHandle(headerRef, () => ({
      handleNavLinkClick,
    }));

    useEffect(() => {
      if (!triggerBlink && clicked) {
        setClicked(false);
        navigate(destPath);
      }
      return () => {
        document.body.classList.remove("overflow-y-hidden");
        document.documentElement.classList.remove("overflow-y-hidden");
      };
    }, [triggerBlink, destPath, clicked, navigate]);

    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

    return (
      <div id="header">
        <nav id="header-navigation">
          <Link
            to="/home"
            onClick={(event) => handleNavLinkClick(event, "/home")}
            className={location.pathname === "/about" ? "invisible" : ""}
          >
            <img src={logo} alt="Logo_Nathan-Seung" />
          </Link>
          <button
            className="mobile-menu-toggle absolute right-6 top-4"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <span className="material-symbols-outlined">close</span>
            ) : (
              <span className="material-symbols-outlined">menu</span>
            )}
          </button>
          <ul
            id="header-navigation-list"
            className={isMobileMenuOpen ? "open" : ""}
          >
            {["/", "/home", "/about", "/projects"].map((path, idx) => {
              const labels = ["Intro", "Home", "About", "Projects"];
              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    style={{ color: pageColor }}
                    onClick={(event) => handleNavLinkClick(event, path)}
                    className="relative"
                  >
                    {labels[idx]}
                    <div
                      className="navitem-underline"
                      style={{ background: pageColor }}
                    />
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
);

export default Header;
