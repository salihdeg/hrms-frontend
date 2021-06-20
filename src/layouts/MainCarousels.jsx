import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import "../styles/MainCarousel.css"
import Analysis from "../assets/Analysis.svg"
import Steps from "../assets/Steps.svg"
import FindWorker from "../assets/FindWorker.svg"

export default function MainCarousels() {
  return (
      <Carousel fade>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src={Analysis}
            alt="First slide"
          /> */}
          <Image alt="Analysis Image" style={{width:899, height:570}} src={Analysis} rounded />
          <Carousel.Caption>
            <h3 className="black-text">Cv'lerinizi şirketlere gösterin!</h3>
            <p className="black-text">Sisteme Cv'lerinizi ekleyerek istediğiniz işe kavuşun!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image alt="Steps Image" style={{width:899, height:570}} src={Steps} rounded />

          <Carousel.Caption>
            <h3 className="black-text">Kariyer Basamaklarını Hızlıca Tırmanın!</h3>
            <p className="black-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image alt="FindWorker Image" style={{width:899, height:570}} src={FindWorker} rounded />
          <Carousel.Caption>
            <h3 className="black-text">Şirketinize uygun çalışanı bulun!</h3>
            <p className="black-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}
