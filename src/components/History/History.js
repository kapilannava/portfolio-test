import React from 'react';
import './History.css';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';

function History(){
    return(
        <div className="history" id="history">
        <div className="title-history">Experience</div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="tabs" className="flex-column">
        <Nav.Item>
          <Nav.Link className="pane-link" eventKey="first">Technical Marketing Designer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="pane-link" eventKey="second">Jr. Software Developer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="pane-link" eventKey="third">Web Developer</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first" className="history-description">
        <div className="company-title">
        Shop your own Mortgage
        </div>
        <p>
            <li>
                Generate leads through Google Ads and funnel them onto landing pages. 
                </li>

        <li>Optimize loading speeds and capacity</li>
        <li>Troubleshoot and debug issues on website</li>
        <li>Stay current with digital web technologies for continuous improvement and optimization</li>
        <li>Monitor and analyze site performance (e.g. traffic, conversions)</li>
<li>Participated in regularly scheduled stand-ups with team to understand requirements, suggest product improvements, explain code design, provide estimates, describe work 
        progress, and identify risks to timelines.</li>
        </p>
        </Tab.Pane>
        <Tab.Pane eventKey="second" className="history-description">
        <div className="company-title">
        Shop your own Mortgage
        </div><p>
            <li>Design UI/UX, colour scheme, and wireframes using Photoshop XD and Figma.</li>
            <li>Developed custom mobile responsive WordPress website using HTML, CSS, JavaScript and PHP. </li>
            <li>Demonstrate the ability to estimate project effort and meet deadlines</li>
            <li>Completed daily JIRA tickets to update Call to Actions, Landing Pages, Blog Content, and Newsletters. </li>
            <li>Version controlled the website using Git on the development server before deploying to production.</li>
            <li>UX/UI expert for team: helps shape the usability and experience of both external and internal applications</li>
            <li>Collaborates with stakeholders on requirements definition and business analysis</li>
</p>
        </Tab.Pane>
        <Tab.Pane eventKey="third" className="history-description">
        <div className="company-title">
        Freelance
        </div><p>
            <li>Translates visual mock-ups into web experience</li>
            <li>Prioritize tasks in a fast-paced and agile environment with strong attention to detail</li>
            <li>Recommends platforms based on marketing / business goals</li>
            <li>Collaborates with marketing team and art directors and other site stakeholders to implement designs</li>
            <li>Makes SEO recommendations and implements optimization strategies</li>
            <li>Creates and consults on user flows, information architecture, interaction design, layout, and visual presentation</li>
</p>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
        </div>
    )
}

export default History;

