"use client"
import React, { useEffect, useState } from "react";

import Background from "../atoms/0.main/1.background";
import Header from "../atoms/0.main/1.header";
import Navbar from "../atoms/0.main/1.navbar";
import Container from "../atoms/0.main/1.container";
import ContentWrapper from "../atoms/0.main/1.content_wrapper";

import LecturerAvailabilitySystem from '../atoms/LectureAvailabilitySystem';
// import {TableSta} from "../atoms/table_statistic";   try code
// import CardHolderSta from "../atoms/cardholder_statistic"; yesteday monday


const LecturerStatistic = () => {
    const [availabilityData, setAvailabilityData] = useState([]);
  
    useEffect(() => {
      const fetchAvailabilityData = async () => {
        try {
          const response = await fetch('/api/lectures');
          const data = await response.json();
          setAvailabilityData(data);
        } catch (error) {
          console.error('Error fetching availability data:', error);
        }
      };
  
      fetchAvailabilityData();
    }, []);
  
    return (

        <LecturerAvailabilitySystem availabilityData={availabilityData} />

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

export default LecturerStatistic