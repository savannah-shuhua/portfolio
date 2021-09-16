import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export const Layout = ({ page, children }) => {
  return (
    <Container>
      <Header active={page} />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
