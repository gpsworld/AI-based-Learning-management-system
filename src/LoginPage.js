// src/components/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import './Loginpage.css';
import { useNavigate } from 'react-router-dom';
import './App.css'

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [role, setRole] = useState('Student'); // Role: Student, Teacher, Hiring Manager
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Only for Signup
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      axios.post('http://localhost:5000/api/login', { email, password, role })
        .then(response => {
          console.log('Login successful:', response.data);
          // Redirect based on role
          if (role === 'Student') navigate('/student-dashboard');
          else if (role === 'Teacher') navigate('/teacher-dashboard');
          else navigate('/hiring-dashboard');
        })
        .catch(error => {
          console.error('Error logging in:', error);
          alert('Invalid credentials. Please try again.');
        });
    } else {
      // For Signup
      axios.post('http://localhost:5000/api/signup', { name, email, password, role })
        .then(response => {
          console.log('Signup successful:', response.data);
          alert('Account created successfully! Please log in.');
          setIsLogin(true); // Switch to login after successful signup
        })
        .catch(error => {
          console.error('Error signing up:', error);
          alert('Error during signup. Please try again.');
        });
    }
  };

  return (
    <div className="login-page">
      <div className="card-l">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
            {/* <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Hiring Manager">Hiring Manager</option>
          </select> */}
              <label>Name</label>
              <input className='inp'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </>
          )}
          {/* <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Hiring Manager">Hiring Manager</option>
          </select> */}
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Hiring Manager">Hiring Manager</option>
          </select>
          <br/>
          <br/>
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p onClick={() => setIsLogin(!isLogin)} className="toggle-link">
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;


//code=1
// // LoginPage.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import  "./Loginpage.css"
// import 'bootstrap/dist/css/bootstrap.min.css';

// function LoginPage() {
//   const [userType, setUserType] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (userType === 'student') {
//       navigate('/student-form');
//     } else if (userType === 'teacher') {
//       navigate('/teacher-form');
//     } else if (userType === 'hiring-manager') {
//       navigate('/hiring-manager');
//     } else {
//       alert('Please select a valid user type');
//     }
//   };

//   return (
//     <Container className="login-container text-center mt-5 card-l">
//       <h1 className="mb-4">Welcome to LMS.AI</h1>
//       <p className="lead">Please log in to continue.</p>
//       <Row className="mt-4">
//           <Col md={12}>
//             <Form.Group controlId="formBasicUserType">
//               <Form.Label>Select User Type</Form.Label>
//               <Form.Select
//                 aria-label="Select User Type"
//                 value={userType}
//                 onChange={(e) => setUserType(e.target.value)}
//               >
//                 <option value="">Choose...</option>
//                 <option value="student">Student</option>
//                 <option value="teacher">Teacher</option>
//                 <option value="hiring-manager">Hiring Manager</option>
//               </Form.Select>
//             </Form.Group>
//           </Col>
//         </Row>
//       <Form onSubmit={handleLogin}>
//         <Row>
//           <Col md={12}>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={12}>
//             <Form.Group controlId="formBasicPassword" className="mt-3">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </Form.Group>
//           </Col>
//         </Row>
        
//         <Button variant="primary" type="submit" className="mt-4">
//           Login
//         </Button>
//       </Form>
//     </Container>
//   );
// }

// export default LoginPage;
