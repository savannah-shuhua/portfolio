import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { ImHappy2 } from "react-icons/im";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = (props) => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20",
          }}
        >
          <ImHappy2 size="1.5rem" /> <Span>Shuhua Liu</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/work">
          <NavLink active={props.active == "Projects" ? "true" : "false"}>
            Projects
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="/tech">
          <NavLink active={props.active == "Technologies" ? "true" : "false"}>
            Technologies
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <NavLink active={props.active == "Contact" ? "true" : "false"}>
            Contact
          </NavLink>
        </Link>
      </li>
    </Div2>
  </Container>
);

export default Header;
