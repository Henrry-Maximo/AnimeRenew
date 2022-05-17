import React from "react";
import { Carousel } from "react-bootstrap";
import "./style.css";

function index() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="positionCaro"
          src="https://www.nerdsite.com.br/wp-content/uploads/2021/12/uzumaki-1_f8bq.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="titleBig">
            Mangá de Junji Ito - Uzamaki - Ganhará uma animação.
          </h3>
          <p className="titleSmall">
            Uzumaki, um conto de horror popular que irá destruir sua cabeça!
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="positionCaro"
          src="https://images4.alphacoders.com/118/thumb-1920-1180525.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="titleBig">
            Komi-san wa, Komyushou desu - Este mangá lhe fará ficar apaixonado
            pela protagonista
          </h3>
          <p className="titleSmall">
            Eren é o protagonista da drama, e agora, terá que enfrentar um
            inimigo superior.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="positionCaro"
          src="https://images3.alphacoders.com/172/thumb-1920-17227.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="titleBig">
            Ichi The Killer é definitivamente uma obra chocante!
          </h3>
          <p className="titleSmall">Um mangá para poucos!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default index;
