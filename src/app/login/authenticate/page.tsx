import * as React from "react";
import Image from 'next/image';
import Container from "../components/atoms/0.main/1.container";
import Background from "../components/atoms/0.main/1.background";
import ContentWrapper from "../components/atoms/0.main/1.content_wrapper";
import Login_Header from "../components/atoms/0.main/2.login_header";
import Login_TextNavbar from "../components/atoms/0.main/2.login_textnavbar";
import Body from "@/app/components/atoms/0.main/1.body";

export default function Home() {
  return (
    <Container>
        <Background>
            <ContentWrapper>
                <Login_Header>
                  <Login_TextNavbar/>
                </Login_Header>
            </ContentWrapper>
            <Body>
                
            </Body>
        </Background>
    </Container>
  );
}
