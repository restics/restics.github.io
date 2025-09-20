
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 bg-dark text-white">
      <Container>
        <Row>
          <Col className="text-center">
            <p>Copyright &copy; {new Date().getFullYear()} Michael Liu</p>
            <div>
              <a href="https://github.com/restics" target="_blank" rel="noopener noreferrer" className="text-white mr-3">
                <i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i>
              </a>
              <a href="https://www.linkedin.com/in/mjliu2" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
