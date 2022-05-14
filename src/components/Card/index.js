import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./style.css";

function index() {
  return (
    <CardGroup>
      <Card className="posi_Card">
        <Card.Img
          variant="top"
          src="https://i2.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/11/noragami-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1"
        />
        <Card.Body>
          <Card.Title>Noragami</Card.Title>
          <Card.Text>
            "Por apenas cinco ienes seu desejo será ouvido em alto e bom som
            para ser resolvido!" - Yatogami (Noragami)
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 24 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="posi_Card">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="posi_Card">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default index;
