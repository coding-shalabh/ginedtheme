import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { logo } from "../imagepath";



const index = () => {
    
    // change header background on scroll
    const [navbar, setNavbar] = useState(false);

    const openMobileMenu = () => {
        document.body?.classList?.add("menu-opened");
      };
    const hideMobileMenu = () => {
        document.body?.classList?.remove("menu-opened");
      };
    const changeHeaderBackground = () => {
        if (window.scrollY >= 90) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      };

    window.addEventListener("scroll", changeHeaderBackground);

    return (
    <header className="header">
    <div className="header-fixed">
      <nav
        className={navbar ? "navbar navbar-expand-lg header-nav scroll-sticky add-header-bg" : "navbar navbar-expand-lg header-nav scroll-sticky"}>
        <div className="container">
          <div className="navbar-header">
            <Link id="mobile_btn" to="/" onClick={openMobileMenu}>
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </Link>
            <Link to="/" className="navbar-brand logo">
              <img src={logo} className="img-fluid" alt="Logo" />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="/" className="menu-logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
              <Link id="menu_close" className="menu-close" to="/" onClick={hideMobileMenu}>
                <i className="fas fa-times" />
              </Link>
            </div>
            <ul className="main-nav">
              <li>
                <Link to="/our-courses">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link to="/our-colleges">
                    Our Colleges
                </Link>
              </li>
              <li>
                <Link to="/about">
                    About
                </Link>
              </li>
              <li>
                <Link to="/about">
                    Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Login Section */}

          {/* <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link className="nav-link header-sign" to="/login">
                Signin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-login" to="/register">
                Signup
              </Link>
            </li>
          </ul> */}
          
        </div>
      </nav>
    </div>
  </header>
  )
}

export default index