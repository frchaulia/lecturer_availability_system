import React from "react";
import Background from "../atoms/0.main/1.background";
import Header from "../atoms/0.main/2.header_dashboard";
import Navbar from "../atoms/0.main/2.student_navbar";
import Container from "../atoms/0.main/1.container";
import ContentWrapper from "../atoms/0.main/1.content_wrapper";
import RoomMap from "../atoms/2.evan/RoomMap";

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
