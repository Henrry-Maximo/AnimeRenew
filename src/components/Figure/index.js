import React from "react";
import { Figure } from "react-bootstrap";
import "./style.css";

function index(props) {
  return (
    <Figure>
      <h1 style={{ color: "white" }}>Wallpapers Animes</h1>

      <Figure>
        <Figure className="imgPosition">
          <Figure.Image className="sizeImg" src={props.imgOne} />
          <Figure.Caption>{props.titleOne}</Figure.Caption>
        </Figure>
        <Figure className="imgPosition">
          <Figure.Image className="sizeImg" src={props.imgTwo} />
          <Figure.Caption>{props.titleTwo}</Figure.Caption>
        </Figure>
      </Figure>

      <Figure>
        <Figure className="imgPosition">
          <Figure.Image className="sizeImg" src={props.imgThree} />
          <Figure.Caption>{props.titleThree}</Figure.Caption>
        </Figure>
        <Figure className="imgPosition">
          <Figure.Image className="sizeImg" src={props.imgFour} />
          <Figure.Caption>{props.titleFour}</Figure.Caption>
        </Figure>
      </Figure>

      <Figure>
        <Figure className="imgPosition">
          <Figure.Image className="sizeImg" src={props.imgFive} />
          <Figure.Caption>{props.titleFive}</Figure.Caption>
        </Figure>
        <Figure className="imgPosition">
          <Figure.Image className="sizeImg" src={props.imgSix} />
          <Figure.Caption>{props.titleSix}</Figure.Caption>
        </Figure>
      </Figure>

      <Figure>
        <Figure className="imgPosition">
          <Figure.Image className="sizeImg" src={props.imgSeven} />
          <Figure.Caption>{props.titleSeven}</Figure.Caption>
        </Figure>
        <Figure className="imgPosition">
          <Figure.Image className="sizeImg" src={props.imgEight} />
          <Figure.Caption>{props.titleEight}</Figure.Caption>
        </Figure>
      </Figure>

      <Figure>
        <Figure className="imgPosition">
          <Figure.Image className="sizeImg" src={props.imgNine} />
          <Figure.Caption>{props.titleNine}</Figure.Caption>
        </Figure>
        <Figure className="imgPosition">
          <Figure.Image className="sizeImg" src={props.imgTen} />
          <Figure.Caption>{props.titleTen}</Figure.Caption>
        </Figure>
      </Figure>
    </Figure>
  );
}

export default index;
