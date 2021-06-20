import { React, useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
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
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Position Name</th>
          <th>Company Name</th>
          <th>City</th>
          <th>Description</th>
          <th>Deadline Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {advertisements.map((advertisement) => (
          <tr>
            <td>{advertisement.position.name}</td>
            <td>{advertisement.employer.companyName}</td>
            <td>{advertisement.city.name}</td>
            <td>{`${advertisement.description.substring(0,10)}...`}</td>
            <td>{advertisement.deadlineDate.substring(0,10)}</td>
            <td><Button as={NavLink} to={`/advertisements/${advertisement.id}`}>Detaya Git</Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
