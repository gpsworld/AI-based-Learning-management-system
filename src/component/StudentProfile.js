// src/components/StudentProfile.js
import React from 'react';
import { useLocation } from 'react-router-dom'; // React Router hook to get state
// import '/App.css';

function StudentProfile() {
  const location = useLocation();
  const { student } = location.state || {}; // Get student data from route state

  if (!student) {
    return <p>No student data available.</p>;
  }

  return (
    <div className='card'>
      <h2>{student.name}'s Profile</h2>
      <img 
        src={`http://localhost:5000/uploads/${student.profilePhoto}`} 
        alt="Profile" 
        style={{ width: '150px', height: '150px', borderRadius: '50%' }} 
      /><br />
      
      <p><strong>10th Marks:</strong> {student.marks10}%</p>
      <p><strong>12th Marks:</strong> {student.marks12}%</p>
      <p><strong>GPA:</strong> {student.gpa}</p>
      <p><strong>Future Interests:</strong> {student.futureInterests}</p>
      <p><strong>Extra-Curricular Activities:</strong> {student.extraActivities}</p>
    </div>
  );
}

export default StudentProfile;
