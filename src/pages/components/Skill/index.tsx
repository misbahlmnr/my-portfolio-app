import { motion } from "framer-motion";
import { useContext } from "react";
import { StoreContext } from "../../../services/context/Context";
import {
  BackendDetail,
  BoxContainer,
  BoxContent,
  BoxSkills,
  DescBoxSkills,
  FrontendDetail,
  IconBoxSkills,
  SKillTitle,
  SkillWrap,
  SkillWrapper,
  TitleCardDetailSkill,
} from "./styles";

const Skills = () => {
  const { state, dispatch } = useContext(StoreContext);
  const { dataSkills } = state;

  return (
    <SkillWrapper>
      <BoxContainer className="container">
        <SKillTitle
          as={motion.h2}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills
        </SKillTitle>
        <BoxContent>
          <FrontendDetail
            as={motion.div}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TitleCardDetailSkill>Frontend Development</TitleCardDetailSkill>
            <SkillWrap>
              {dataSkills.frontend.map((item: any, idx: number) => (
                <BoxSkills key={item.tech}>
                  <IconBoxSkills>
                    <i className="uil uil-check-circle"></i>
                  </IconBoxSkills>
                  <DescBoxSkills>
                    <p className="name-list-skill">{item.tech}</p>
                    <p className="desc-list-skill">{item.status}</p>
                  </DescBoxSkills>
                </BoxSkills>
              ))}
            </SkillWrap>
          </FrontendDetail>

          <BackendDetail
            as={motion.div}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TitleCardDetailSkill>Backend Development</TitleCardDetailSkill>
            <SkillWrap>
              {dataSkills.backend.map((item: any, idx: number) => (
                <BoxSkills key={item.tech}>
                  <IconBoxSkills>
                    <i className="uil uil-check-circle"></i>
                  </IconBoxSkills>
                  <DescBoxSkills>
                    <p className="name-list-skill">{item.tech}</p>
                    <p className="desc-list-skill">{item.status}</p>
                  </DescBoxSkills>
                </BoxSkills>
              ))}
            </SkillWrap>
          </BackendDetail>
        </BoxContent>
      </BoxContainer>
    </SkillWrapper>
  );
};

export default Skills;
