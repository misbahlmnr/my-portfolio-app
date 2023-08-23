import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import {
  BoxContainer,
  BoxContent,
  BoxInfoWrap,
  ButtonFormContact,
  CardInfo,
  ContactWrapper,
  FormWrapper,
  SubtitleCardContact,
  TitleCardContact,
  TitleContact,
} from "./styles";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0bcb14u",
        "template_kiw438y",
        form.current!,
        "6W_gbIQFTx5BFczlk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const datas = [
    {
      icon: <i className="uil uil-envelope"></i>,
      title: "Email",
      description: "misbahx.id@gmail.com",
      link: "mailto:misbahx.id@gmail.com",
    },
    {
      icon: <i className="uil uil-whatsapp"></i>,
      title: "WhatsApp",
      description: "+62 856 4105 4319",
      link: "https://wa.me/6285641054319",
    },
    {
      icon: <i className="uil uil-linkedin-alt"></i>,
      title: "Linkedn",
      description: "Misbah H",
      link: "https://www.linkedin.com/in/misbahlmnr/",
    },
  ];

  return (
    <ContactWrapper id="contact">
      <BoxContainer className="container">
        <TitleContact
          as={motion.h2}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contact
        </TitleContact>
        <BoxContent>
          <BoxInfoWrap>
            {datas.map((item: any, idx: number) => (
              <CardInfo
                key={item.title}
                as={motion.div}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: (0.6 * (idx + 1)) / datas.length,
                  duration: 0.8,
                }}
                viewport={{ once: true }}
              >
                {item.icon}
                <TitleCardContact>{item.title}</TitleCardContact>
                <SubtitleCardContact>{item.description}</SubtitleCardContact>
                <a href={item.link}>send message</a>
              </CardInfo>
            ))}
          </BoxInfoWrap>
          <FormWrapper
            ref={form}
            onSubmit={sendEmail}
            as={motion.form}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                aria-describedby="name"
                placeholder="Your name..."
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Your email..."
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={5}
                className="form-control"
                placeholder="Your message..."
              ></textarea>
            </div>
            <ButtonFormContact type="submit" className="btn">
              Send message
            </ButtonFormContact>
          </FormWrapper>
        </BoxContent>
      </BoxContainer>
    </ContactWrapper>
  );
};

export default Contact;
