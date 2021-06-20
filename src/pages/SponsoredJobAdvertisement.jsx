import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import JobAdvertisementService from "../services/JobAdvertisementService";
import Carousel from "react-multi-carousel";

export default function SponsoredJobAdvertisement() {
  const [sponsoredAdvertisements, setSponsoredAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAll()
      .then((result) => setSponsoredAdvertisements(result.data.data));
  }, []);

  return (
    <Carousel
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      arrows
      additionalTransfrom={0}
      itemClass={"react-carousel-item"}
      minimumTouchDrag={80}
      partialVisible
      renderButtonGroupOutside
    >
        {sponsoredAdvertisements.map((advertisement) => (
            <Card>
            <Card.Body>
              <Card.Title>{advertisement.position.name}</Card.Title>
              <Card.Text>{advertisement.description}</Card.Text>
              <Button variant="primary">Detaya Git</Button>
            </Card.Body>
          </Card>
        ))}
    </Carousel>
  );
}
