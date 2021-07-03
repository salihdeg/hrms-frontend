import React from "react";
import { Accordion, Card, Container } from "react-bootstrap";
import JobAdvertisementAdd from "../pages/JobAdvertisementAdd";

export default function EmployerDashboard() {
  return (
    <div>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            İş İlanı Ekle
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Container>
              <JobAdvertisementAdd />
            </Container>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
