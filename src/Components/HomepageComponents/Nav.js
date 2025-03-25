import React from "react";
import "../../Style/Universal/Nav.css"
const Nav = () => {
  // Sidebar functions
  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) sidebar.style.display = "flex";
  };

  const hideSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) sidebar.style.display = "none";
  };

  const handleNavClick = (sectionId) => {
    hideSidebar();
    const targetSection = document.querySelector(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <ul className="sidebar">
        <div>
          <li onClick={hideSidebar}>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
                <path
                  className="svgpertel"
                  d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
                  fill="#ffffff"
                />
              </svg>
            </a>
          </li>
        </div>
        <li className="sidebarlement a1" onClick={() => handleNavClick("#section2")}>
          <a href="#section1">Home</a>
        </li>
        <li className="sidebarlement a1" onClick={() => handleNavClick("#section3")}>
          <a href="#section2">About</a>
        </li>
        <li className="sidebarlement a1" onClick={() => handleNavClick("#section4")}>
          <a href="#section3">Contact Us</a>
        </li>
        <li className="sidebarlement a1" onClick={() => handleNavClick("#section5")}>
          <a href="#section4">Order Now</a>
        </li>
      </ul>

      <ul className="navbarul">
        <h1 className="name">
          <a className="name" href="home.html">GoatSports</a>
        </h1>
        <div className="navelements">
          <li className="hideOnMobile hideOnMobile1 a1 homepage">
            <a href="#section2">Home</a>
          </li>
          <li className="hideOnMobile hideOnMobile1 a1 aboutus">
            <a href="#section3">About</a>
          </li>
          <li className="hideOnMobile hideOnMobile1 a1 contactus">
            <a href="#section4">Contact Us</a>
          </li>
          <li className="hideOnMobile hideOnMobile1 a1 ordernow">
            <a href="#section4">Order Now</a>
          </li>
        </div>

        <li className="menu-button" onClick={showSidebar}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
              <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" fill="#ffffff" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
