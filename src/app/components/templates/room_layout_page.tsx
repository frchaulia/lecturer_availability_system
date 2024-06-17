import React from "react";
import Background from "../atoms/0.main/1.background";
import Header from "../atoms/0.main/1.header";
import Navbar from "../atoms/0.main/1.navbar";
import Container from "../atoms/0.main/1.container";
import ContentWrapper from "../atoms/0.main/1.content_wrapper";
import RoomMap from "../atoms/2.evan/RoomMap";

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
