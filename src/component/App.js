// src/components/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentForm from './StudentForm';
import StudentProfile from './StudentProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/student-form' element={<StudentForm />} />
        <Route path='/student-profile' element={<StudentProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
