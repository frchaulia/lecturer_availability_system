import React from "react";
import Background from "../atoms/0.main/1.background";
import Header from "../atoms/0.main/1.header";
import Navbar from "../atoms/0.main/2.student_navbar_home";
import Container from "../atoms/0.main/1.container";
import ContentWrapper from "../atoms/0.main/1.content_wrapper";
import NavbarHome from "../atoms/0.main/2.student_navbar_home";
import WelcomeText from "../atoms/3.fahmi/welcometext";

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
