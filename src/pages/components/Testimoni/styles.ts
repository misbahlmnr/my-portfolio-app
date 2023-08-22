import Slider from "react-slick";
import styled from "styled-components";

export const TestimoniWrapper = styled.section``;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleTestimoni = styled.h2`
  font-weight: 700;
  color: #012b52;
  margin-bottom: 30px;
  padding-top: 50px;
  @media screen and (max-width: 1024px) {
    padding-top: 150px;
  }
  @media screen and (max-width: 678px) {
    padding-top: 30px;
  }
`;

export const SliderCustom = styled(Slider)`
  width: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  @media screen and (max-width: 678px) {
    width: 100%;
    padding: 10px;
  }
`;

export const CardImageTestimoni = styled.div`
  margin: 0 auto;
  width: 70px;
  height: 70px;
  border-radius: 50px;
  overflow: hidden;
  border: 5px solid #305c85;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`;

export const TitleCardTestimoni = styled.h3`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #012b52;
  @media screen and (max-width: 678px) {
    font-size: 18px;
  }
`;

export const SubtitleCardTestimoni = styled.h5`
  text-align: center;
  font-weight: 500;
  color: #305c85;
  font-size: 13px;
  margin-bottom: 20px;
  @media screen and (max-width: 678px) {
    font-size: 12px;
  }
`;

export const DescCardTestimoni = styled.p`
  text-align: center;
  color: #305c85;
`;
