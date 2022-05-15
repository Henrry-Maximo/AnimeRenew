import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./style.css";

function index() {
  return (
    <CardGroup>
      <Card className="posi_Card">
        <Card.Img
          className="sizeImg"
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
        <Card.Img
          className="sizeImg"
          variant="top"
          src="https://images.alphacoders.com/294/thumb-1920-294213.jpg"
        />
        <Card.Body>
          <Card.Title>Berserk</Card.Title>
          <Card.Text>
            "Você não consegue ver... Porque as pessoas que carregam a luz,
            estão dentro da escuridão profunda." - Guts (Berserk)
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 53 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="posi_Card">
        <Card.Img
          className="sizeImg"
          variant="top"
          src="https://images7.alphacoders.com/723/thumb-1920-723563.png"
        />
        <Card.Body>
          <Card.Title>Gantz</Card.Title>
          <Card.Text>
            "Há momentos que um homem deve lutar mesmo sabendo que a morte se
            aproxima." - Kurano Kei (Gantz)
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 37 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default index;
