import React, { useEffect } from 'react';
import book_infos from '../control/meta_tags';
import Navigation from './Navigation';
import Header from '../components/Header';

const Afterword = ({onPrev, onNext, goToChapter }) => {

  const chapterTitle = "Afterword";
  
  useEffect(() => {
    const bookTitleT = book_infos.title; 
      document.title = `${chapterTitle} of the Alice book`;
    return () => {
      document.title = book_infos.title; 
    };
  }, [chapterTitle]);
  
  return (
    <div className="page chapter_page">
      
      <div className="chapter_head">
        <p className='chapter_abrt'>Afterword</p>
        
    
      </div>
      <div className="chapter_content">
        <h2 className="chapter_title">Between algorithm and affection</h2>

<p className="chapter_text">
  Upon closing this file — if a digital book ever truly closes — there remains a sense that the crossing through these pages was as much an academic challenge as it was a personal reunion. In the introduction, I mentioned that this project was a portal; now, at the end of the journey, I realize that the true "Wonderland" of editorial production is the ability to keep the essence of a story alive while the world around it changes its medium.
</p>

<p className="chapter_text">
  Choosing <em>Alice</em> was, at its core, a way to ensure I had familiar company while braving the complexities of code and the uncertainties of a new format. Every compilation error and every text flow adjustment seemed to echo the riddles of the Cheshire Cat. But, much like Alice, I learned that to navigate the unknown — be it a world of nonsense or a data structure — one needs curiosity and the willingness to see things from a different angle.
</p>

<p className="chapter_text">
  This work at UFRJ closes one cycle but opens another. It proves that the digital book is not the end of the object we love, but its expansion. Technology has given us the tools, but it is our affection for the narrative that prevents it from getting lost among bits and pixels. The reflowable format allowed Carroll's words to mold themselves to your screen, but it was the editorial dedication that ensured the heart of the work remained intact.
</p>

<p className="chapter_text">
  I emerge from this experience with the certainty that producing books, in any medium, is an act of resistance and passion. I hope this reading has been as transformative for you as the process of "coding" this story was for me. After all, as we discovered together, the only way to get anywhere is to keep walking — or, in our case, to keep reading.
</p>
  

      </div>
      <Navigation 
        onPrev={onPrev} 
        onNext={onNext}/>
      <Header title={"Between algorithm and affection"} goToChapter={goToChapter} chapterIndex={16}/>
    </div>
  );
};

export default Afterword;