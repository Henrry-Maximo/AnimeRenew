import React from "react";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";

function index() {
  return (
    <>
      <Carousel
        imgOne="https://www.nerdsite.com.br/wp-content/uploads/2021/12/uzumaki-1_f8bq.png"
        titleOne="Mangá de Junji Ito - Uzamaki - Ganhará uma animação."
        descOne="Uzumaki, um conto de horror popular que irá destruir sua cabeça!"
        imgTwo="https://images4.alphacoders.com/118/thumb-1920-1180525.jpg"
        titleTwo="Komi-san wa, Komyushou desu - Este mangá lhe fará ficar apaixonado
        pela protagonista."
        descTwo="Um ótimo anime para assistir com a namorada!"
        imgThree="https://images3.alphacoders.com/172/thumb-1920-17227.jpg"
        titleThree="Ichi The Killer é definitivamente uma obra chocante!"
        descThree="Um mangá para poucos!"
      />
      <Card
        imgOne="https://www.cafemaisgeek.com/wp-content/uploads/2020/03/noragami-2.jpg"
        titleOne="Noragamii"
        descOne="Por apenas cinco ienes seu desejo será ouvido em alto e bom som
        para ser resolvido!! - Yatogami (Noragami)"
        imgTwo="https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/12/Berserk-41-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1"
        titleTwo="Berserk"
        descTwo="Você não consegue ver... Porque as pessoas que carregam a luz,
        estão dentro da escuridão profunda. - Guts (Berserk)"
        imgThree="https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2016/03/d3d51f20c86a533e743b9ae02b355167.jpg.jpeg"
        titleThree="Gantz"
        descThree="Há momentos que um homem deve lutar mesmo sabendo que a morte se aproxima. - Kurano Kei (Gantz)"
      />
    </>
  );
}

export default index;
