import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import JobAdvertisements from "../pages/JobAdvertisements";
import JobAdvertisementsFilter from "./JobAdvertisementsFilter";
export default function FindJobDashboard() {
  return (
    <div>
      <Container>
          <h1>ADVERTISEMENTS</h1>
        <Row style={{marginTop:'2em'}}>
          <Col md={3}>
            <JobAdvertisementsFilter />
          </Col>
          <Col md={9}>
            <JobAdvertisements />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
