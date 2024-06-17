import React from 'react';
import RoomMap from '../atoms/RoomMap';

const roomData = [
  { type: 'table', x: 100, y: 100, width: 50, height: 50 },
  { type: 'chair', x: 150, y: 150, radius: 10 },
  // Add more objects as needed, representing different elements in the room
];

const Home = () => {
  return (
    <div>
      <h1>Room Map</h1>
      <RoomMap roomData={roomData} />
    </div>
  );
};

export default Home;
