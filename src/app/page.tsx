import * as React from "react";
import Image from 'next/image';
import Container from "./components/atoms/0.main/1.container";
import Background from "./components/atoms/0.main/1.background";
import ContentWrapper from "./components/atoms/0.main/1.content_wrapper";
import Header from "./components/atoms/0.main/1.header";
import Navbar_Login from "./components/atoms/0.main/2.login_navbar";
import Navbar from "./components/atoms/0.main/1.lecturer_navbar_home";

export default function Home() {
  return (
    <Container>
        <Background>
            <ContentWrapper>
              
                <Header>
                  <Navbar_Login />
                </Header>
                

            </ContentWrapper>
        </Background>
    </Container>
  );
}