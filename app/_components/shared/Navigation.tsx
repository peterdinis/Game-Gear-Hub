import { FC } from 'react';

const Navigation: FC = () => {
  return (
    <header className="header bg-black text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a href="#" className="logo">
          <img src="/logo.png" alt="GameX" className="h-8" />
        </a>
        <nav className="hidden md:flex space-x-6">
          <a href="#hero" className="navbar-link">
            Home
          </a>
          <a href="#about" className="navbar-link">
            About
          </a>
          <a href="#tournament" className="navbar-link">
            Tournament
          </a>
          <a href="#team" className="navbar-link">
            Team
          </a>
          <a href="#gears" className="navbar-link">
            Gears
          </a>
          <a href="#contact" className="navbar-link">
            Contact
          </a>
        </nav>
        <div className="header-actions flex items-center space-x-4">
          <button className="search text-xl">
            rrr
          </button>
          <button className="btn-sign_in flex items-center space-x-2 px-4 py-2 bg-orange-500 text-black">
            <div className="icon-box">
            rrr
            </div>
            <span>Log-in</span>
          </button>
        </div>
        <button className="nav-open-btn md:hidden">
         rrr
        </button>
      </div>
    </header>
  );
};

export default Navigation;