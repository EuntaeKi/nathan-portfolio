import './Header.css';

function Header() {
  return (
    <>
    {/* Header Component for Routing */}
    <nav id="header-navigation">
      <a href="../../pages/main/index.html">
        <img src="../../img/Logo.png" alt="Logo_Nathan-Seung" />
      </a>
      <ul id="header-navigation-list">
        <li>
          <a href="../../pages/projects/index.html">Projects</a>
        </li>
        <li>
          <a href="../../pages/about/index.html">About</a>
        </li>
      </ul>
    </nav>
  </>
  );
}

export default Header;
