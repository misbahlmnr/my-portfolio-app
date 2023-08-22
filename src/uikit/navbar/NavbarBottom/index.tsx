import { BoxNavBottom, NavBottomWrapper, ToggleClose } from "../styles";

interface NavbarBottomProps {
  showMenu: boolean;
  handleShowMenu: any;
}

const NavbarBottom = (props: NavbarBottomProps) => {
  const { showMenu, handleShowMenu } = props;
  return (
    <NavBottomWrapper className={`${showMenu ? "menu-open" : "menu-closed"}`}>
      <BoxNavBottom>
        <a className="nav-link" href="#hero" onClick={handleShowMenu}>
          <i className="ri-home-line"></i>
          Home
        </a>
        <a className="nav-link" href="#about" onClick={handleShowMenu}>
          <i className="ri-user-3-line"></i>
          About
        </a>
        <a className="nav-link" href="#portfolio" onClick={handleShowMenu}>
          <i className="ri-image-line"></i>
          Portfolio
        </a>
        <a className="nav-link" href="#contact" onClick={handleShowMenu}>
          <i className="ri-chat-3-line"></i>
          Contact
        </a>
      </BoxNavBottom>
      <ToggleClose onClick={handleShowMenu}>
        <i className="ri-close-line"></i>
      </ToggleClose>
    </NavBottomWrapper>
  );
};

export default NavbarBottom;
