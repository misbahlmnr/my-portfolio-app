import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { StoreContext } from "../../../services/context/Context";
import {
  BoxContainer,
  BoxContentQualification,
  Button,
  ButtonWrapper,
  Line,
  QualificationItem,
  QualificationList,
  QualificationSubtitleList,
  QualificationTimeList,
  QualificationTitle,
  QualificationTitleList,
  QualificationWrapper,
  Rounder,
} from "./styles";

const Qualification = () => {
  const { state, dispatch } = useContext(StoreContext);
  const { chooseQualification } = state;
  const [activeButton, setActiveButton] = useState("education-formal");

  const handleButtonClick = (idButton: string) => {
    setActiveButton(idButton);
  };

  return (
    <QualificationWrapper>
      <BoxContainer className="container">
        <QualificationTitle
          as={motion.h2}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Qualification
        </QualificationTitle>
        <BoxContentQualification>
          <ButtonWrapper
            as={motion.div}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button
              id="education-formal"
              type="button"
              className={`btn ${
                activeButton === "education-formal" ? "active" : ""
              }`}
              onClick={() => {
                handleButtonClick("education-formal");
                dispatch({ type: "FETCH_EDUCATIONAL_FORMAL" });
              }}
            >
              Education
            </Button>
            <Button
              id="education-nonformal"
              type="button"
              className={`btn ${
                activeButton === "education-nonformal" ? "active" : ""
              }`}
              onClick={() => {
                handleButtonClick("education-nonformal");
                dispatch({ type: "FETCH_EDUCATIONAL_NON_FORMAL" });
              }}
            >
              Education (Non Formal)
            </Button>
            <Button
              id="work"
              type="button"
              className={`btn ${activeButton === "work" ? "active" : ""}`}
              onClick={() => {
                handleButtonClick("work");
                dispatch({ type: "FETCH_WORK_DATA" });
              }}
            >
              Work
            </Button>
          </ButtonWrapper>
          <QualificationList
            as={motion.div}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {chooseQualification.map((item: any, idx: number) => {
              const isFirstOrEven = idx === 0 || idx % 2 === 0;
              const isLast = idx === chooseQualification.length - 1;

              return (
                <QualificationItem key={idx}>
                  {isFirstOrEven && (
                    <>
                      <div>
                        <QualificationTitleList>
                          {item.jurusan}
                        </QualificationTitleList>
                        <QualificationSubtitleList>
                          {item.institusi}
                        </QualificationSubtitleList>
                        <QualificationTimeList>
                          <i className="uil uil-calendar-alt"></i>
                          {item.rangeWaktu}
                        </QualificationTimeList>
                      </div>
                      <div>
                        <Rounder />
                        {!isLast && <Line />}
                      </div>
                    </>
                  )}

                  {!isFirstOrEven && (
                    <>
                      <div></div>
                      <div>
                        <Rounder />
                        {!isLast && <Line />}
                      </div>
                      <div>
                        <QualificationTitleList>
                          {item.jurusan}
                        </QualificationTitleList>
                        <QualificationSubtitleList>
                          {item.institusi}
                        </QualificationSubtitleList>
                        <QualificationTimeList>
                          <i className="uil uil-calendar-alt"></i>
                          {item.rangeWaktu}
                        </QualificationTimeList>
                      </div>
                    </>
                  )}
                </QualificationItem>
              );
            })}
          </QualificationList>
        </BoxContentQualification>
      </BoxContainer>
    </QualificationWrapper>
  );
};

export default Qualification;
