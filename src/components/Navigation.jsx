import React, { useState } from "react";
import setaEsquerda from '../assets/imgs/seta-esquerda.svg';
import setaDireita from '../assets/imgs/seta-direita.svg';

const Navigation = ({ onNext, onPrev }) => {
  return (

    <div className="navigation">
      {onPrev && (
        <button onClick={onPrev}>
          <img
            src={setaEsquerda}
            alt="Cover"
            className="nav-icon"
            loading="lazy"
          />
        </button>
      )}

      {onNext && (
        <button onClick={onNext}>
          <img
            src={setaDireita}
            alt="Next"
            className="nav-icon"
            loading="lazy"/>
        </button>
      )}
    </div>
  );
};

export default Navigation;
