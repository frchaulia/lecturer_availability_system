import React, { useState } from 'react';
import LecturerCard from './components/LecturerCard';
import './App.css';

const App = () => {
  const [lecturers, setLecturers] = useState([]);
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');

  const addLecturer = () => {
    const newLecturer = {
      id: Date.now(),
      name,
      course
    };
    setLecturers([...lecturers, newLecturer]);
    setName('');
    setCourse('');
  };

  const deleteLecturer = (id) => {
    setLecturers(lecturers.filter(lecturer => lecturer.id !== id));
  };

  return (
    <div className="App">
      <h1>Lecturer Card Holder</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button onClick={addLecturer}>Add Lecturer</button>
      </div>
      <div className="card-container">
        {lecturers.map(lecturer => (
          <LecturerCard key={lecturer.id} lecturer={lecturer} onDelete={deleteLecturer} />
        ))}
      </div>
    </div>
  );
};

export default App;