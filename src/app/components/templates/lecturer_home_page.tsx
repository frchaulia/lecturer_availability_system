import React from "react";
import Background from "../atoms/background";
import Header from "../atoms/header";
import Navbar from "../atoms/navbar";
import Container from "../atoms/container";
import ContentWrapper from "../atoms/content_wrapper";

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
