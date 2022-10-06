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
          <p style={{ color: "wheat" }}>{props.descOne}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="posi_Coro" src={props.imgTwo} alt="Second slide" />
        <Carousel.Caption>
          <h3>{props.titleTwo}</h3>
          <p style={{ color: "wheat" }}>{props.descTwo}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="posi_Coro" src={props.imgThree} alt="Third slide" />
        <Carousel.Caption>
          <h3>{props.titleThree}</h3>
          <p style={{ color: "wheat" }}>{props.descThree}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="posi_Coro" src={props.imgFour} alt="Third slide" />
        <Carousel.Caption>
          <h3>{props.titleFour}</h3>
          <p style={{ color: "wheat" }}>{props.descFour}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="posi_Coro" src={props.imgFive} alt="Third slide" />
        <Carousel.Caption>
          <h3>{props.titleFive}</h3>
          <p style={{ color: "wheat" }}>{props.descFive}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="posi_Coro" src={props.imgSix} alt="Third slide" />
        <Carousel.Caption>
          <h3>{props.titleSix}</h3>
          <p style={{ color: "wheat" }}>{props.descSix}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="posi_Coro" src={props.imgSeven} alt="Third slide" />
        <Carousel.Caption>
          <h3>{props.titleSeven}</h3>
          <p style={{ color: "wheat" }}>{props.descSeven}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default index;
