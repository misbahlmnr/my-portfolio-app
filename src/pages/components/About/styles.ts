import styled from "styled-components";

export const AboutWrapper = styled.section``;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-weight: 700;
  color: #012b52;
  margin-bottom: 30px;
  padding-top: 30px;
  @media screen and (max-width: 678px) {
    margin-bottom: 20px;
  }
`;

export const BoxContentAbout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const BoxProfileImageAbout = styled.div`
  display: flex;
  width: 30%;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  overflow: hidden;
  border-radius: 10px;
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  @media screen and (max-width: 678px) {
    width: 100%;
  }
`;

export const BoxProfileDescAbout = styled.div`
  width: 70%;
  @media screen and (max-width: 678px) {
    width: 100%;
  }
`;

export const BoxCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 678px) {
    flex-direction: column;
    margin-bottom: 0px;
  }
`;

export const CardAbout = styled.div`
  width: 31%;
  height: 100px;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  i {
    font-size: 20px;
    color: #305c85;
  }
  @media screen and (max-width: 678px) {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    i {
      font-size: 25px;
    }
  }
`;

export const TitleCardAbout = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #012b52;
  @media screen and (max-width: 678px) {
    font-size: 16px;
  }
`;

export const DescCardAbout = styled.span`
  font-size: 15px;
  color: #305c85;
  white-space: pre-wrap;
  text-align: justify;
`;
