import React from "react";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";

function index() {
  return (
    <>
      <Header />
      <Carousel
        imgOne="https://images2.alphacoders.com/153/thumb-1920-153272.jpg"
        titleOne="Death Note terá continuação! - Afirma Autor"
        descOne="Death Note, o anime mais famoso e popular de todos os tempos."
        imgTwo="https://images.alphacoders.com/112/thumb-1920-1127205.png"
        titleTwo="Shigenki no Kyojin promete matar Eren!"
        descTwo="Eren é o protagonista da drama, e agora, terá que enfrentar um
        inimigo superior."
        imgThree="https://images8.alphacoders.com/945/thumb-1920-945424.png"
        titleThree="The Promised Neverland é diferente de qualquer obra já feita!"
        descThree="O anime que irá lhe tirar fôlego."
      />
      <Card
        imgOne="https://i2.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/11/noragami-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1"
        titleOne="Noragami"
        descOne="Por apenas cinco ienes seu desejo será ouvido em alto e bom som para ser resolvido! - Yatogami (Noragami)"
        imgTwo="https://wallpapercave.com/wp/wp2490258.jpg"
        titleTwo="Berserk"
        descTwo="Você não consegue ver... Porque as pessoas que carregam a luz, estão dentro da escuridão profunda. - Guts (Berserk)"
        imgThree="https://images7.alphacoders.com/723/thumb-1920-723563.png"
        titleThree="Gantz"
        descThree="Há momentos que um homem deve lutar mesmo sabendo que a morte se
        aproxima. - Kurano Kei (Gantz)"
      />
    </>
  );
}

export default index;
