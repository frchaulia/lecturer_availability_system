import React from "react";
import Background from "../atoms/background";
import Header from "../atoms/header";
import Navbar from "../atoms/navbarhome";
import Container from "../atoms/container";
import ContentWrapper from "../atoms/content_wrapper";
import NavbarHome from "../atoms/navbarhome";
import WelcomeText from "../atoms/welcometext";

export default function Student_Home_Page() {
  return (
    <Container>
        <Background>
            <ContentWrapper>
                
                <Header>
                  <NavbarHome />
                </Header>
            </ContentWrapper>
            <WelcomeText>
                  
                </WelcomeText>
        </Background>
    </Container>
  );
}
