import React, { useState, useEffect } from "react";
import {
  Section,
  SectionDivider,
  SectionSubText,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Footer/FooterStyles";
import {
  Label,
  Input,
  Textarea,
  Button,
  FlexContainer,
  FlexItem,
  FormGroup,
  LinkItem,
  SocialContainer,
  SocialIconsContainer,
} from "./ContactStyles";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  return (
    <Section id="contact">
      <SectionDivider divider colorAlt />
      <SectionTitle>Get in Touch</SectionTitle>
      <SectionText>
        If you’d like to send me a message, I can be reached through various
        ways! If you prefer email, simply fill out the form below or send me a
        message directly at{" "}
        <LinkItem href="mailto:sl.shuhualiu@gmail.com">
          sl.shuhualiu@gmail.com
        </LinkItem>
        .
      </SectionText>
      <FlexContainer>
        <FlexItem>
          {/* Contact Form */}
          <form
            name="contact-form"
            action="/?success=true"
            method="POST"
            data-netlify="true"
          >
            <SectionSubText>Let's chat...</SectionSubText>
            {success && (
              <p id="here" style={{ color: "green" }}>
                Successfully submitted form!
              </p>
            )}
            <Input type="hidden" name="form-name" value="contact-form" />
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" />
            </FormGroup>
            <FormGroup>
              <Button type="submit">Send Message</Button>
            </FormGroup>
          </form>
        </FlexItem>
        {/* Other Medias */}
        <FlexItem>
          <SectionSubText>
            Elsewhere, I can be reached through various ways:
          </SectionSubText>
          <SocialIconsContainer>
            <SocialContainer>
              <SocialIcons href=" https://github.com/savannah-shuhua">
                <AiFillGithub size="3rem" />
              </SocialIcons>
              <SocialIcons href="https://www.linkedin.com/in/shuhua-liu/">
                <AiFillLinkedin size="3rem" />
              </SocialIcons>
              <SocialIcons href="https://google.com">
                <AiFillInstagram size="3rem" />
              </SocialIcons>
            </SocialContainer>
          </SocialIconsContainer>
        </FlexItem>
        <divs style={{ flex: "20%" }}></divs>
      </FlexContainer>
    </Section>
  );
};

export default Contact;
