import React, { useEffect } from 'react';
import book_infos from '../control/meta_tags';
import Navigation from './Navigation';
import Header from '../components/Header';

const Intro = ({onNext, onPrev, goToChapter}) => {

  const chapterTitle = "Introducion";

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
        <p className='chapter_abrt'>Introducion</p>  
        
       
      </div>
      
      <div className="chapter_content">
        <h2 className="chapter_title">Through code:<br/>the fluidity of the digital medium in <em>Alice in Wonderland</em></h2>

<p className="chapter_text">
  This final capstone project, presented to UFRJ, is the result of a deep dive into the potential of the digital book. Although the technical focus lies in the file architecture, the choice of Alice in Wonderland carries a special meaning: like the rabbit hole itself, the digital environment is a portal to a world where the rules of the physical page do not apply and reading possibilities multiply.
</p>

<p className="chapter_text">
  The importance of exploring this format lies in its fluid nature. Unlike print, the digital book is based on the concept of reflowable text, where content dynamically adapts to the device, whether it be a smartphone, tablet, or e-reader. This characteristic redefines the role of the editorial producer, who begins to architect data flows and semantic structures that ensure reading integrity across multiple contexts.
</p>

<p className="chapter_text">
  In developing this application, the goal was to analyze how interoperability and accessibility are enhanced by code. The digital format allows for a layer of user personalization — such as adjusting fonts and spacing — that transforms reading into an individualized experience. The project explores these boundaries, treating the digital file as a living, mutable organism.
</p>

<p className="chapter_text">
  Finally, bringing this version of Alice to life was a journey of affection and learning. The work served as the perfect companion to test the limits of metadata structuring and performance, proving that even within the gears of code, literature maintains its magic. This work is, above all, a tribute to the endurance of stories, which now find new ways to flourish in the infinite digital universe.
</p>

      </div>

      <Navigation 
        onPrev={onPrev} 
        onNext={onNext} />
      <Header title={"Through code"} goToChapter={goToChapter} chapterIndex={3}/>
    </div>
  );
};

export default Intro;