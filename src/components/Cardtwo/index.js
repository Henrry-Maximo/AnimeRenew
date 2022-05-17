import React from "react";
import "./style.css";
import { Card, CardGroup } from "react-bootstrap";

function index() {
  return (
    <CardGroup>
      <Card className="positionCardTwo">
        <Card.Img
          className="sizeImg"
          variant="top"
          src="https://ptanime.com/wp-content/uploads/2017/04/Noragami-manga-chapter-67-destaque.jpg"
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
      <Card className="positionCardTwo">
        <Card.Img
          className="sizeImg"
          variant="top"
          src="https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/12/Berserk-41-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1"
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
      <Card className="positionCardTwo">
        <Card.Img
          className="sizeImg"
          variant="top"
          src="https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2016/03/d3d51f20c86a533e743b9ae02b355167.jpg.jpeg"
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
