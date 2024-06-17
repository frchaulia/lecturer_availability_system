"use client"
import React from "react";
import Background from "../atoms/background";
import Header from "../atoms/header";
import Navbar from "../atoms/navbar";
import Container from "../atoms/container";
import ContentWrapper from "../atoms/content_wrapper";

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