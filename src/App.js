import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavScrollExample from './Navbar'; // Correct path and case
import StudentForm from './studentForm'; // Correct path and case
import TeacherForm from './teacherForm'; // Correct path and case
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'; 
import DisplayData from './DisplayData';
import HiringManagerPortal from './hiringManager';
import Home from './HomeComponent'
import Documentation from './Documentation';
import Agenda from './Agenda';
import LoginPage from './LoginPage';
import StudentProfile from './component/StudentProfile';


function App() {
  const [studentData, setStudentData] = useState(null);
  // State to track theme (darkMode or lightMode)
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage if it was previously set
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedTheme);
  }, []);

  // Toggle theme between dark and light modes
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode); // Save theme preference to localStorage
  };

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        {/* Navigation Bar */}
        <NavScrollExample />

        {/* Routes */}
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/home' element= {<Home/>}/>
          <Route path="/student-form" element={<StudentForm />} />
          <Route path="/teacher-form" element={<TeacherForm />} />
          <Route path="/display-data" element={<DisplayData/>}/>
          <Route path="/hiring-manager" element={<HiringManagerPortal/>}/>
          <Route path="/Agenda" element={<Agenda/>}/>
          <Route path='/Documentation' element={<Documentation/>}/>
          <Route path="/profile"  element={<StudentProfile student={studentData} />} />
          
        </Routes>

        {/* Theme Toggle Button */}
        {/* <Button onClick={toggleTheme} className="theme-toggle-btn">
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </Button> */}
      </div>
    </Router>
  );
}

export default App;






// code -1 kuch problem hua toh ye use kar
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavScrollExample from './Navbar';
// import StudentForm from './studentForm';
// import TeacherForm from './teacherForm';
// import React, { useState, useEffect } from 'react';
// import { Button, Navbar, Container } from 'react-bootstrap'; 




// function App() {
//   function App() {
//  const [darkMode, setDarkMode] = useState(false); // State to track theme

// // Optional: Load theme from localStorage if it was previously set
//  useEffect(() => {
//    const savedTheme = localStorage.getItem('darkMode') === 'true';
//    setDarkMode(savedTheme);
//  }, []);
//  // Toggle the theme between dark and light  
//   const toggleTheme = () => {
//     setDarkMode(!darkMode);     localStorage.setItem('darkMode', !darkMode); // Save to localStorage
//    };

//   return (
//     <Router>
//       <div className={darkMode? 'dark-mode': 'light-mode'}>
        
//         <NavScrollExample/> 
//          <Routes>
//           <Route path="/student-form" element={<StudentForm />} />
//           <Route path="/teacher-form" element={<TeacherForm/>} />
//         </Routes>
//         <Button onClick={toggleTheme}>
//             {darkMode ? 'Light Mode' : 'Dark Mode'}
//           </Button>
//       </div>
//     </Router>
//   );
// }

// export default App;


// code-2 backchodi no .2 
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavScrollExample from './Navbar'; // Ensure the correct path and case for the component
// import StudentForm from './studentForm'; // Ensure correct case sensitivity and path
// import TeacherForm from './teacherForm'; // Ensure correct case sensitivity and path
// import React, { useState, useEffect } from 'react';
// import { Button, Navbar, Container } from 'react-bootstrap'; 

// function App() {
//   const [darkMode, setDarkMode] = useState(false); // State to track theme

//   // Optional: Load theme from localStorage if it was previously set
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('darkMode') === 'true';
//     setDarkMode(savedTheme);
//   }, []);

//   // Toggle the theme between dark and light  
//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//     localStorage.setItem('darkMode', !darkMode); // Save to localStorage
//   };

//   return (
//     <Router>
//       <div className={darkMode ? 'dark-mode' : 'light-mode'}>
//         <NavScrollExample /> {/* Your navigation component */}
        
//         <Routes>
//           <Route path="/student-form" element={<StudentForm />} />
//           <Route path="/teacher-form" element={<TeacherForm />} />
//         </Routes>

//         <Button onClick={toggleTheme}>
//           {darkMode ? 'Light Mode' : 'Dark Mode'}
//         </Button>
//       </div>
//     </Router>
//   );
// }

// export default App;
