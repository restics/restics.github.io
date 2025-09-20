
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <h1 className="display-4">Michael Liu</h1>
            <p className="lead">Computer science student with experience in ML, XR, and systems engineering. Skilled in developing scalable open-source projects, cloud-native deployments, and fine-tuned LLMs.</p>
            <p><strong>Email:</strong> michael.liu.411@gmail.com</p>
            <p><strong>Location:</strong> Tempe, AZ</p>
            <Button href="https://github.com/restics" target="_blank" variant="outline-light" className="mr-2">
              <i className="bi bi-github"></i> GitHub
            </Button>
            <Button href="https://www.linkedin.com/in/mjliu2" target="_blank" variant="outline-light">
              <i className="bi bi-linkedin"></i> LinkedIn
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
