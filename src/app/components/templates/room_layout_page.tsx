import React from "react";
import Background from "../atoms/background";
import Header from "../atoms/header";
import Navbar from "../atoms/navbar";
import Container from "../atoms/container";
import ContentWrapper from "../atoms/content_wrapper";
import RoomMap from "../atoms/RoomMap";

export default function Room_Layout_Page() {
  return (
    <Container>
        <Background>
            <ContentWrapper>
                
                <Header>
                  <Navbar />
                </Header>
                
                <>
                <RoomMap></RoomMap>
                </>

            </ContentWrapper>
        </Background>
    </Container>
  );
}
