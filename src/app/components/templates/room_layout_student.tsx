import React from "react";
import Background from "../atoms/background";
import Header from "../atoms/headerdashboard";
import Navbar from "../atoms/studentnavbar";
import Container from "../atoms/container";
import ContentWrapper from "../atoms/content_wrapper";
import RoomMap from "../atoms/RoomMap";

export default function Room_Layout_Student() {
  return (
    <Container>
        <Background>
            <ContentWrapper>
                
               
                  <Navbar />
          
                
                <>
                <RoomMap></RoomMap>
                </>

            </ContentWrapper>
        </Background>
    </Container>
  );
}
