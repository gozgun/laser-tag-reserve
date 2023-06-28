import {Col, Row, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// This component is the body part of the page, including a description of the business and an image

const AppBody: React.FC = () => {
  return (
    <>
    <Container>
      <Row>
        <Col lg={8} className="px-0">
          <p className="fs-4">
            Our state-of-the-art facility offers thrilling laser tag battles for players of all ages. 
            Step into our futuristic arena and prepare for an adrenaline-pumping adventure like no other.
          </p>
          <div className="cream-background fs-4">
              <ul>
                <li><b>Multi-Level Arena:</b> Ramp, obstacles, hiding spots, team missions, free-for-all battles.</li>
                <li><b>Diverse Game Modes:</b> Team matches, capture-the-flag, solo challenges, all skill levels.</li>
                <li><b>Party Packages:</b> Birthdays, events and customizable party packages.</li>
              </ul>
          </div>
        </Col>
        <Col lg={4} className="px-0">
          <Image src="/laser_tag.jpg" alt="Facility Image" style={{ maxWidth: '80%' }} fluid/>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default AppBody;