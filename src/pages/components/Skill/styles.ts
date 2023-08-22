import styled from "styled-components";

export const SkillWrapper = styled.section`
  width: 100%;
`;

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SKillTitle = styled.h2`
  font-weight: 700;
  color: #012b52;
  margin-bottom: 30px;
  padding-top: 30px;
  @media screen and (max-width: 1024px) {
    padding-top: 150px;
  }
  @media screen and (max-width: 678px) {
    padding-top: 30px;
  }
`;

export const BoxContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const FrontendDetail = styled.div`
  width: 47%;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 30px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 678px) {
    width: 100%;
    padding: 30px 5px;
  }
`;

export const TitleCardDetailSkill = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #012b52;
  margin-bottom: 20px;
  @media screen and (max-width: 678px) {
    font-size: 16px;
  }
`;

export const SkillWrap = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  gap: 20px;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
  @media screen and (max-width: 678px) {
    font-size: 16px;
  }
`;

export const BoxSkills = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: max-content;
`;

export const IconBoxSkills = styled.div`
  margin-right: 10px;
  i {
    font-size: 25px;
    color: #305c85;
  }
`;

export const DescBoxSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  .name-list-skill {
    font-size: 15px;
    font-weight: 700;
    color: #012b52;
    margin: 0;
    padding: 0;
  }
  .desc-list-skill {
    font-size: 13px;
    color: #305c85;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 678px) {
    .name-list-skill {
      font-size: 14px;
    }
    .desc-list-skill {
      font-size: 12px;
    }
  }
`;

export const BackendDetail = styled.div`
  width: 47%;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 30px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 678px) {
    width: 100%;
    padding: 30px 5px;
  }
`;
