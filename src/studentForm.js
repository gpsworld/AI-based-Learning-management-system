// src/components/StudentForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { useNavigate } from 'react-router-dom';

function StudentForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [marks10, setMarks10] = useState(0);
  const [marks12, setMarks12] = useState(0);
  const [gpa, setGpa] = useState(0);
  const [futureInterests, setFutureInterests] = useState("");
  const [extraActivities, setExtraActivities] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !marks10 || !marks12 || !gpa || !futureInterests || !extraActivities || !profilePhoto) {
      alert("Please fill all fields including profile photo.");
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('marks10', marks10);
    formData.append('marks12', marks12);
    formData.append('gpa', gpa);
    formData.append('futureInterests', futureInterests);
    formData.append('extraActivities', extraActivities);
    formData.append('profilePhoto', profilePhoto);

    axios.post('http://localhost:5000/api/students', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log('Student data inserted:', response.data);
        alert('Student data added successfully');
        setName("");
        setMarks10(0);
        setMarks12(0);
        setGpa(0);
        setFutureInterests("");
        setExtraActivities("");
        setProfilePhoto(null);
        navigate("/student-profile", { state: { student: response.data } });
      })
      .catch(error => {
        console.error('There was an error inserting student data!', error);
      });
  };

  return (
    <div className='card'>
      <h2>Students' Portal</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter your name below:</label><br />
        <input className="inp" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required /><br />
        
        <label>Upload Profile Photo:</label><br />
        <input className="inp" type="file" name="profilePhoto" onChange={(e) => setProfilePhoto(e.target.files[0])} required /><br />

        <label>Enter your 10th marks in percentage:</label><br />
        <input className="inp" name="tenthMarks" placeholder="10th Marks" value={marks10} onChange={(e) => setMarks10(e.target.value)} required /><br />
        
        <label>Enter your 12th marks in percentage:</label><br />
        <input className="inp" name="twelfthMarks" placeholder="12th Marks" value={marks12} onChange={(e) => setMarks12(e.target.value)} required /><br />
        
        <label>Enter your GPA Score out of 10:</label><br />
        <input className="inp" name="gpa" placeholder="GPA" value={gpa} onChange={(e) => setGpa(e.target.value)} required /><br />
        
        <label>Enter your future interests:</label><br />
        <input className="inp" name="futureInterests" placeholder="Future Interests" value={futureInterests} onChange={(e) => setFutureInterests(e.target.value)} required /><br />
        
        <label>Enter your extra-curricular activities:</label><br />
        <input className="inp" name="extraActivities" placeholder="Extra Curricular activities" value={extraActivities} onChange={(e) => setExtraActivities(e.target.value)} required /><br />

        <button className="inp btn btn-primary btn-lg" type="submit">Create Profile</button><br/>
        <button className="inp btn btn-success btn-lg" type="submit">View your portfolio</button>
      </form>
    </div>
  );
}

export default StudentForm;
