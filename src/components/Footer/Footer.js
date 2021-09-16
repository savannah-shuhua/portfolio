import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { SectionDivider } from "../../styles/GlobalComponents";

import {
  SocialIcons,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <SectionDivider />
      <LinkList>
        <LinkColumn>
          <LinkTitle>Code</LinkTitle>
          <LinkItem href=" https://github.com/savannah-shuhua">
            Github profile
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Gmail</LinkTitle>
          <LinkItem href="mailto:sl.shuhualiu@gmail.com">sl.shuhualiu</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:617-602-3564">617-602-3564</LinkItem>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
