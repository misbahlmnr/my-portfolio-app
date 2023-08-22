import styled from "styled-components";

export const PortfolioWrapper = styled.section``;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitlePortfolio = styled.h2`
  font-weight: 700;
  color: #012b52;
  margin-bottom: 30px;
  @media screen and (max-width: 678px) {
    padding-top: 30px;
  }
`;

export const BoxContent = styled.div`
  display: flex;
  justify-content: baseline;
  flex-wrap: wrap;
  gap: 20px;
  @media screen and (max-width: 678px) {
    gap: 15px;
  }
`;

export const CardPortfolio = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  gap: 20px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 20px;
  }
  @media screen and (max-width: 678px) {
    width: 100%;
    padding: 10px;
  }
`;

export const CardImagePortfolio = styled.div`
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    transition: 0.6s;
  }
  img:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 1024px) {
    height: 400px;
    ransform: scale(1.1);
  }
  @media screen and (max-width: 678px) {
    height: 200px;
  }
`;

export const SubtitleCardPortfolio = styled.h2`
  font-size: 20px;
  font-weight: 700;
  @media screen and (max-width: 678px) {
    font-size: 16px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: -10px;
  display: flex;
`;

export const ButtonCardPortfolio = styled.a`
  width: 45%;
  padding: 10px 20px;
  border: 1px solid #2c48d8;
  border-radius: 6px;
  font-weight: 600;
  color: #012b52;
  margin-right: 10px;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  i {
    color: #305c85;
  }
  &:hover {
    background-color: #2c48d8;
    color: #fff;
    i {
      color: #fff;
    }
  }
  @media screen and (max-width: 678px) {
    font-size: 13px;
  }
`;
