import { motion } from "framer-motion";
import { useContext } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { StoreContext } from "../../../services/context/Context";
import {
  BoxContainer,
  CardImageTestimoni,
  DescCardTestimoni,
  SliderCustom,
  SubtitleCardTestimoni,
  TestimoniWrapper,
  TitleCardTestimoni,
  TitleTestimoni,
} from "./styles";

const Testimoni = () => {
  const { state, dispatch } = useContext(StoreContext);
  const { dataTestimoni } = state;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <></>,
    nextArrow: <></>,
  };

  return (
    <TestimoniWrapper>
      <BoxContainer className="container">
        <TitleTestimoni
          as={motion.h2}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Testimonial
        </TitleTestimoni>
        <SliderCustom {...settings}>
          {dataTestimoni.map((data: any) => {
            return (
              <div key={data.name}>
                <CardImageTestimoni>
                  <img src={data.avatar} alt="avatar" />
                </CardImageTestimoni>
                <TitleCardTestimoni>{data.name}</TitleCardTestimoni>
                <SubtitleCardTestimoni>{data.profession}</SubtitleCardTestimoni>
                <DescCardTestimoni>{data.review}</DescCardTestimoni>
              </div>
            );
          })}
        </SliderCustom>
      </BoxContainer>
    </TestimoniWrapper>
  );
};

export default Testimoni;
