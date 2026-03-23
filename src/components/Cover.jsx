import React from 'react';
import book_infos from '../control/meta_tags';
import setaDireita from '../assets/imgs/seta-direita.svg';
import capa from "../assets/imgs/alice3.png";

const Cover = ({ onNext, goToChapter }) => {
  const { 
    title: titulo, 
    publisher: editora, 
    author: autor } = book_infos;

  return (
    <div className="cover">
      <img 
        className="cover-image" 
        src={capa}
        alt={`Capa do livro ${titulo}`} 
        loading="lazy"/>

      <div className="navigation">
        <button onClick={onNext} aria-label="Próxima página">
          <img
            src={setaDireita}
            alt="Próxima página"
            className="nav-icon nav-icon-cover"
            loading="lazy"/>
        </button>
      </div>

    </div>
  );
};

export default Cover;
