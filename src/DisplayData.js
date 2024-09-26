// Inside your React component (e.g., DisplayData.js)
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DisplayData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students');
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Fetched Data:</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}: {item.email} - {item.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayData;
