import React, { useState,  useEffect } from 'react';
import { useSwipeable } from 'react-swipeable'; 
import '../styles/ebook.css';


// Componentes de cada parte do livro (capa, sumário, capítulos, etc.)
import Cover from '../components/Cover';
import Infos from '../components/Infos';
import Intro from '../components/Intro';
import Chapter1 from '../chapters/Chapter1';
import Chapter2 from '../chapters/Chapter2';
import Chapter3 from '../chapters/Chapter3';
import Chapter4 from '../chapters/Chapter4';
import Chapter5 from '../chapters/Chapter5';
import Chapter6 from '../chapters/Chapter6';
import Chapter7 from '../chapters/Chapter7';
import Chapter8 from '../chapters/Chapter8';
import Chapter9 from '../chapters/Chapter9';
import Chapter10 from '../chapters/Chapter10';
import Chapter11 from '../chapters/Chapter11';
import Chapter12 from '../chapters/Chapter12';
import Afterword from '../components/Afterword';
import Credits from '../components/Credits';

// Componente principal do livro
const Book = () => {


// Dentro do componente Book em Book.js
const goToChapter = (chapterIndex) => {
  // Se o capítulo 1 está na posição 4 do array pages:
  const targetPage = chapterIndex; 
  setCurrentPageAndSave(targetPage);
};
  
  // Estado que controla a página atual
  const [currentPage, setCurrentPage] = useState(0);

  const isMenuOpen = () => {
    // Verificamos se o elemento do menu existe e está com a classe 'visible'
    const menu = document.querySelector('.menu-config.visible');
    return !!menu; 
  };

  const setCurrentPageAndSave = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      localStorage.setItem('currentPage', page); 
    }
  };

  // Definição de todas as páginas do livro, cada uma representada por um componente
  const pages = [
    <Cover //0
      onNext={() => setCurrentPageAndSave(1)}goToChapter={goToChapter}chapterIndex={currentPage}/>,

    <Infos //1
      onPrev={() => setCurrentPageAndSave(0)} 
      onNext={() => setCurrentPageAndSave(2)} goToChapter={goToChapter}chapterIndex={currentPage}/>,

    <Credits //2 
      onPrev={() => setCurrentPageAndSave(1)}
      onNext={() => setCurrentPageAndSave(3)} goToChapter={goToChapter}chapterIndex={currentPage}/>,

    <Intro //2
      onPrev={() => setCurrentPageAndSave(2)} 
      onNext={() => setCurrentPageAndSave(4)} goToChapter={goToChapter}chapterIndex={currentPage}/>,

    <Chapter1 //4
      onPrev={() => setCurrentPageAndSave(3)} 
      onNext={() => setCurrentPageAndSave(5)}goToChapter={goToChapter}chapterIndex={currentPage}/>,

    <Chapter2 //5
      onPrev={() => setCurrentPageAndSave(4)} 
      onNext={() => setCurrentPageAndSave(6)}goToChapter={goToChapter}chapterIndex={currentPage}/>,

    <Chapter3 //6
      onPrev={() => setCurrentPageAndSave(5)} 
      onNext={() => setCurrentPageAndSave(7)} goToChapter={goToChapter}chapterIndex={currentPage}/>,

    <Chapter4 //7
      onPrev={() => setCurrentPageAndSave(6)} 
      onNext={() => setCurrentPageAndSave(8)}goToChapter={goToChapter}chapterIndex={currentPage}/>,

    <Chapter5 //8
      onPrev={() => setCurrentPageAndSave(7)} 
      onNext={() => setCurrentPageAndSave(9)}goToChapter={goToChapter}chapterIndex={currentPage}/>,

    <Chapter6 //9
      onPrev={() => setCurrentPageAndSave(8)}  
      onNext={() => setCurrentPageAndSave(10)}goToChapter={goToChapter}chapterIndex={currentPage}/>,

    <Chapter7 //10
      onPrev={() => setCurrentPageAndSave(9)} 
      onNext={() => setCurrentPageAndSave(11)}goToChapter={goToChapter}chapterIndex={currentPage}/>, 

    <Chapter8 //11
      onPrev={() => setCurrentPageAndSave(10)}  
      onNext={() => setCurrentPageAndSave(12)}goToChapter={goToChapter}chapterIndex={currentPage}/>,

    <Chapter9 //12
      onPrev={() => setCurrentPageAndSave(11)} 
      onNext={() => setCurrentPageAndSave(13)}goToChapter={goToChapter}chapterIndex={currentPage}/>, 

    <Chapter10 //13
      onPrev={() => setCurrentPageAndSave(12)} 
      onNext={() => setCurrentPageAndSave(14)}goToChapter={goToChapter}chapterIndex={currentPage}/>,

    <Chapter11 //14
      onPrev={() => setCurrentPageAndSave(13)} 
      onNext={() => setCurrentPageAndSave(15)}goToChapter={goToChapter}chapterIndex={currentPage}/>,
    
    <Chapter12 //15
      onPrev={() => setCurrentPageAndSave(14)} 
      onNext={() => setCurrentPageAndSave(16)}goToChapter={goToChapter}chapterIndex={currentPage}/>, 

    <Afterword //16
      onPrev={() => setCurrentPageAndSave(15)} chapterIndex={currentPage}
     goToChapter={goToChapter}/>
    
    
      
  ];

  // Recupera a página salva no localStorage quando o componente é montado
  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setCurrentPage(parseInt(savedPage, 10));
    }
  }, []);

  const handleSwipeLeft = () => {
    // SÓ MUDA DE PÁGINA SE O MENU ESTIVER FECHADO
    if (!isMenuOpen() && currentPage < pages.length - 1) {
      setCurrentPageAndSave(currentPage + 1);
    }
  };

  const handleSwipeRight = () => {
    // SÓ MUDA DE PÁGINA SE O MENU ESTIVER FECHADO
    if (!isMenuOpen() && currentPage > 0) { 
      setCurrentPageAndSave(currentPage - 1); 
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    // Importante: desativamos o preventDefault se o menu estiver aberto 
    // para permitir que o usuário interaja com o menu
    preventDefaultTouchmoveEvent: !isMenuOpen(),
    trackMouse: true,
  });

  // Renderiza a página atual, aplicando os gestos de deslizar
  return (
    <div {...swipeHandlers}>
      {pages[currentPage]}
    </div>
  );
};

export default Book;