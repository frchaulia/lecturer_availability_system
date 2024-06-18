import axios from 'axios';

export const fetchLecturers = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/lecturers');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
