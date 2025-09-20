
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-5 bg-dark">
      <Container>
        <h2 className="text-center mb-4">Professional Experience</h2>
        <Row>
          <Col md={12}>
            <div className="mb-4">
              <h4>Florida International University</h4>
              <h5>Software Engineer Intern</h5>
              <p className="text-muted">May 2025 - August 2025</p>
              <ul>
                <li>Created a 3D livestream viewer app for optometrists to remotely conduct eye exams using Unity (C#), implementing a stereoscopic side-by-side view with custom shader graphs.</li>
                <li>Built a low-latency XR livestreaming pipeline (Docker, Linux, WebRTC) that cut streaming delay by 70%, enabling optometrists to conduct remote eye exams in real time.</li>
              </ul>
            </div>
            <div>
              <h4>Florida International University</h4>
              <h5>Software Engineer Intern</h5>
              <p className="text-muted">May 2024 - August 2024</p>
              <ul>
                <li>Developed VR/XR navigation systems using Unity (C#) and integrated Matterport for virtual environments.</li>
                <li>Implemented automated data workflows using Python for processing 3D model data, decreasing development workloads by over 50%</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
