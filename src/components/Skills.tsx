
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const skills = {
  'Programming Languages': ['Java', 'Python', 'SQL', 'C#', 'C++', 'Javascript', 'Kotlin'],
  'ML/AI': ['PyTorch', 'Scikit-Learn', 'Transformers', 'Pandas', 'NumPy'],
  'Cloud/DevOps': ['Docker', 'Nginx', 'Oracle Cloud', 'AWS', 'Azure'],
  'Frameworks/Tools': ['Unity', 'Git', 'CI/CD (Github Actions)', '.NET', 'Spring']
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-5 bg-dark">
      <Container>
        <h2 className="text-center mb-4">Skills</h2>
        <Row>
          {Object.entries(skills).map(([category, skillList]) => (
            <Col md={6} key={category} className="mb-4">
              <h4>{category}</h4>
              <ul>
                {skillList.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
