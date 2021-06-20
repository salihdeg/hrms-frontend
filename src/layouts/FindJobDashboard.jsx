import React from "react";
import { Container, Row, Col } from "react-bootstrap/Container";
import JobAdvertisements from "../pages/JobAdvertisements";
export default function FindJobDashboard() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={4}></Col>
          <Col sm={8}>
            <JobAdvertisements />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
