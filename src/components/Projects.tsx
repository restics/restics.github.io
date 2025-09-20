
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const projects = [
  {
    title: 'REALMSADDON',
    description: 'Led development of an open source modified client of the video game Minecraft using Java & Kotlin with 8000+ users on Modrinth, demonstrating strong user adoption and scalability.',
    tags: ['Java', 'Kotlin', 'CI/CD', 'Gradle'],
    url: 'https://github.com/restics/RealmsAddon'
  },
  {
    title: 'LLMEN',
    description: 'Implemented supervised fine tuning of base Llama3-8B with 4-bit QLora on a compiled dataset of over 12000 question answering & math prompts for use as a personal chatbot.',
    tags: ['Python', 'PyTorch', 'Transformers', 'LoRA'],
    url: 'https://github.com/restics/LLMen'
  },
  {
    title: 'DungeonPixel',
    description: 'A simple procedural dungeon generator + more made in paper!',
    tags: ['Java'],
    url: 'https://github.com/restics/DungeonPixel'
  },
  {
    title: 'verybadapple',
    description: 'bad apple in github activity graph',
    tags: ['Python'],
    url: 'https://github.com/restics/verybadapple'
  },
  {
    title: 'asuclasssniper',
    description: 'Class sniper for ASU course catalog',
    tags: ['Python'],
    url: 'https://github.com/restics/asuclasssniper'
  },
  {
    title: 'hidenseekplugin',
    description: 'A minecraft plugin for hide and seek',
    tags: ['Java'],
    url: 'https://github.com/restics/hidenseekplugin'
  },
  {
    title: 'PixelHardcore',
    description: 'Some ways to make pixelmon actually hard',
    tags: ['Java'],
    url: 'https://github.com/restics/PixelHardcore'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card className="h-100 bg-dark text-white">
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div>
                      {project.tags.map((tag, i) => (
                        <span key={i} className="badge badge-pill badge-primary mr-2">{tag}</span>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
