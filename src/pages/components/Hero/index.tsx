import HeroSvg from "../../../resources/assets/icons/hero.svg";
import { MyButton } from "../../GlobalStyles";
import {
  BoxContainer,
  BoxDetailHero,
  BoxIconHero,
  BoxSosmed,
  DescriptionHero,
  HeroWrapper,
  ProfileSosmed,
  SubtitleHero,
  TitleHero,
} from "./styles";

const Hero = () => (
  <HeroWrapper id="hero">
    <BoxContainer className="container">
      <BoxDetailHero>
        <SubtitleHero>Hi, Im Misbah</SubtitleHero>
        <TitleHero>I'm Frontend Developer</TitleHero>
        <DescriptionHero>
          I have experience developing, producing and maintaining corporate
          websites and web user interfaces. Has designed and contributed to
          agency web. Currently looking for a company engaged in IT to help
          develop web applications and software.
        </DescriptionHero>
        <ProfileSosmed>
          <MyButton
            className="btn"
            href="https://drive.google.com/file/d/1stZISiZUQhScUsmp0qHYbVxgT03vyjKq/view?usp=share_link"
          >
            <i className="uil uil-file-download"></i> MY CV
          </MyButton>
          <BoxSosmed>
            <a href="https://github.com/misbahdevs">
              <i className="uil uil-github"></i>
            </a>
            <a href="https://www.instagram.com/misbahhlmnr_/">
              <i className="uil uil-instagram-alt"></i>
            </a>
            <a href="https://wa.me/6285641054319">
              <i className="uil uil-whatsapp-alt"></i>
            </a>
          </BoxSosmed>
        </ProfileSosmed>
      </BoxDetailHero>
      <BoxIconHero>
        <img src={HeroSvg} alt="hero" />
      </BoxIconHero>
    </BoxContainer>
  </HeroWrapper>
);

export default Hero;
