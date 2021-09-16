import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there, <br />
          I'm Shuhua!
        </SectionTitle>
        <SectionText>
          Graduate of Mathematics and Computer Science with fundamental
          knowledge of algorithms, data structures, software development
          process. Quickly learn new technologies and apply new knowledge in
          practice. Seeking to leverage my experience building responsive and
          scalable web applications to solve interesting problems that delight
          end-users.
        </SectionText>
        <br />
        <br />
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;
