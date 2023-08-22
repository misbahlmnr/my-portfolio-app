import styled from "styled-components";

export const HeroWrapper = styled.section`
  @media screen and (max-width: 1024px) {
    position: relative;
  }
  @media screen and (max-width: 678px) {
    padding-top: 10px;
    position: relative;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const BoxDetailHero = styled.div`
  padding-top: 80px;
  width: 48%;
  @media screen and (max-width: 1024px) {
    order: 2;
    width: 100%;
    text-align: center;
  }
  @media screen and (max-width: 678px) {
    padding-top: 50px;
    text-align: start;
  }
`;

export const SubtitleHero = styled.span`
  font-size: 24px;
  color: #305c85;
  display: block;
  margin-bottom: 10px;
  @media screen and (max-width: 678px) {
    font-size: 18px;
  }
`;

export const TitleHero = styled.h1`
  font-size: 45px;
  font-weight: 700;
  color: #012b52;
  margin-bottom: 10px;
  @media screen and (max-width: 678px) {
    font-size: 32px;
  }
`;

export const DescriptionHero = styled.p`
  color: #305c85;
  @media screen and (max-width: 678px) {
    text-align: justify;
  }
`;

export const ProfileSosmed = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 100%;
    justify-content: center;
    text-align: center;
  }
  @media screen and (max-width: 678px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const BoxSosmed = styled.div`
  margin-top: 5px;
  width: 150px;
  display: flex;
  justify-content: space-between;
  a {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.5);
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: 0.3s;
    margin-bottom: 10px;
    i {
      color: #305c85;
      font-size: 20px;
    }
  }
  a:hover {
    background-color: rgba(255, 255, 255, 1);
  }
  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 200px;
    right: -50px;
    flex-direction: column;
  }
  @media screen and (max-width: 678px) {
    top: 100px;
    right: -90px;
    flex-direction: column;
  }
`;

export const BoxIconHero = styled.div`
  margin-top: 50px;
  width: 48%;
  height: 400px;
  display: flex;
  justify-content: flex-end;
  img {
    width: 80%;
  }
  @media screen and (max-width: 1024px) {
    order: 1;
    width: 100%;
    justify-content: center;
  }
  @media screen and (max-width: 678px) {
    order: 1;
    height: 250px;
    justify-content: flex-start;
  }
`;
