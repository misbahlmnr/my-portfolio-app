import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  height: 80px;
  @media screen and (max-width: 1024px) {
    height: 60px;
    position: fixed;
    width: 50%;
    border-radius: 50px;
    background-color: #fff;
    bottom: 30px;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    z-index: 100;
    box-shadow: 2px 2px 4px rgba($color: #000000, $alpha: 0.1),
      -2px -2px 4px rgba($color: #000000, $alpha: 0.1);
  }
  @media screen and (max-width: 678px) {
    height: 60px;
    position: fixed;
    width: 80%;
    border-radius: 50px;
    background-color: #fff;
    bottom: 30px;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    z-index: 100;
    box-shadow: 2px 2px 4px rgba($color: #000000, $alpha: 0.1),
      -2px -2px 4px rgba($color: #000000, $alpha: 0.1);
  }
`;

export const NavbarBrand = styled.a`
  font-weight: 700;
  font-size: 20px;
  span {
    margin-left: 5px;
    color: #012b52;
  }
  @media screen and (max-width: 1024px) {
    font-size: 16px;
    img {
      width: 30px;
    }
  }
`;

export const ToggleOpen = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    margin-right: 2px;
    display: block;
    cursor: pointer;
    i {
      font-size: 20px;
      color: #305c85;
    }
  }
`;

export const NavbarNav = styled.div`
  a {
    color: #012b52;
  }
  a:hover {
    color: #305c85;
  }
`;

export const CollapseNavbar = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavBottomWrapper = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    &.menu-open {
      display: block;
      position: fixed;
      background-color: #fff;
      width: 50%;
      left: 50%;
      right: 50%;
      transform: translateX(-50%);
      bottom: 30px;
      z-index: 110;
      padding: 20px;
      border-radius: 30px;
      box-shadow: 2px 2px 4px rgba($color: #000000, $alpha: 0.1),
        -2px -2px 4px rgba($color: #000000, $alpha: 0.1);
    }
  }
  @media screen and (max-width: 678px) {
    &.menu-open {
      display: block;
      position: fixed;
      background-color: #fff;
      width: 80%;
      left: 50%;
      right: 50%;
      transform: translateX(-50%);
      bottom: 30px;
      z-index: 110;
      padding: 20px;
      border-radius: 30px;
      box-shadow: 2px 2px 4px rgba($color: #000000, $alpha: 0.1),
        -2px -2px 4px rgba($color: #000000, $alpha: 0.1);
    }
  }
`;

export const BoxNavBottom = styled.div`
  @media screen and (max-width: 1024px) {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 80px);
    gap: 10px;
    z-index: 115;
  }
  @media screen and (max-width: 678px) {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 80px);
    gap: 10px;
    z-index: 115;
  }
  .nav-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #305c85;

    i {
      font-size: 18px;
    }
  }
  .nav-link:hover {
    color: #012b52;
  }
`;

export const ToggleClose = styled.div`
  @media screen and (max-width: 1024px) {
    position: absolute;
    bottom: 8px;
    right: 10px;
    cursor: pointer;

    i {
      font-size: 25px;
      color: #012b52;
    }
  }
`;
