// Documentation.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Documentation.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const documentationContent = [
  {
    title: 'User Access',
    description: 'Users can only access limited parts of the AI functionalities to ensure ethical use and data privacy. Access levels will be defined based on user roles (students, teachers, etc.).',
  },
  {
    title: 'Data Privacy',
    description: 'All personal data will be handled in accordance with data protection regulations. User data will be anonymized and stored securely.',
  },
  {
    title: 'Responsible Use',
    description: 'Users are encouraged to use the AI features responsibly. Any misuse, including manipulating data or exploiting the system, will result in immediate suspension of access.',
  },
  {
    title: 'Feedback Mechanism',
    description: 'Users can provide feedback on the AI features to help improve the system. Feedback should be constructive and focused on usability.',
  },
  {
    title: 'Compliance',
    description: 'Users must comply with all regulations and guidelines provided. Non-compliance may lead to penalties, including access revocation.',
  },
];

function Documentation() {
  return (
    <Container className="documentation-container text-center mt-5">
      <h1 className="mb-4">Documentation and Guidelines</h1>
      <Row>
        {documentationContent.map((item, index) => (
          <Col md={4} className="mb-4" key={index}>
            <div className="documentation-item">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Documentation;
