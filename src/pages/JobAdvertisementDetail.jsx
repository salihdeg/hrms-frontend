import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Col, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import JobAdvertisementService from "../services/JobAdvertisementService";
import { NavLink } from "react-router-dom";

export default function JobAdvertisementDetail() {
  let { id } = useParams();

  const [jobAdvertisement, setJobAdvertisement] = useState({});

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getById(id)
      .then((result) => setJobAdvertisement(result.data.data));
  }, [id]);

  if (jobAdvertisement.id > 0) {
    return (
      <Container style={{ display: "block" }}>
        <Row style={{ textAlign: "center", backgroundColor: "#f4f4f4" }}>
          <Col style={{ float: "left", textAlign: "left" }}>
            <h3>{jobAdvertisement.position.name}</h3>
            <p>
              {jobAdvertisement.employer.companyName} <br />{" "}
              {jobAdvertisement.city.name}
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "2em" }}>
          <Col md={9}>
            <h4 style={{ color: "#ff8928" }}>Genel Nitelikler ve İş Tanımı</h4>
            <p>{jobAdvertisement.description}</p>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>{jobAdvertisement.employer.companyName}</Card.Title>

                <a target="blank" href={`https://${jobAdvertisement.employer.webSite}`}>
                  <Card.Subtitle className="mb-2 text-muted">
                    {jobAdvertisement.employer.webSite}
                  </Card.Subtitle>
                </a>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  className="custom-btn"
                  as={NavLink}
                  to="/employerid/advertisements"
                >
                  Diğer İlanlar
                </Button>
                <Button
                  className="custom-btn"
                  as={NavLink}
                  to="/employer/employerid"
                >
                  Profile Git
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container>
        <div>BOŞ</div>
      </Container>
    );
  }
}
