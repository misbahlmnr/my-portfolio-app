import styled from "styled-components";

export const ContactWrapper = styled.section`
  width: 100%;
`;

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContact = styled.h2`
  font-weight: 700;
  color: #012b52;
  margin-bottom: 30px;
  padding-top: 30px;
`;

export const BoxContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const BoxInfoWrap = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
  }
  @media screen and (max-width: 678px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const CardInfo = styled.div`
  width: 100%;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  i {
    font-size: 30px;
    color: #305c85;
  }
  @media screen and (max-width: 1024px) {
    width: 31%;
  }
  @media screen and (max-width: 678px) {
    width: 100%;
    i {
      font-size: 25px;
    }
    a {
      text-decoration: none;
      font-size: 13px;
    }
  }
`;

export const TitleCardContact = styled.h3`
  font-size: 18px;
  color: #012b52;
  font-weight: 700;
  @media screen and (max-width: 678px) {
    font-size: 16px;
  }
`;

export const SubtitleCardContact = styled.h4`
  font-size: 15px;
  color: #012b52;
  font-weight: 500;
  @media screen and (max-width: 678px) {
    font-size: 14px;
  }
`;

export const FormWrapper = styled.form`
  width: 50%;
  input,
  textarea {
    font-size: 15px;
    padding: 10px 15px;
  }
  @media screen and (max-width: 678px) {
    width: 100%;
  }
`;

export const ButtonFormContact = styled.button`
  width: 200px;
  padding: 10px 20px;
  background-color: #2c48d8;
  color: #fff;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  @media screen and (max-width: 678px) {
    width: 150px;
    font-size: 14px;
  }
  &:hover {
    background-color: #223dc9;
    color: #fff;
  }
`;
