import React, { useEffect } from 'react';
import book_infos from '../control/meta_tags';
import Navigation from './Navigation';
import Header from '../components/Header';

const Credits = ({onNext, onPrev, goToChapter}) => {

  const chapterTitle = "Bit by bit: technical credits";
  useEffect(() => {
    const bookTitleT = book_infos.title; 
      document.title = `${chapterTitle} of the Alice book`;
    return () => {
      document.title = book_infos.title; 
    };
  }, [chapterTitle]);

  return (
    <div className="page chapter_page credits">
     

      <div className='chapter_content'>
        
        <div className="credits-list">

          <p className="chapter_text">
            <strong>Original work</strong><br />
            Alice's Adventures in Wonderland (1865)<br/>
            by Lewis Carroll
          </p>

          <p className="chapter_text">
            <strong>Project direction and<br/>Digital production</strong><br />
            Nayane de Souza
          </p>

          <p className="chapter_text">
            <strong>Institutional affiliation</strong><br />
            Universidade Federal do Rio de Janeiro<br />
            Escola de Comunicação (ECO/UFRJ)
          </p>

          <p className="chapter_text">
            <strong>Academic guidance</strong><br />
            Prof. Paulo César Castro
          </p>

          <p className="chapter_text">
            <strong>Typography</strong><br />
            Bookerly (Amazon) & Google Sans
          </p>

          <p className="chapter_text">
            <strong>Technologies used</strong><br />
            React.js, CSS3 (Flexbox/Reflowable Design)
          </p>

        </div>

        <p className="chapter_text footer-note">
          <strong>About this edition</strong><br />
          This digital edition was developed as a Final Graduation Project (TCC) for the Editorial Production bachelor's degree at UFRJ. The project explores the boundaries of the digital support, focusing on interoperability, semantic structure, and the fluid nature of contemporary reading experiences.<br/>Rio de Janeiro, 2026.
        </p>

      </div>

    <Navigation 
      onPrev={onPrev} 
      onNext={onNext}/>
    <Header title={chapterTitle} goToChapter={goToChapter} chapterIndex={2} alwaysVisible={true}/>
  </div>
  );
};

export default Credits;