import { useState } from "react";
import Logo from "../../resources/assets/icons/logo.svg";
import NavbarBottom from "./NavbarBottom";
import {
  CollapseNavbar,
  NavbarBrand,
  NavbarNav,
  NavbarWrapper,
  ToggleOpen,
} from "./styles";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <NavbarWrapper className="navbar navbar-transparent navbar-expand-lg navbar-left">
        <div className="container">
          <NavbarBrand href="#hero">
            <img src={Logo} alt="Logo" />
            <span>Misbah</span>
          </NavbarBrand>
          <ToggleOpen onClick={handleShowMenu}>
            <i className="ri-menu-4-line"></i>
          </ToggleOpen>
          <CollapseNavbar
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <NavbarNav className="navbar-nav ms-auto">
              <a className="nav-link" href="#hero">
                Home
              </a>
              <a className="nav-link" href="#about">
                About
              </a>
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </NavbarNav>
          </CollapseNavbar>
        </div>
      </NavbarWrapper>
      <NavbarBottom showMenu={showMenu} handleShowMenu={handleShowMenu} />
    </>
  );
};

export default Navbar;
