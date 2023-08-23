import { motion } from "framer-motion";
import imgAbout from "../../../resources/assets/img/me.jpg";
import { MyButton } from "../../GlobalStyles";
import {
  AboutWrapper,
  BoxCardWrapper,
  BoxContainer,
  BoxContentAbout,
  BoxProfileDescAbout,
  BoxProfileImageAbout,
  CardAbout,
  DescCardAbout,
  SectionTitle,
  TitleCardAbout,
} from "./styles";

const About = () => {
  const datas = [
    {
      icon: <i className="uil uil-award"></i>,
      title: "Experience",
      description: "2 years working",
    },
    {
      icon: <i className="uil uil-users-alt"></i>,
      title: "Client",
      description: "5 official projects",
    },
    {
      icon: <i className="uil uil-folder-open"></i>,
      title: "Project",
      description: "10 + Completed",
    },
  ];

  return (
    <AboutWrapper id="about">
      <BoxContainer className="container">
        <SectionTitle
          as={motion.h2}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          About
        </SectionTitle>
        <BoxContentAbout>
          <BoxProfileImageAbout
            as={motion.div}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={imgAbout} alt="about" />
          </BoxProfileImageAbout>

          <BoxProfileDescAbout>
            <BoxCardWrapper>
              {datas.map((el: any, idx: number) => (
                <CardAbout
                  key={el.title}
                  as={motion.div}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: (0.9 * (idx + 1)) / datas.length,
                    duration: 0.8,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="icon">{el.icon}</div>
                  <TitleCardAbout>{el.title}</TitleCardAbout>
                  <DescCardAbout>{el.description}</DescCardAbout>
                </CardAbout>
              ))}
            </BoxCardWrapper>
            <DescCardAbout
              as={motion.p}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              I am Misbah, a Frontend Developer with an educational background
              in Informatics Engineering. I love interface/UI work, and am
              always interested in finding the best solution in every project I
              work on. I also really enjoy working in a team and helping others
              achieve a common goal.
              {"\n\n"}
              My best work experiences are when I work on projects Website
              Interior Design, where I was assigned to code from the design that
              has been provided, and successfully completed on time. I have
              learned a lot and feel commendable for my contribution to the
              project.
              {"\n\n"}I believe that my abilities and experience can help me in
              working on future projects and work.{"\n\n"}
            </DescCardAbout>
            <MyButton
              href="#contact"
              className="btn"
              as={motion.a}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Message Me
            </MyButton>
          </BoxProfileDescAbout>
        </BoxContentAbout>
      </BoxContainer>
    </AboutWrapper>
  );
};

export default About;
