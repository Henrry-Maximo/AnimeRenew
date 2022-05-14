import React from "react";
import { Carousel } from "react-bootstrap";
import "./style.css";

function index() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="posi_Coro"
          src="https://images2.alphacoders.com/153/thumb-1920-153272.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Death Note terá continuação! - Afirma Autor</h3>
          <p>Death Note, o anime mais famoso e popular de todos os tempos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="posi_Coro"
          src="https://images.alphacoders.com/112/thumb-1920-1127205.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Shigenki no Kyojin promete matar Eren!</h3>
          <p>
            Eren é o protagonista da drama, e agora, terá que enfrentar um
            inimigo superior.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="posi_Coro"
          src="https://images8.alphacoders.com/945/thumb-1920-945424.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>The Promised Neverland é diferente de qualquer obra já feita!</h3>
          <p>O anime que irá lhe tirar fôlego.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default index;
