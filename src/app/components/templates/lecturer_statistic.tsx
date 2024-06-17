"use client"
import React from "react";
import Background from "../atoms/0.main/1.background";
import Header from "../atoms/0.main/1.header";
import Navbar from "../atoms/0.main/1.navbar";
import Container from "../atoms/0.main/1.container";
import ContentWrapper from "../atoms/0.main/1.content_wrapper";

import LecturerAvailabilitySystem from '../atoms/statistic_table_report';
// import {TableSta} from "../atoms/table_statistic";   try code
// import CardHolderSta from "../atoms/cardholder_statistic"; yesteday monday


export default function lecturer_statistic (){
    return (

        <LecturerAvailabilitySystem availabilityRecords={[]}></LecturerAvailabilitySystem>

        // <Container>
        //     <Background>
        //         <TableSta/>
        //     </Background>
            
        // </Container>

        // <Container>
        //     <Background>
        //         <ContentWrapper>
        //             <Header>
        //                 <Navbar></Navbar>
        //             </Header>

        //             <TableSta />
        //         {/* <CardHolderSta>
        //             </CardHolderSta> */}
        //     </ContentWrapper>
        // </Background>
        // </Container >
    
    );
}