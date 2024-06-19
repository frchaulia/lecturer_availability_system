import React from "react";
import Background from "../atoms/0.main/1.background";
import Header from "../atoms/0.main/1.header";
import Navbar from "../atoms/0.main/1.lecturer_navbar_home";
import Container from "../atoms/0.main/1.container";
import ContentWrapper from "../atoms/0.main/1.content_wrapper";

export default function Lecturer_Home_Page() {
  return (
    <Container>
        <Background>
            <ContentWrapper>
                
                <Header>
                  <Navbar />
                </Header>

            </ContentWrapper>
        </Background>
    </Container>
  );
}
