import { motion } from "framer-motion";
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
        <TitlePortfolio
          as={motion.h2}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Portfolio
        </TitlePortfolio>
        <BoxContent>
          {dataPortfolio.map((data: any, idx: number) => (
            <CardPortfolio
              key={idx}
              as={motion.div}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: (0.6 * (idx + 1)) / dataPortfolio.length,
                duration: 0.8,
              }}
              viewport={{ once: true }}
            >
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
