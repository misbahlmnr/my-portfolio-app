import { motion } from "framer-motion";
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
        <SubtitleHero
          as={motion.span}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hi, Im Misbah
        </SubtitleHero>
        <TitleHero
          as={motion.h1}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I'm Frontend Developer
        </TitleHero>
        <DescriptionHero
          as={motion.p}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          I have experience developing, producing and maintaining corporate
          websites and web user interfaces. Has designed and contributed to
          agency web. Currently looking for a company engaged in IT to help
          develop web applications and software.
        </DescriptionHero>
        <ProfileSosmed>
          <MyButton
            as={motion.a}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="btn"
            href="https://drive.google.com/file/d/1nCHkbgPFnjDY4EIysL4tcE3XF2BqfuSw/view?usp=drive_link"
          >
            <i className="uil uil-file-download"></i> MY CV
          </MyButton>
          <BoxSosmed
            as={motion.div}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
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
      <BoxIconHero
        as={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={HeroSvg} alt="hero" />
      </BoxIconHero>
    </BoxContainer>
  </HeroWrapper>
);

export default Hero;
