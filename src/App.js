import React, { useState } from 'react';
import { Carousel} from 'react-bootstrap';
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from './project1.png';
import img2 from './project2.png';
import img3 from './vehiclesco.jpeg';
import cv from "./Saksham_Kaloo_Resume_May2025.pdf";

// components start

const HeroSection = () => (
  <section className="bg-dark text-white">
    <Carousel fade indicators={false} controls={true}>
      <Carousel.Item className="text-center" style={{ height: '400px' }}>
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <h1 className="display-4">Hi, I'm Saksham Kaloo</h1>
          <p className="lead">A Passionate Full Stack MERN Developer</p>
          <div className="mt-3">
            <Button variant="primary" className="me-2">Hire Me</Button>
            <Button variant="outline-light">See Projects</Button>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="text-center" style={{ height: '400px' }}>
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <h1 className="display-4">I Build Modern Web Apps</h1>
          <p className="lead">Using MongoDB, Express, React, and Node.js</p>
          <div className="mt-3">
            <Button variant="primary" className="me-2">Explore Skills</Button>
            <Button variant="outline-light">Download CV</Button>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="text-center" style={{ height: '400px' }}>
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <h1 className="display-4">Let’s Work Together</h1>
          <p className="lead">Remote & On-site Opportunities Welcome</p>
          <div className="mt-3">
            <Button variant="primary" className="me-2">Contact Me</Button>
            <Button variant="outline-light">My Resume</Button>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  </section>
);

const AboutSection = () => (
  <section className="py-5 bg-light">
    <Container>
      <h2 className="text-center mb-4">About Me</h2>
      <Row className="align-items-center">
        <Col md={5} className="mb-3 mb-md-0">
          <img
            src="https://placehold.co/200x200/blue/white?text=Saksham Kaloo"
            alt="Profile"
            className="img-fluid rounded-circle shadow"
          />
        </Col>
        <Col md={7}>
          <p>
            Hello! I'm <strong>Saksham Kaloo</strong>, a dedicated full stack web developer specializing in the MERN stack. I love building responsive, efficient, and modern web applications that solve real-world problems.
          </p>
          <p>
            With a strong foundation in JavaScript, React, Node.js, and MongoDB, I bring a full-cycle development mindset — from design to deployment. I'm always learning and enjoy working on both frontend and backend challenges.
          </p>
          <p>
            I'm currently looking for freelance opportunities, remote jobs, or collaborations with startups and businesses that value clean code and great user experiences.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

const SkillsSection = () => (
  <section className="py-5">
    <Container>
      <h2 className="text-center mb-4">My Skills</h2>
      <Row className="g-4 text-center">
        {[
          'HTML5',
          'CSS3',
          'JavaScript',
          'React.js',
          'Node.js',
          'Express.js',
          'MongoDB',
          'Bootstrap',
          'Git & GitHub',
          'REST APIs',
          'Postman',
          'Mongoose',
        ].map((skill, idx) => (
          <Col key={idx} md={4} sm={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title>{skill}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

const ProjectsSection = () => (
  <section className="py-5 bg-light">
    <Container>
      <h2 className="text-center mb-4">My Projects</h2>
      <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={img1}
                alt={`Many Calculators`}
              />
              <Card.Body>
                <Card.Title>Many Calculators</Card.Title>
                <Card.Text>
                  Many kind of calculators with backend to log and display all activity...Full stack project
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <a href="https://mycalculators-1.onrender.com/" target='_blank' rel='noreferrer'><Button variant="primary" size="sm">View Live</Button></a>
                  <a href="https://github.com/sakshamkaloo/mycalculators" target='_blank' rel='noreferrer'>
                  <Button variant="outline-secondary" size="sm">GitHub</Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={img2}
                alt={`Project `}
              />
              <Card.Body>
                <Card.Title>Blogsphere</Card.Title>
                <Card.Text>
                  A fullstack blogging platform demo to showcase MERN stack implementation.
                </Card.Text>
                <div className="d-flex justify-content-between">
                 <a href="https://blogsfront.onrender.com/" target='_blank' rel='noreferrer'><Button variant="primary" size="sm">View Live</Button></a>
                  <a href="https://github.com/sakshamkaloo/blogsfront" target='_blank' rel='noreferrer'>
                  <Button variant="outline-secondary" size="sm">GitHub</Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={img3}
                alt={`Project `}
              />
              <Card.Body>
                <Card.Title>Veg Food</Card.Title>
                <Card.Text>
                  A simple ReactJS and React-Bootstrap website to showcase benefits of Vegitables.
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <a href="https://vehicleco.onrender.com/" target='_blank' rel='noreferrer'><Button variant="primary" size="sm">View Live</Button></a>
                  <a href="https://github.com/sakshamkaloo/VehicleCo" target='_blank' rel='noreferrer'>
                  <Button variant="outline-secondary" size="sm">GitHub</Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </Container>
  </section>
);

const TestimonialSection = () => (
  <section className="py-5 bg-light">
    <Container>
      <h3 className="mb-4 text-center">What People Say</h3>
      <Row className="g-4 justify-content-center">
        
          <Col md={6}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    He is a hardworking boy, a good developer. I highly recommend him.
                  </p>
                  <footer className="blockquote-footer mt-3">
                     — <cite title="Role or Company">Sahil Soma</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    "I really like the website he build for our business, the website can be opend on both laptop and mobile which saved my money as now I dont have to make mobile app for my business."
                  </p>
                  <footer className="blockquote-footer mt-3">
                     — <cite title="Role or Company">Varinder Pal Singh</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </Container>
  </section>
);


const ContactSection = () => (
  <section className="py-5">
    <Container>
      <h2 className="text-center mb-4">Contact Me</h2>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="contactName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contactEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contactMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your Message" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          {/* Map is added in next section */}
          <div className="bg-light d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6713.011242212235!2d74.85549192579472!3d32.72576228134076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1751708043104!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);



function App() {
  const [page, setPage] = useState('home');

  const pages = {
    home: 'Home',
    about: 'About Me',
    skills: 'My Skills',
    projects: 'My Projects',
    cv: 'My CV',
    hireme: 'Hire Me',
  };

  const navigate = (p) => {
    setPage(p);
    window.scrollTo(0, 0);
  };

  const NavbarComponent = () => (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#">Saksham Kaloo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            {Object.entries(pages).map(([key, label]) => (
              <Nav.Link key={key} onClick={() => navigate(key)}>
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  const FooterComponent = () => (
    <footer className="bg-dark text-white text-center mt-5 pt-4 pb-2">
      <Container>
        <p>&copy; 2025 Your Name | All Rights Reserved</p>
        <nav>
          <Nav className="justify-content-center">
            {['home', 'about', 'projects', 'hireme'].map((key) => (
              <Nav.Link
                key={key}
                className="text-white"
                onClick={() => navigate(key)}
              >
                {pages[key]}
              </Nav.Link>
            ))}
          </Nav>
        </nav>
      </Container>
    </footer>
  );

  // about page
  const AboutPage = () => (
  <div>
    <section className="py-5 bg-light">
    <Container>
      <h2 className="text-center mb-3">About Me</h2>
      <p className="lead text-center mx-auto" style={{ maxWidth: '800px' }}>
        I’m <strong>Saksham Kaloo</strong>, a passionate and creative full stack developer who turns ideas into digital experiences using the MERN stack. I enjoy building clean, fast, and user-friendly web applications that make an impact.
      </p>
    </Container>
  </section>

  <section className="py-5">
    <Container>
      <h3 className="mb-4 text-center">My Journey Into Web Development</h3>
      <p>
        My journey into web development began with curiosity and a love for problem-solving.
        I wrote my first line of HTML in [Year], and from that moment, I was hooked. What started
        as a hobby quickly turned into a passion and eventually a career.
      </p>
      <p>
        I taught myself the fundamentals of front-end development, diving into HTML, CSS,
        and JavaScript. Later, I transitioned into full-stack development with the MERN stack —
        MongoDB, Express.js, React.js, and Node.js — which gave me the ability to build powerful,
        scalable web applications from end to end.
      </p>
      <p>
        Over the years, I’ve built projects ranging from small personal websites to full-featured
        web apps. Every line of code I write is guided by my goal to create clean, efficient, and
        user-centered experiences.
      </p>
    </Container>
  </section>

  <section className="py-5 bg-light">
    <Container>
      <h3 className="mb-4 text-center">My Mission & Core Values</h3>
      <Row className="text-center">
        <Col md={4} className="mb-4">
          <h5>Build With Purpose</h5>
          <p>I aim to create applications that are not only functional, but meaningful — tools that solve real-world problems and help people.</p>
        </Col>
        <Col md={4} className="mb-4">
          <h5>Keep It Clean & Scalable</h5>
          <p>I write code that is clean, efficient, and easy to maintain — always keeping performance and long-term scale in mind.</p>
        </Col>
        <Col md={4} className="mb-4">
          <h5>Learn & Improve Continuously</h5>
          <p>The tech world evolves fast. I commit to lifelong learning and always staying curious, adaptable, and up to date.</p>
        </Col>
      </Row>
    </Container>
  </section>

  <section className="py-5">
    <Container>
      <h3 className="mb-4 text-center">Fun Facts & Hobbies</h3>
      <Row className="g-4 text-center">
        <Col md={4}>
          <div className="p-4 shadow-sm border rounded">
            <h5> Music Lover</h5>
            <p>I code best when my headphones are on — lo-fi, synthwave, and classic rock keep me in flow.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="p-4 shadow-sm border rounded">
            <h5>cricket </h5>
            <p>I enjoy playing cricket and I love both my bowling and my  bating also.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="p-4 shadow-sm border rounded">
            <h5>Weekend Explorer</h5>
            <p>On weekends, I like to unplug, travel locally, and take in nature — it's how I recharge and reset.</p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>

  <section className="py-5 bg-light">
    <Container>
      <h3 className="mb-4 text-center">What People Say</h3>
      <Row className="g-4 justify-content-center">
        
          <Col md={6}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    He is a hardworking boy, a good developer. I highly recommend him.
                  </p>
                  <footer className="blockquote-footer mt-3">
                     — <cite title="Role or Company">Sahil Soma</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    "I really like the website he build for our business, the website can be opend on both laptop and mobile which saved my money as now I dont have to make mobile app for my business."
                  </p>
                  <footer className="blockquote-footer mt-3">
                     — <cite title="Role or Company">Varinder Pal Singh</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </Container>
  </section>

  <section className="py-5 text-center bg-primary text-white">
    <Container>
      <h3 className="mb-3">Let’s Build Something Great Together</h3>
      <p className="lead mb-4">
        Whether you're looking for a freelance developer, a full-time team member, or a collaborator —
        I'm ready to bring your ideas to life.
      </p>
      <div>
        <Button variant="light" size="lg" className="me-3">View My Projects</Button>
        <Button variant="outline-light" size="lg">Contact Me</Button>
      </div>
    </Container>
  </section>
  </div>
);


// skills page
const SkillsPage = () => (
  <div>
    <section className="py-5 bg-light">
    <Container>
      <h2 className="text-center mb-3">My Skills</h2>
      <p className="lead text-center mx-auto" style={{ maxWidth: '800px' }}>
        I specialize in building full-stack web applications using the <strong>MERN stack</strong> — MongoDB, Express.js, React.js, and Node.js. With a deep understanding of modern web development tools and best practices, I create fast, scalable, and user-centric solutions.
      </p>
    </Container>
  </section>

  <section className="py-5">
    <Container>
      <h3 className="text-center mb-4">Core Technical Skills</h3>
      <Row className="g-4 text-center">
        {[
          'HTML5',
          'CSS3',
          'JavaScript (ES6+)',
          'React.js',
          'Node.js',
          'Express.js',
          'MongoDB',
          'RESTful APIs',
          'Mongoose',
        ].map((skill, index) => (
          <Col key={index} md={4} sm={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title>{skill}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>

  <section className="py-5">
    <Container>
      <h3 className="text-center mb-4">Skill Categories</h3>
      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Frontend Development</Card.Title>
              <Card.Text>
                HTML5, CSS3, JavaScript (ES6+), React.js, Bootstrap, Responsive Design, DOM Manipulation
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Backend Development</Card.Title>
              <Card.Text>
                Node.js, Express.js, REST APIs, Authentication, Authorization, Middleware
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Database & Data</Card.Title>
              <Card.Text>
                MongoDB, Mongoose, MongoDB Compass, JSON, CRUD Operations, Aggregation
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Dev Tools & Deployment</Card.Title>
              <Card.Text>
                Git & GitHub, VS Code, Postman, Netlify, Vercel, Chrome DevTools, NPM, Heroku
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>

  <section className="py-5 bg-light">
    <Container>
      <h3 className="text-center mb-4">Proficiency Levels</h3>
      <Row className="justify-content-center">
        <Col md={8}>
          {[
            { skill: 'React.js', level: 90 },
            { skill: 'Node.js', level: 85 },
            { skill: 'MongoDB', level: 80 },
            { skill: 'Express.js', level: 80 },
            { skill: 'JavaScript (ES6+)', level: 90 },
            { skill: 'Git & GitHub', level: 75 },
          ].map(({ skill, level }, i) => (
            <div key={i} className="mb-4">
              <strong>{skill}</strong>
              <ProgressBar now={level} label={`${level}%`} className="mt-1" />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  </section>


  <section className="py-5">
    <Container>
      <h3 className="text-center mb-4">How I Apply These Skills</h3>
      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Frontend Projects</Card.Title>
              <Card.Text>
                I use <strong>React.js</strong> to build fast, interactive user interfaces. From form validation to dynamic routing and state management, I’ve used React on all my major projects — including personal dashboards, calculators, and landing pages.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Backend APIs</Card.Title>
              <Card.Text>
                I’ve built RESTful APIs using <strong>Node.js</strong> and <strong>Express</strong>, handling user authentication, routing, and CRUD operations. These APIs power the backend of my blog app, portfolio projects, and data-driven tools.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Database Integration</Card.Title>
              <Card.Text>
                I use <strong>MongoDB</strong> and <strong>Mongoose</strong> to design schemas, manage data relationships, and handle queries. I've built scalable data models for user profiles, blog posts, and calculator history logs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Tools & Workflows</Card.Title>
              <Card.Text>
                I manage my codebase using <strong>Git & GitHub</strong>, debug with <strong>Chrome DevTools</strong>, test APIs with <strong>Postman</strong>, and deploy projects via <strong>Netlify</strong> or <strong>Vercel</strong>.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>

  <section className="py-5 bg-primary text-white text-center">
    <Container>
      <h3 className="mb-3">Ready to See These Skills in Action?</h3>
      <p className="lead mb-4">
        Check out some of the real-world projects I’ve built using the MERN stack — or let’s connect and create something together!
      </p>
      <div>
        <Button variant="light" size="lg" className="me-3">View Projects</Button>
        <Button variant="outline-light" size="lg">Contact Me</Button>
      </div>
    </Container>
  </section>
  </div>
);


//cvpage 

  const MyPage = () => (
   <div> 
    <section className="py-5">
      <Container>
        <h2>My CV</h2>
        <p>You can download my latest CV <a href={cv} target='_blank'>here</a>.</p>
      </Container>
    </section>

   <section className="py-5 bg-light text-center">
    <Container>
      <h2 className="mb-3">My Curriculum Vitae</h2>
      <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
        Here's a detailed look at my professional background, experience, education, and technical expertise. I’m always looking for opportunities to grow and collaborate with forward-thinking teams.
      </p>
    </Container>
  </section>

   <section className="py-5">
    <Container>
      <h3 className="text-center mb-4">Professional Summary</h3>
      <p className="mx-auto text-center" style={{ maxWidth: '800px' }}>
        I’m a dedicated Full Stack Web Developer with a strong command of the MERN stack. I specialize in building scalable, user-friendly web applications and have experience working on projects from concept to deployment. I value clean code, responsive design, and delivering real business value through technology.
      </p>
    </Container>
  </section>

   

    <section className="py-5">
    <Container>
      <h3 className="text-center mb-4">Education</h3>
      <Row className="justify-content-center">
        <Col md={10}>
            <div className="mb-4">
              <h5 className="mb-1">B.E.</h5>
              <p className="mb-1"><strong>Jammu University</strong> — Jammu, India</p>
              <p className="text-muted">Graduated: 2023</p>
              <p>
                Relevant Coursework: Web Development, Data Structures, Algorithms, Software Engineering
              </p>
            </div>
        </Col>
      </Row>
    </Container>
  </section>

    <section className="py-5 bg-light">
    <Container>
      <h3 className="text-center mb-4">Certifications & Courses</h3>
      <Row className="justify-content-center">
        <Col md={10}>
          <ul>
            <li><strong>Full Stack Web Development</strong> — GIIT, Jammu, 2025</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </section>

    <section className="py-5">
    <Container>
      <h3 className="text-center mb-4">Technical Skills Summary</h3>
      <Row>
        <Col md={6}>
          <h5>Frontend</h5>
          <ul>
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>React.js, Bootstrap</li>
            <li>Responsive Design, DOM Manipulation</li>
          </ul>
        </Col>
        <Col md={6}>
          <h5>Backend</h5>
          <ul>
            <li>Node.js, Express.js</li>
            <li>REST APIs, Authentication & Authorization</li>
            <li>Middleware, MVC Architecture</li>
          </ul>
        </Col>
        <Col md={6}>
          <h5>Database</h5>
          <ul>
            <li>MongoDB, Mongoose</li>
            <li>MongoDB Compass, Aggregation</li>
          </ul>
        </Col>
        <Col md={6}>
          <h5>Tools & Ecosystem</h5>
          <ul>
            <li>Git & GitHub, VS Code</li>
            <li>Postman, Chrome DevTools</li>
            <li>Netlify, Vercel, NPM</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </section>

  <section className="py-5 text-center bg-primary text-white">
    <Container>
      <h3 className="mb-3">Let’s Work Together</h3>
      <p className="lead mb-4">
        If my experience and skills align with what you're looking for, I’d love to hear from you.
        You can check out my portfolio or get in touch directly.
      </p>
      <div>
        <a href='https://github.com/sakshamkaloo'><Button variant="light" size="lg" className="me-3">View My Projects</Button></a>
        
        <Button variant="outline-light" size="lg">Contact Me</Button>
      </div>
    </Container>
  </section>
</div>
  );
  
   
  //hire me
     const HireMePage = () => (
    <div>
    <section className="py-5">
      <Container>
        <h2>Hire Me</h2>
        <p>If you’re interested in working with me, contact me at: <strong>I will add my email later, thanks</strong></p>
        <ContactSection />
      </Container>
    </section>
     

     <section className="py-5 bg-light text-center">
    <Container>
      <h2 className="mb-3">Hire Me</h2>
      <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
        Looking for a reliable and skilled full-stack web developer? I’m available for freelance work,
        contract roles, and long-term collaborations. Let’s turn your ideas into modern, scalable web solutions.
      </p>
    </Container>
  </section>

    <section className="py-5">
    <Container>
      <h3 className="text-center mb-4">Why Hire Me?</h3>
      <Row className="justify-content-center">
        <Col md={10}>
          <p>
            With a strong foundation in the <strong>MERN stack</strong> and a passion for clean, user-focused design, I bring both technical expertise and creative thinking to every project. I take pride in writing clean, maintainable code and delivering results that are fast, functional, and mobile-friendly.
          </p>
          <ul>
            <li>Full-stack experience with MongoDB, Express, React, and Node.js</li>
            <li>Committed to responsive, accessible design and best UX practices</li>
            <li>Proficient in modern development tools: Git, Postman, DevTools, etc.</li>
            <li>Communicative, deadline-driven, and client-focused</li>
            <li>Fast learner — I adapt quickly to project needs and new tech</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </section>

    <section className="py-5 bg-light">
    <Container>
      <h3 className="text-center mb-4">What I Offer</h3>
      <Row className="g-4 text-center">
        {[
          {
            title: 'Full-Stack Web Development',
            desc: 'End-to-end web applications using MongoDB, Express, React, and Node.js.',
          },
          {
            title: 'Frontend Development',
            desc: 'Modern, responsive, accessible interfaces built with React.js and Bootstrap.',
          },
          {
            title: 'API Integration',
            desc: 'RESTful API development and integration for seamless client-server communication.',
          },
          {
            title: 'Bug Fixing & Optimization',
            desc: 'Improve performance, fix bugs, and enhance user experience in existing apps.',
          },
          {
            title: 'Deployment & Hosting',
            desc: 'Deploy projects to Netlify, Vercel, or custom VPS environments.',
          },
          {
            title: 'Code Review & Consulting',
            desc: 'Help improve your existing codebase or consult on best practices and architecture.',
          },
        ].map((service, idx) => (
          <Col md={4} key={idx}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>

      <section className="py-5">
    <Container>
      <h3 className="text-center mb-4">How I Work</h3>
      <Row className="justify-content-center">
        <Col md={10}>
          <ul>
            <li>
              <strong>Clear Communication:</strong> I provide regular updates, welcome feedback, and ensure we're always aligned on expectations.
            </li>
            <li>
              <strong>Client-Centric:</strong> I listen first, then build. Every project is designed to meet your specific goals and vision.
            </li>
            <li>
              <strong>Clean Code:</strong> I write readable, well-structured code following modern standards and best practices.
            </li>
            <li>
              <strong>Reliable Delivery:</strong> Timely, organized, and transparent project execution — I respect your time and deadlines.
            </li>
            <li>
              <strong>Continuous Learning:</strong> I stay up-to-date with evolving technologies to provide the most effective solutions.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </section>

      <section className="py-5 bg-primary text-white text-center">
    <Container>
      <h3 className="mb-3">Let’s Build Something Great Together</h3>
      <p className="lead mb-4">
        Whether you have a clear project in mind or just an idea you'd like to explore, I’m here to help.  
        Reach out and let’s turn your vision into reality.
      </p>
      <div>
        <Button variant="light" size="lg" className="me-3">Contact Me</Button>
        <a href='https://github.com/sakshamkaloo'><Button variant="outline-light" size="lg" className="me-3">View My Projects</Button></a>
        
      </div>
    </Container>
  </section>
    </div>
  );

  const renderPage = () => {
    switch (page) {
      case 'home':
        return (
          <>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <TestimonialSection />
            <ContactSection />
          </>
        );
      case 'about':
        return <AboutPage />;
      case 'skills':
        return <SkillsPage />;
      case 'projects':
        return <ProjectsSection />;
      case 'cv':
        return <MyPage />;
      case 'hireme':
        return <HireMePage />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <>
      <NavbarComponent />
      {renderPage()}
      <FooterComponent />
    </>
  );
}

export default App;
