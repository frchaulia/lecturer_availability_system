import React from 'react';

const RoomMap = () => {
  // Define room data
  const rooms = [
    { id: 1, name: 'Room 1', x: 150, y: 250, width: 130, height: 100 },
    { id: 2, name: 'Room 2', x: 280, y: 250, width: 130, height: 100 },
    { id: 3, name: 'Room 3', x: 410, y: 250, width: 130, height: 100 },
    { id: 4, name: 'Room 4', x: 540, y: 250, width: 130, height: 100 },
    { id: 5, name: 'Room 5', x: 670, y: 250, width: 130, height: 100 },
    { id: 6, name: 'Room 6', x: 150, y: 550, width: 130, height: 100 },
    { id: 7, name: 'Room 7', x: 280, y: 550, width: 130, height: 100 },
    { id: 8, name: 'Room 8', x: 410, y: 550, width: 130, height: 100 },
    { id: 9, name: 'Room 9', x: 540, y: 550, width: 130, height: 100 },
    { id: 10, name: 'Room 10', x: 670, y: 550, width: 130, height: 100 },
    { id: 11, name: 'Room 11', x: 50, y: 370, width: 100, height: 160 },
  ];

  const invertedRooms = [
    { id: 12, name: 'Room 12', x: 1250, y: 250, width: 130, height: 100 },
    { id: 13, name: 'Room 13', x: 1380, y: 250, width: 130, height: 100 },
    { id: 14, name: 'Room 14', x: 1510, y: 250, width: 130, height: 100 },
    { id: 15, name: 'Room 15', x: 1640, y: 250, width: 130, height: 100 },
    { id: 16, name: 'Room 16', x: 1770, y: 250, width: 130, height: 100 },
    { id: 17, name: 'Room 17', x: 1250, y: 550, width: 130, height: 100 },
    { id: 18, name: 'Room 18', x: 1380, y: 550, width: 130, height: 100 },
    { id: 19, name: 'Room 19', x: 1510, y: 550, width: 130, height: 100 },
    { id: 20, name: 'Room 20', x: 1640, y: 550, width: 130, height: 100 },
    { id: 21, name: 'Room 21', x: 1770, y: 550, width: 130, height: 100 },
    { id: 22, name: 'Room 22', x: 1900, y: 370, width: 100, height: 160 },
  ];

  const liftRooms = [
    { id: 23, name: 'Lift 1', x: 800, y: 100, width: 150, height: 150 },
    { id: 24, name: 'Lift 2', x: 1100, y: 100, width: 150, height: 150 },
    { id: 25, name: 'Lift 3', x: 915, y: 650, width: 120, height: 120 },
    { id: 26, name: 'Lift 4', x: 1035, y: 650, width: 120, height: 120 },
  ];

  // Define pathway data
  const pathways = [
    { x1: 150, y1: 550, x2: 800, y2: 550 }, // First pathway shifted down
    { x1: 150, y1: 750, x2: 800, y2: 750 }, // Second pathway shifted down
    { x1: 150, y1: 550, x2: 150, y2: 750 }, // Vertical pathway connecting first pathway to second pathway
  ];

  // Define pathway data for the inverted map
  const invertedPathways = [
    { x1: 1900, y1: 350, x2: 1250, y2: 350 }, // First pathway shifted down
    { x1: 1900, y1: 550, x2: 1250, y2: 550 }, // Second pathway shifted down
    { x1: 1900, y1: 350, x2: 1900, y2: 550 }, // Vertical pathway connecting first pathway to second pathway
  ];

  // Define pathway data for the lobby
  const PathwaysLobby = [
    { x1: 800, y1: 250, x2: 800, y2: 650 }, // Vertical left
    { x1: 1250, y1: 250, x2: 1250, y2: 650 }, // Vertical right
    { x1: 800, y1: 250, x2: 1250, y2: 250 }, // Horizontal top
    { x1: 800, y1: 650, x2: 1250, y2: 650 }, // Horizontal bottom
  ];

  return (
    <svg width="4000" height="1500">
      {/* Render pathways */}
      {pathways.map((pathway, index) => (
        <line key={index} x1={pathway.x1} y1={pathway.y1} x2={pathway.x2} y2={pathway.y2} stroke="black" strokeWidth="5" />
      ))}

      {/* Render rooms */}
      {rooms.map(room => (
        <g key={room.id}>
          {/* Room */}
          <rect x={room.x} y={room.y + 200} width={room.width} height={room.height} fill="lightblue" stroke="black" strokeWidth="2" />
          {/* Room label */}
          <text x={room.x + room.width / 2} y={room.y + 200 + room.height / 2} textAnchor="middle" dominantBaseline="middle" fill="black">{room.name}</text>
        </g>
      ))}

       {/* Render pathways for the inverted map */}
       {invertedPathways.map((pathway, index) => (
        <line key={index} x1={pathway.x1} y1={pathway.y1 + 200} x2={pathway.x2} y2={pathway.y2 + 200} stroke="black" strokeWidth="5" />
      ))}

      {/* Render rooms for the inverted map */}
      {invertedRooms.map(room => (
        <g key={room.id}>
          {/* Room */}
          <rect x={room.x} y={room.y + 200} width={room.width} height={room.height} fill="lightblue" stroke="black" strokeWidth="2" />
          {/* Room label */}
          <text x={room.x + room.width / 2} y={room.y + 200 + room.height / 2} textAnchor="middle" dominantBaseline="middle" fill="black">{room.name}</text>
        </g>
      ))}

       {/* Render pathways for lobby */}
       {PathwaysLobby.map((pathway, index) => (
        <line key={index} x1={pathway.x1} y1={pathway.y1 + 200} x2={pathway.x2} y2={pathway.y2 + 200} stroke="black" strokeWidth="5" />
      ))}

      {/* Render rooms for the lift */}
      {liftRooms.map(room => (
        <g key={room.id}>
          {/* Room */}
          <rect x={room.x} y={room.y + 200} width={room.width} height={room.height} fill="lightblue" stroke="black" strokeWidth="2" />
          {/* Room label */}
          <text x={room.x + room.width / 2} y={room.y + 200 + room.height / 2} textAnchor="middle" dominantBaseline="middle" fill="black">{room.name}</text>
        </g>
      ))}

    </svg>
  );
};

export default RoomMap;
