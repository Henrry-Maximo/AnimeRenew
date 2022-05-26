import React from "react";
import { Carousel } from "react-bootstrap";
import "./style.css";

function index(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="posi_Coro" src={props.imgOne} alt="First slide" />
        <Carousel.Caption>
          <h3>{props.titleOne}</h3>
          <p>{props.descOne}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="posi_Coro" src={props.imgTwo} alt="Second slide" />

        <Carousel.Caption>
          <h3>{props.titleTwo}</h3>
          <p>{props.descTwo}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="posi_Coro" src={props.imgThree} alt="Third slide" />

        <Carousel.Caption>
          <h3>{props.titleThree}</h3>
          <p>{props.descThree}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default index;
