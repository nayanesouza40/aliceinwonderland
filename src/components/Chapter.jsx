import React, { useEffect, useCallback, useRef } from 'react';
import DOMPurify from 'dompurify';
import book_infos from '../control/meta_tags';
import chapters_in_wonderland from '../control/chapters_in_wonderland';
import Header from '../components/Header';
import Navigation from './Navigation';
import Footer from './Footer'; 

const Chapter = ({bookId, chapterNumber, onNext, onPrev, goToChapter}) => {

  const capituloError = () => {
    console.log("Capítulo não encontrado.")}

  // Identificar qual conjunto de capítulos usar
  const getChapters = useCallback(() => {
    return bookId === 1 ? chapters_in_wonderland : capituloError();
  }, [bookId]);

  const chapters = getChapters();

  const { title: chapterTitle, chap: chapterRoman, img: image, texts: chapterTexts } = chapters[chapterNumber];

  useEffect(() => {
    const bookTitleT = book_infos.title;
    document.title = `${chapterTitle} of the Alice book`;
    window.scrollTo(0, 0);
    return () => {
      document.title = book_infos.title;
    };
  }, [chapterTitle]);

  const chapterRef = useRef(null);

  useEffect(() => {
    const handleCopy = (e) => {
      const selection = window.getSelection();
      if (!selection.rangeCount) return;

      const selectedText = selection.toString().trim();
      if (selectedText && chapterRef.current.contains(selection.anchorNode)) {
        const additionalText = "\nCARROLL, Lewis. Editora Sem Nome";
        e.clipboardData.setData("text/plain", `"${selectedText}"${additionalText}`);
        e.preventDefault();
      }
    };

    document.addEventListener("copy", handleCopy);
    
    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, []);


  

  return (
    <div className="page chapter_page">
      <Navigation 
        onPrev={onPrev} 
        onNext={onNext}/>
      <Footer />
      <Header goToChapter={goToChapter} chapterIndex={chapterNumber+2} bookId={bookId} title={chapters[0].title}/>
      
      <div>
        <div className="chapter_head">
        <span className="chapter_abrt">Capítulo {chapterNumber}</span>
        
        

      </div>

      

      <div className="chapter_content" ref={chapterRef}>
        <h2 className="chapter_title">{chapterTitle}</h2>
        
        {chapterTexts.map((paragraph, index) => (
          <p
            className={paragraph.className}
            key={index}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(paragraph.text) }}
          ></p>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Chapter;
