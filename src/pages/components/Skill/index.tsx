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
        <SKillTitle>Skills</SKillTitle>
        <BoxContent>
          <FrontendDetail>
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

          <BackendDetail>
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
