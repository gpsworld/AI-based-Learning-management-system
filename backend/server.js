
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/lms', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Error connecting to MongoDB:', error);
});

// Student Model
const studentSchema = new mongoose.Schema({
  name: String,
  marks10: Number,
  marks12: Number,
  gpa: Number,
  futureInterests: String,
  extraActivities: String
});

const Student = mongoose.model('Student', studentSchema);

// Teacher Model
const teacherSchema = new mongoose.Schema({
  name: String,
  subject: String,
  experience: Number,
  qualification: String
});

const Teacher = mongoose.model('Teacher', teacherSchema);

// Route to insert student data
app.post('/api/students', (req, res) => {
  const newStudent = new Student(req.body);
  
  newStudent.save()
    .then((student) => res.status(201).send('Student data inserted successfully.'))
    .catch((err) => res.status(400).send('Error inserting data: ' + err.message));
});

// Route to insert teacher data
app.post('/api/teachers', (req, res) => {
  const newTeacher = new Teacher(req.body);
  
  newTeacher.save()
    .then((teacher) => res.status(201).json(teacher))
    .catch((err) => res.status(400).json('Error: ' + err));
});

app.get('/api/students', (req, res) =>{ 
  // console.log("students here!")
  Student.find()
  .then((students) => res.json(students))
  .catch((err) => res.status(400).json('Error: ' + err));
})

app.delete('/api/student/', (req, res)=>{
  const {id} = req.params;

  Student.findByIdAndRemove(id)
  .then((student) => {
    if(!student){
      return res.status(404).json({message:'Student not found'});
    }
    res.json({message:'Student deleted successfully!', student});

  })
  .catch((err)=> res.status(500).json({message:"Error deleting student", error: err }));

})

app.get('/', (req, res)=>{
  console.log("hello world")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const authRoutes = require('./auth');
app.use('/api', authRoutes);






//code-1
// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// // Create an instance of Express
// const app = express();

// // Use JSON parsing middleware
// app.use(express.json());

// // Enable CORS
// app.use(cors());

// // MongoDB connection URI (replace with your actual MongoDB URI)
// const mongoURI = 'mongodb://localhost:27017/yourdbname';

// // Connect to MongoDB
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected...'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Define a schema for your data
// const DataSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   message: String
// });

// // Create a model from the schema
// const Data = mongoose.model('Data', DataSchema);

// // Example route to save data to MongoDB
// app.post('/api/data', async (req, res) => {
//   const { name, email, message } = req.body;

//   const newData = new Data({ name, email, message });

//   try {
//     const savedData = await newData.save();
//     res.json(savedData);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to save data' });
//   }
// });

// // Example route to fetch data from MongoDB
// app.get('/api/data', async (req, res) => {
//   try {
//     const allData = await Data.find();
//     res.json(allData);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch data' });
//   }
// });

// // Start the server
