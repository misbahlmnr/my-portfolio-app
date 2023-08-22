import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #305c85;
  color: #fff;
  @media screen and (max-width: 1024px) {
    padding-bottom: 100px;
  }
`;

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 50px 20px 50px;
`;

export const TitleFooter = styled.h1`
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 20px;
`;

export const LinkWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  li a {
    color: #fff;
    text-decoration: none !important;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    justify-content: baseline;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    padding: 0;
    li a {
      display: block;
      font-size: 13px;
      margin-bottom: 10px;
    }
  }
`;

export const SosmedWrapper = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  @media screen and (max-width: 678px) {
    width: 130px;
  }
`;

export const IconSosmedFooter = styled.div`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all.3s;
  a i {
    font-size: 24px;
    color: #305c85;
  }
  @media screen and (max-width: 678px) {
    width: 30px;
    height: 30px;
    a i {
      font-size: 20px;
    }
  }
  &:hover {
    cursor: pointer;
    background-color: #fff;
  }
`;

export const DetailFooter = styled.p`
  text-align: center;
`;
