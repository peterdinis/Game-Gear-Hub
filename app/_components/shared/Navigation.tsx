import { FC } from "react";

const Navigation: FC = () => {
  return (
    <header className="header">
      <div className="overlay" data-overlay></div>

      <div className="container">
        <a href="#" className="logo">
          image
        </a>

        <button className="nav-open-btn" data-nav-open-btn>
          rrrrr
        </button>

        <nav className="navbar" data-nav>
          <div className="navbar-top">
            <a href="#" className="logo">
              image
            </a>

            <button className="nav-close-btn" data-nav-close-btn>
              rrrr
            </button>
          </div>

          <ul className="navbar-list">
            <li>
              <a href="#hero" className="navbar-link">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="navbar-link">
                About
              </a>
            </li>

            <li>
              <a href="#tournament" className="navbar-link">
                Tournament
              </a>
            </li>

            <li>
              <a href="#team" className="navbar-link">
                Team
              </a>
            </li>

            <li>
              <a href="#gears" className="navbar-link">
                Gears
              </a>
            </li>

            <li>
              <a href="#contact" className="navbar-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="search">rrrrrrrrr</button>

          <button className="btn-sign_in">
            <div className="icon-box">rrrrrrrrr</div>

            <span>Log-in</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
