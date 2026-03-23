import React, { useEffect } from 'react';
import chapters_in_wonderland from '../control/chapters_in_wonderland';

const SummarySuspended = ({ isOpen, onClose, goToChapter, chapterIndex }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  // Pegamos os capítulos e removemos o índice [0] (que costuma ser metadado no seu JSON)
  const chaptersEntries = Object.entries(chapters_in_wonderland).slice(1);

  return (
    <aside className="summary-suspended">
      <div className="summary-content">
        <ul>
          {/* --- PÁGINAS FIXAS INICIAIS --- */}
          <li className={chapterIndex === 0 ? 'active-item' : ''}>
            <button onClick={() => { goToChapter(0); onClose(); }}>Cover</button>
          </li>
          <li className={chapterIndex === 1 ? 'active-item' : ''}>
            <button onClick={() => { goToChapter(1); onClose(); }}>Title Page</button>
          </li>

           <li className={chapterIndex === 2 ? 'active-item' : ''}>
            <button onClick={() => { goToChapter(2); onClose(); }}>Credits</button>
          </li>
         
          <li className={chapterIndex === 3 ? 'active-item' : ''}>
            <button onClick={() => { goToChapter(3); onClose(); }}>Introduction</button>
          </li>
          

          <hr />

          {/* --- CAPÍTULOS DINÂMICOS --- */}
          {chaptersEntries.map(([key, chapterData]) => {
            // Se key é "1", targetPage é 4. Se key é "8", targetPage é 11.
            const targetPage = Number(key) + 3;
            const isActive = Number(chapterIndex) === targetPage;

            return (
              <li key={key} className={`item-menu-titulos ${isActive ? 'active-item' : ''}`}>
                <button
                  onClick={() => {
                    goToChapter(targetPage); 
                    onClose();
                  }}
                >
                  {chapterData.title}
                </button>
              </li>
            );
          })}

          <hr />

          {/* --- PÁGINAS FIXAS FINAIS --- */}
          <li className={chapterIndex === 16 ? 'active-item' : ''}>
            <button onClick={() => { goToChapter(16); onClose(); }}>Afterword</button>
          </li>
         
        </ul>
      </div>
    </aside>
  );
};

export default SummarySuspended;