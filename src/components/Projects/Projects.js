import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Recipe from './recipe.png';
import Todo from './todo.png';
import TodayCanada from './tc.png';
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import './Projects.css';

function Projects(){
    return(
        <div className="history" id="history">
        <Container>
            <Row>
            <Col xs={12} md={4}>
            <Card>
            <a href="https://kapilannava.github.io/recipe-api/"> 
  <Card.Img variant="top" src={Recipe} />
  </a>
  <Card.Body>
    <Card.Title> REST API</Card.Title>
    <Card.Text>
    An ingredients list search tool using the Edamam API, React, and CSS modules.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/kapilannava/recipe-api">
    <FaGithub  size='1.75em' style={{marginRight: '80%', color: '#fff'}}/>
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://kapilannava.github.io/recipe-api/">
    <FaExternalLinkAlt  size='1.75em' style={{color: '#fff'}}/>
    </a>
    </Card.Footer>
</Card>
                </Col>

                <Col xs={12} md={4}>
                <Card>
                <a href="https://todaycanada.ca/">  <Card.Img variant="top" src={TodayCanada} />
</a>
  <Card.Body>
    <Card.Title> GatsbyJS Blog </Card.Title>
    <Card.Text>
    An Canadian News blog using GatsbyJS, React, GraphQL, and SASS.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/kapilannava/todaycanada">
    <FaGithub  size='1.75em' style={{marginRight: '80%', color: '#fff'}} />
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://todaycanada.ca/">
    <FaExternalLinkAlt  size='1.75em' style={{color: '#fff'}} />
    </a>
    </Card.Footer>
    </Card>
                </Col>
                <Col xs={12} md={4}>
                <Card>
                <a href="https://limitless-oasis-19234.herokuapp.com/"> 
  <Card.Img variant="top" src={Todo} />
  </a>
  <Card.Body>
    <Card.Title> Python Django App</Card.Title>
    <Card.Text>
    A polling app that dynamically updates poll results using Python and Django.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/kapilannava/python-poll">
    <FaGithub size='1.75em' style={{marginRight: '80%', color: '#fff'}} />
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://limitless-oasis-19234.herokuapp.com/">
    <FaExternalLinkAlt  size='1.75em' style={{color: '#fff'}} />
    </a>
    </Card.Footer>
    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Projects;

