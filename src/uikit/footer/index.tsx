import ScrollToTop from "react-scroll-to-top";

import {
  BoxContainer,
  DetailFooter,
  FooterWrapper,
  IconSosmedFooter,
  LinkWrapper,
  SosmedWrapper,
  TitleFooter,
} from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <ScrollToTop smooth color="#2c48d8" width="15" height="15" />
      <BoxContainer className="container">
        <TitleFooter>MISBAH</TitleFooter>
        <LinkWrapper>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#qualification">Qualification</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimoni">Testimoni</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </LinkWrapper>
        <SosmedWrapper>
          <IconSosmedFooter>
            <a href="https://facebook.com">
              <i className="uil uil-facebook-f"></i>
            </a>
          </IconSosmedFooter>
          <IconSosmedFooter>
            <a href="https://www.instagram.com/misbahhlmnr_/">
              <i className="uil uil-instagram"></i>
            </a>
          </IconSosmedFooter>
          <IconSosmedFooter>
            <a href="https://twitter.com/">
              <i className="uil uil-twitter-alt"></i>
            </a>
          </IconSosmedFooter>
        </SosmedWrapper>
        <DetailFooter>&copy; MISBAH 2022. All right reserved.</DetailFooter>
      </BoxContainer>
    </FooterWrapper>
  );
};

export default Footer;
