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
        <SectionTitle>About</SectionTitle>
        <BoxContentAbout>
          <BoxProfileImageAbout>
            <img src={imgAbout} alt="about" />
          </BoxProfileImageAbout>

          <BoxProfileDescAbout>
            <BoxCardWrapper>
              {datas.map((el) => (
                <CardAbout key={el.title}>
                  <div className="icon">{el.icon}</div>
                  <TitleCardAbout>{el.title}</TitleCardAbout>
                  <DescCardAbout>{el.description}</DescCardAbout>
                </CardAbout>
              ))}
            </BoxCardWrapper>
            <DescCardAbout>
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
            <MyButton href="#contact" className="btn">
              Message Me
            </MyButton>
          </BoxProfileDescAbout>
        </BoxContentAbout>
      </BoxContainer>
    </AboutWrapper>
  );
};

export default About;
