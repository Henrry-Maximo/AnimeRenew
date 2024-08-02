import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./style.css";

function index(props) {
  return (
    <CardGroup className="posi">
      <CardGroup>
        <Card className="posi_Card">
          <Card.Img className="sizeImg" variant="top" src={props.imgOne} />
          <Card.Body>
            <Card.Title>{props.titleOne}</Card.Title>
            <Card.Text>{props.descOne}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 24 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="posi_Card">
          <Card.Img className="sizeImg" variant="top" src={props.imgTwo} />
          <Card.Body>
            <Card.Title>{props.titleTwo}</Card.Title>
            <Card.Text>{props.descTwo}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 53 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="posi_Card">
          <Card.Img className="sizeImg" variant="top" src={props.imgThree} />
          <Card.Body>
            <Card.Title>{props.titleThree}</Card.Title>
            <Card.Text>{props.descThree}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 37 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className="posi_Card">
          <Card.Img className="sizeImg" variant="top" src={props.imgFour} />
          <Card.Body>
            <Card.Title>{props.titleFour}</Card.Title>
            <Card.Text>{props.descFour}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 24 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="posi_Card">
          <Card.Img className="sizeImg" variant="top" src={props.imgFive} />
          <Card.Body>
            <Card.Title>{props.titleFive}</Card.Title>
            <Card.Text>{props.descFive}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 53 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="posi_Card">
          <Card.Img className="sizeImg" variant="top" src={props.imgSix} />
          <Card.Body>
            <Card.Title>{props.titleSix}</Card.Title>
            <Card.Text>{props.descSix}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 37 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </CardGroup>
  );
}

export default index;
