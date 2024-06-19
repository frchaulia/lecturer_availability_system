'use client'
import React, { useState, useEffect } from 'react';

const Home = () => {
    const [availabilityData, setAvailabilityData] = useState([]);

    useEffect(() => {
        const fetchAvailabilityData = async () => {
            try {
                const response = await fetch('/api/fetchAvailability');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAvailabilityData(data);
            } catch (error) {
                console.error('Error fetching availability data:', error);
            }
        };

        fetchAvailabilityData();
    }, []);

    return (
        <div>
            <h1>Availability Data</h1>
            <ul>
                {availabilityData.map((item, index) => (
                    <li key={index}>{/* Display your availability data */}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;