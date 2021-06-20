import { React, useState, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import JobAdvertisementService from "../services/JobAdvertisementService";

export default function JobAdvertisements() {
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAll()
      .then((result) => setAdvertisements(result.data.data));
  }, []);

  return (
    <Container>
      <Row md={1}>
        {advertisements.map((advertisement) => (
          <Col style={{ marginBottom: "1em", textAlign: "left" }}>
            <Card key={advertisement.id}>
              <Card.Body>
                <Card.Title>{advertisement.position.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {advertisement.employer.companyName}
                </Card.Subtitle>
                {advertisement.description.length > 50 ? (
                  <Card.Text>{`${advertisement.description.substring(0,50)}...`}</Card.Text>
                ) : (
                  <Card.Text>{advertisement.description}</Card.Text>
                )}
                <Card.Subtitle className="mb-2 text-muted">
                  {advertisement.city.name}
                </Card.Subtitle>
                <Button
                  as={NavLink}
                  to={`/advertisements/${advertisement.id}`}
                  className="custom-btn"
                  variant="primary"
                >
                  Detaya Git
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    // <Table striped bordered hover >
    //   <thead>
    //     <tr>
    //       <th>Position Name</th>
    //       <th>Company Name</th>
    //       <th>City</th>
    //       <th>Description</th>
    //       <th>Deadline Date</th>
    //       <th></th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {advertisements.map((advertisement) => (
    //       <tr>
    //         <td>{advertisement.position.name}</td>
    //         <td>{advertisement.employer.companyName}</td>
    //         <td>{advertisement.city.name}</td>
    //         <td>{`${advertisement.description.substring(0,10)}...`}</td>
    //         <td>{advertisement.deadlineDate.substring(0,10)}</td>
    //         <td><Button className="custom-btn" as={NavLink} to={`/advertisements/${advertisement.id}`}>Detaya Git</Button></td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </Table>
  );
}
