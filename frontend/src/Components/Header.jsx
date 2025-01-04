import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown('');
  };

  const toggleDropdown = (dropdownName, e) => {
    e.preventDefault();
    if (isMobile) {
      setActiveDropdown(activeDropdown === dropdownName ? '' : dropdownName);
    }
  };

  return (
    <>
      <style jsx>{`
        :root {
          --header-bg-color: #010314;
          --link-color: rgba(255, 255, 255, 0.5);
          --link-hover-color: rgba(255, 255, 255, 1);
          --link-active-color: rgba(255, 255, 255, 1);
          --nav-bg-color: #010314;
          --dropdown-bg: #ffffff;
          --dropdown-text: #010314;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .section.header {
          padding: 20px 40px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: var(--header-bg-color);
          position: relative;
          z-index: 1000;
        }

        .header__logo {
          width: 180px;
          flex-shrink: 0;
        }

        .logo.primary {
          width: 100%;
          height: 35px;
          display: block;
          background: url(https://cdn.worldvectorlogo.com/logos/codepen.svg) no-repeat 50% 50% / contain;
        }

        .nav {
          margin-left: auto;
          display: flex;
          align-items: center;
        }

        .nav__list {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 10px;
        }

        .nav__item {
          position: relative;
        }

        .nav__link {
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--link-color);
          text-decoration: none;
          font-size: 16px;
          white-space: nowrap;
          transition: all 0.3s ease;
        }

        .nav__link:hover {
          color: var(--link-hover-color);
        }

        .nav__item.active .nav__link {
          color: var(--link-active-color);
        }

        .dropdown {
          position: relative;
        }

        .dropdown__trigger {
          padding-right: 28px;
          position: relative;
        }

        .dropdown__trigger::after {
          content: '';
          position: absolute;
          right: 12px;
          top: 50%;
          width: 8px;
          height: 8px;
          border-right: 2px solid var(--link-color);
          border-bottom: 2px solid var(--link-color);
          transform: translateY(-50%) rotate(45deg);
          transition: transform 0.3s ease;
        }

        .dropdown__menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          min-width: 220px;
          background-color: var(--dropdown-bg);
          border-radius: 8px;
          padding: 8px 0;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .dropdown__menu .nav__link {
          color: var(--dropdown-text);
          padding: 10px 20px;
          justify-content: flex-start;
        }

        .dropdown__menu .nav__link:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }

        .btn-menu {
          display: none;
          width: 44px;
          height: 44px;
          padding: 10px;
          align-items: center;
          justify-content: center;
          border: none;
          background: transparent;
          cursor: pointer;
          z-index: 1001;
        }

        .btn-menu svg {
          width: 24px;
          height: 24px;
          stroke: var(--link-color);
          stroke-width: 2px;
          stroke-linecap: round;
          transition: all 0.3s ease;
        }

        @media (min-width: 769px) {
          .dropdown:hover .dropdown__menu {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(0);
          }

          .dropdown:hover .dropdown__trigger::after {
            transform: translateY(-50%) rotate(-135deg);
          }
        }

        @media screen and (max-width: 768px) {
          .section.header {
            padding: 15px 20px;
          }

          .btn-menu {
            display: flex;
            margin-left: 20px;
          }

          .nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: var(--header-bg-color);
            padding: 80px 20px 40px;
            transform: translateX(${isMenuOpen ? '0' : '100%'});
            transition: transform 0.3s ease;
            z-index: 1000;
          }

          .nav__list {
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
            width: 100%;
          }

          .nav__item {
            width: 100%;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .nav__link {
            width: 100%;
            padding: 15px;
            font-size: 18px;
          }

          .dropdown__menu {
            position: static;
            width: 100%;
            transform: none;
            background-color: rgba(255, 255, 255, 0.05);
            box-shadow: none;
            border-radius: 0;
            margin: 0;
            padding: 0;
            max-height: 0;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .dropdown__menu.active {
            max-height: 400px;
            opacity: 1;
            visibility: visible;
            padding: 8px 0;
          }

          .dropdown__menu .nav__link {
            color: var(--link-color);
            padding: 12px 25px;
            font-size: 16px;
          }

          .dropdown__trigger::after {
            right: 20px;
            transform: translateY(-50%) rotate(${activeDropdown ? '-135deg' : '45deg'});
          }
        }

        @media screen and (max-width: 480px) {
          .section.header {
            padding: 12px 15px;
          }

          .header__logo {
            width: 150px;
          }

          .nav {
            padding: 70px 15px 30px;
          }

          .nav__link {
            padding: 12px;
            font-size: 16px;
          }
        }
      `}</style>

      <header className="section header">
        <a href="/" className="header__logo">
          <span className="logo primary"></span>
        </a>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item active">
              <a href="#" className="nav__link">Home</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">About</a>
            </li>
            <li className="nav__item dropdown">
              <a 
                href="#" 
                className="nav__link dropdown__trigger"
                onClick={(e) => toggleDropdown('digital', e)}
              >
                Digital
              </a>
              <ul className={`dropdown__menu ${activeDropdown === 'digital' ? 'active' : ''}`}>
                <li><a href="#" className="nav__link">Digital Marketing</a></li>
                <li><a href="#" className="nav__link">Social Media</a></li>
                <li><a href="#" className="nav__link">Content Strategy</a></li>
                <li><a href="#" className="nav__link">SEO Services</a></li>
              </ul>
            </li>
            <li className="nav__item dropdown">
              <a 
                href="#" 
                className="nav__link dropdown__trigger"
                onClick={(e) => toggleDropdown('development', e)}
              >
                Development
              </a>
              <ul className={`dropdown__menu ${activeDropdown === 'development' ? 'active' : ''}`}>
                <li><a href="#" className="nav__link">Web Development</a></li>
                <li><a href="#" className="nav__link">Mobile Apps</a></li>
                <li><a href="#" className="nav__link">Custom Software</a></li>
                <li><a href="#" className="nav__link">API Integration</a></li>
              </ul>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">Our Work</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">Contact</a>
            </li>
          </ul>
        </nav>
        <button 
          className="btn-menu"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" fill="none">
            <path 
              d={isMenuOpen 
                ? "M6 18L18 6M6 6l12 12" 
                : "M4 6h16M4 12h16M4 18h16"
              } 
            />
          </svg>
        </button>
      </header>
    </>
  );
};

export default Header;