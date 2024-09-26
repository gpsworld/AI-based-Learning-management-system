// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';

function Home() {
  return (
    <Container className="home-container text-center mt-5">
      <Container className='home-container text-center mt-5'>
      <h1 className="mb-4">Welcome to LMS.AI</h1>
      <p className="lead">
        A smart Learning Management System to help you organize your academic life efficiently.
      </p>

      <Row className="mt-5">
        <Col md={4} className="mb-4">
          <Link to="/student-form">
            <Button variant="primary" size="lg" block>
              Student Form
            </Button>
          </Link>
        </Col>
        <Col md={4} className="mb-4">
          <Link to="/teacher-form">
            <Button variant="secondary" size="lg" block>
              Teacher Form
            </Button>
          </Link>
        </Col>
        <Col md={4} className="mb-4">
          <Link to="/hiring-manager">
            <Button variant="success" size="lg" block>
              Hiring Manager
            </Button>
          </Link>
        </Col>
      </Row>

      <div className="mt-5">
        <h5>Get started by selecting an option above.</h5>
      </div>
      </Container>
    </Container>
  );
}

export default Home;
