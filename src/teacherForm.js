// src/components/TeacherForm.js
import React, { useState } from 'react';
import axios from 'axios';

function TeacherForm() {
  const [teacherData, setTeacherData] = useState({
    name: '',
    subject: '',
    experience: '',
    qualification: ''
  });

  const handleChange = (e) => {
    setTeacherData({
      ...teacherData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/teachers', teacherData)
      .then(response => {
        console.log('Teacher data inserted:', response.data);
        alert('Teacher data added successfully');
      })
      .catch(error => {
        console.error('There was an error inserting teacher data!', error);
      });
  };

  return (
    <div className='card-2'>
      <form onSubmit={handleSubmit}>
        <h2>Teacher's Portal</h2>
        <label>Enter your name: </label><br/>

          <input className='inp'  name="name" placeholder="Name" value={teacherData.name} onChange={handleChange} required/><br/>
          <label>Enter your unique ID: </label><br/>
          <input className='inp' name="uniqueId" placeholder="Unique ID" value={teacherData.uniqueId} onChange={handleChange} required/><br/>
          <label>Enter your domain: </label><br/>
          <input className='inp' name="domain" placeholder="Domain" value={teacherData.domain} onChange={handleChange}required /><br/>
          <label>Enter your qualification: </label><br/>
          <input className='inp' name="qualification" placeholder="Qualification" value={teacherData.qualification} onChange={handleChange}required /><br/>
          <label>Enter experience in months</label><br/>
          <input className='inp' name="experience" placeholder="Experience" value={teacherData.experience} onChange={handleChange}required /><br/>
          <button className='inp btn btn-primary btn-lg' type="submit">Create Profile</button>
      </form>
      </div>
  );
}

export default TeacherForm;




// code-1
// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css'



// const TeacherForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         uniqueId: '',
//         domain: '',
//         qualification: '',
//         experience: ''
//     });

//     const handleChange = e => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async e => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/teacher', formData);
//             alert('Teacher profile created successfully');
//             console.log(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//       <div className='card-2'>
//         <form onSubmit={handleSubmit}>
//           <h2>Teacher's Portal</h2>
//           <label>Enter your name: </label><br/>

//             <input className='inp'  name="name" placeholder="Name" value={formData.name} onChange={handleChange} /><br/>
//             <label>Enter your unique ID: </label><br/>
//             <input className='inp' name="uniqueId" placeholder="Unique ID" value={formData.uniqueId} onChange={handleChange} /><br/>
//             <label>Enter your domain: </label><br/>
//             <input className='inp' name="domain" placeholder="Domain" value={formData.domain} onChange={handleChange} /><br/>
//             <label>Enter your qualification: </label><br/>
//             <input className='inp' name="qualification" placeholder="Qualification" value={formData.qualification} onChange={handleChange} /><br/>
//             <label>Enter experience in months</label><br/>
//             <input className='inp' name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} /><br/>
//             <button className='inp' type="submit">Create Profile</button>
//         </form>
//         </div>
//     );
// };

// export default TeacherForm;
