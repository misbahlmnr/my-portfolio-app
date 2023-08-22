import { useContext } from "react";
import { StoreContext } from "../../../services/context/Context";
import {
  BoxContainer,
  BoxContent,
  ButtonCardPortfolio,
  ButtonWrapper,
  CardImagePortfolio,
  CardPortfolio,
  PortfolioWrapper,
  SubtitleCardPortfolio,
  TitlePortfolio,
} from "./styles";

const Portfolio = () => {
  const { state, dispatch } = useContext(StoreContext);
  const { dataPortfolio } = state;

  return (
    <PortfolioWrapper id="portfolio">
      <BoxContainer className="container">
        <TitlePortfolio>Portfolio</TitlePortfolio>
        <BoxContent>
          {dataPortfolio.map((data: any, idx: number) => (
            <CardPortfolio key={idx}>
              <CardImagePortfolio>
                <img src={data.image} alt="gambar 1" />
              </CardImagePortfolio>
              <SubtitleCardPortfolio>{data.title}</SubtitleCardPortfolio>
              <ButtonWrapper>
                <ButtonCardPortfolio href="" className="btn">
                  Demo
                </ButtonCardPortfolio>
              </ButtonWrapper>
            </CardPortfolio>
          ))}
        </BoxContent>
      </BoxContainer>
    </PortfolioWrapper>
  );
};

export default Portfolio;
