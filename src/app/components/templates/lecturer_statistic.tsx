"use client"
import React, { useState, useEffect } from 'react';
import LecturerAvailabilitySystem from '@/app/components/atoms/3.fahmi/LectureAvailabilitySystem'; // Adjust path as needed

const LecturerStatistic = () => {
    const [availabilityData, setAvailabilityData] = useState([]);

    useEffect(() => {
        const fetchAvailabilityData = async () => {
            try {
                const response = await fetch('api/fetchAvailability'); // Updated to fetch from /api/fetchAvailability
                if (!response.ok) {
                    throw new Error('Failed to fetch availability data');
                }
                const data = await response.json();
                setAvailabilityData(data);
            } catch (error) {
                console.error('Error fetching availability data:', error);
            }
        };

        fetchAvailabilityData();
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

    return (
        <div>
            <h1>Lecturer Statistic</h1>
            <LecturerAvailabilitySystem availabilityData={availabilityData} />
        </div>
    );
};

export default LecturerStatistic;