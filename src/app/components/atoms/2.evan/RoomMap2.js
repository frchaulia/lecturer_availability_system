import React from 'react';

const RoomMap = () => {
    // Define room data for the inverted map
    const invertedRooms = [
      { id: 12, name: 'Room 12', x: 2150, y: 50, width: 100, height: 100 },
      { id: 13, name: 'Room 13', x: 2050, y: 50, width: 100, height: 100 },
      { id: 14, name: 'Room 14', x: 1950, y: 50, width: 100, height: 100 },
      { id: 15, name: 'Room 15', x: 1850, y: 50, width: 100, height: 100 },
      { id: 16, name: 'Room 16', x: 1750, y: 50, width: 100, height: 100 },
      { id: 17, name: 'Room 17', x: 2150, y: 350, width: 100, height: 100 },
      { id: 18, name: 'Room 18', x: 2050, y: 350, width: 100, height: 100 },
      { id: 19, name: 'Room 19', x: 1950, y: 350, width: 100, height: 100 },
      { id: 20, name: 'Room 20', x: 1850, y: 350, width: 100, height: 100 },
      { id: 21, name: 'Room 21', x: 1750, y: 350, width: 100, height: 100 },
      { id: 22, name: 'Room 22', x: 2250, y: 200, width: 100, height: 100 },
    ];

  // Define pathway data for the inverted map
  const invertedPathways = [
    { x1: 2250, y1: 150, x2: 1600, y2: 150 }, // First pathway shifted to the left
    { x1: 2250, y1: 350, x2: 1600, y2: 350 }, // Second pathway shifted to the left
    { x1: 2250, y1: 150, x2: 2250, y2: 350 }, // Vertical pathway connecting first pathway to second pathway
  ];

  return (
    <svg width="2000" height="1500">
      {/* Render pathways for the inverted map */}
      {invertedPathways.map((pathway, index) => (
        <line key={index} x1={pathway.x1} y1={pathway.y1} x2={pathway.x2} y2={pathway.y2} stroke="black" strokeWidth="5" />
      ))}

      {/* Render rooms for the inverted map */}
      {invertedRooms.map(room => (
        <g key={room.id}>
          {/* Room */}
          <rect x={room.x} y={room.y} width={room.width} height={room.height} fill="lightblue" stroke="black" strokeWidth="2" />
          {/* Room label */}
          <text x={room.x + room.width / 2} y={room.y + room.height / 2} textAnchor="middle" dominantBaseline="middle" fill="black">{room.name}</text>
        </g>
      ))}
    </svg>
  );
};

export default RoomMap;
