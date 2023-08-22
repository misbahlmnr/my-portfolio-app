import styled from "styled-components";

export const QualificationWrapper = styled.section`
  width: 100%;
  @media screen and (max-width: 678px) {
    margin-bottom: 100px;
  }
`;

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QualificationTitle = styled.h2`
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

export const BoxContentQualification = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
  @media screen and (max-width: 678px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

export const Button = styled.button`
  width: 200px;
  padding: 10px 20px;
  background-color: #e3f3ff;
  color: #012b52;
  font-size: 13px;
  margin-right: 30px;
  @media screen and (max-width: 678px) {
    width: 100%;
    margin-bottom: 10px;
  }
  &:hover {
    background-color: #2c48d8;
    color: #fff;
  }
  &.active {
    background-color: #2c48d8;
    color: #fff;
  }
`;

export const QualificationList = styled.div`
  width: 500px;
  @media screen and (max-width: 678px) {
    width: unset;
  }
`;

export const QualificationItem = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 2em;
`;

export const QualificationTitleList = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #012b52;
  @media screen and (max-width: 678px) {
    font-size: 16px;
  }
`;

export const QualificationSubtitleList = styled.h5`
  font-size: 16px;
  font-weight: 500;
  color: #305c85;
  @media screen and (max-width: 678px) {
    font-size: 14px;
  }
`;

export const QualificationTimeList = styled.div`
  color: #305c85;
  i {
    margin-right: 5px;
  }
  @media screen and (max-width: 678px) {
    font-size: 13px;
  }
`;

export const Rounder = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #2c48d8;
`;

export const Line = styled.span`
  display: block;
  width: 1px;
  height: 100%;
  background-color: #2c48d8;
  transform: translate(6px, -7px);
`;
