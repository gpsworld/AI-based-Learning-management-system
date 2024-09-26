// Agenda.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Agenda.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const agendaItems = [
  {
    title: 'Introduction to AI in Education',
    description: 'An overview of how AI is transforming the educational landscape.',
  },
  {
    title: 'Setting Up Your Learning Path',
    description: 'Guidelines on how to effectively create your personalized learning roadmap.',
  },
  {
    title: 'Data-Driven Learning',
    description: 'Exploring the role of data in enhancing the learning experience.',
  },
  {
    title: 'Interactive Learning Tools',
    description: 'A look at the tools that facilitate interactive and engaging learning.',
  },
  {
    title: 'Feedback and Improvement',
    description: 'Understanding how to use feedback to enhance your learning journey.',
  },
];

function Agenda() {
  return (
    <Container className="agenda-container text-center mt-5">
      <h1 className="mb-4">LMS.AI Agenda</h1>
      <Row>
        {agendaItems.map((item, index) => (
          <Col md={4} className="mb-4" key={index}>
            <div className="agenda-item">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Agenda;
