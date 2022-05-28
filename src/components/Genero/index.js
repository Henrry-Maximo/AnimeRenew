import React from "react";
import "./style.css";

function index(props) {
  return (
    <>
      <div className="bottomGenero">
        <h1 className='title'>Gêneros</h1>
        <ul className="list">
          <li>Ação</li>
        </ul>
        <ul className="list">
          <li>Artes Marciais</li>
        </ul>
        <ul className="list">
          <li>Aventura</li>
        </ul>
        <ul className="list">
          <li>Comédia</li>
        </ul>
        <ul className="list">
          <li>Demônios</li>
        </ul>
        <ul className="list">
          <li>Drama</li>
        </ul>
        <ul className="list">
          <li>Ecchi</li>
        </ul>
        <ul className="list">
          <li>Escolar</li>
        </ul>
        <ul className="list">
          <li>Esporte</li>
        </ul>
        <ul className="list">
          <li>Fantasia</li>
        </ul>
        <ul className="list">
          <li>Ficção científica</li>
        </ul>
        <ul className="list">
          <li>Harém</li>
        </ul>
      </div>
    </>
  );
}

export default index;
