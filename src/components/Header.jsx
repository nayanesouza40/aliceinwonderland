import React, { useState, useEffect, useCallback, useRef } from 'react';
import chapters_in_wonderland from '../control/chapters_in_wonderland';
import SummarySuspended from './SummarySuspended';

// Assets
import alinhadoDir from '../assets/imgs/esquerda.svg';
import justificado from '../assets/imgs/justificado.svg';
import claro from '../assets/imgs/claro.png';
import noturno from '../assets/imgs/noturno.png';

import menuCoracao from "../assets/imgs/8.svg";
import house from "../assets/imgs/1.svg";
import fecharMenu from "../assets/imgs/fechar-menu.svg";
import botaoRedefinir from "../assets/imgs/redefinir.svg";

const Header = ({ chapterIndex, bookId, title, goToChapter, alwaysVisible = false}) => {
    // --- ESTADOS ---
    // Inicia como false (modo claro) caso não haja nada salvo
    const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
    const [fontSize, setFontSize] = useState(() => parseFloat(localStorage.getItem('font-size-rem')) || 1.1);
    const [isFontSizeBoxVisible, setFontSizeBoxVisible] = useState(false);
    const [selectedAlignment, setSelectedAlignment] = useState(localStorage.getItem('alignment') || 'justificado');
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);
    const [showTitle, setShowTitle] = useState(false);

    const lastScrollTop = useRef(0);
    const lastTap = useRef(0);

    const chapters = bookId === 1 ? chapters_in_wonderland : [];
    const adicionarTitulo = () => chapters[chapterIndex]?.title || title;

    // --- HANDLERS (CONTROLES) ---

    // FUNÇÃO ATUALIZADA: Agora salva o estado no localStorage
    const toggleDarkMode = (e) => {
        e.stopPropagation();
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', newMode); // Salva a escolha (true ou false)
            return newMode;
        });
    };

    const handleSliderChange = (e) => {
        e.stopPropagation();
        const newSize = parseFloat(e.target.value);
        setFontSize(newSize);
        localStorage.setItem('font-size-rem', newSize);
    };

    const resetSettings = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        setFontSize(1.1);
        localStorage.setItem('font-size-rem', 1.1);
        
        setSelectedAlignment('justificado');
        localStorage.setItem('alignment', 'justificado');

        setIsDarkMode(false);
        localStorage.setItem('darkMode', 'false');


    };

    const handleToggleSummary = (e) => {
        if (e) e.stopPropagation();
        setFontSizeBoxVisible(false);
        setIsSummaryOpen(!isSummaryOpen);
    };

    const handleToggleFontSizeMenu = (e) => {
        if (e) e.stopPropagation();
        setIsSummaryOpen(false);
        setFontSizeBoxVisible(!isFontSizeBoxVisible);
    };

    const handleAlignmentClick = (e, align) => {
        e.stopPropagation();
        setSelectedAlignment(align);
        localStorage.setItem('alignment', align);
    };

    // --- LÓGICA DE EXIBIÇÃO (SCROLL E TOQUE) ---

    const handleDoubleTap = useCallback((e) => {
        if (e.target.closest('button') || e.target.closest('input') || e.target.closest('.menu-config')) return;
        
        const now = Date.now();
        if (now - lastTap.current < 300) {
            setIsHeaderVisible(prev => {
                const newState = !prev;
                if (!newState) { 
                    setFontSizeBoxVisible(false); 
                    setIsSummaryOpen(false); 
                }
                return newState;
            });
        }
        lastTap.current = now;
    }, []);

    const handleScroll = useCallback(() => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const isScrollingUp = currentScroll < lastScrollTop.current;
        const scrollDiff = Math.abs(currentScroll - lastScrollTop.current);

        if ((isFontSizeBoxVisible || isSummaryOpen) && scrollDiff > 15) {
            setFontSizeBoxVisible(false);
            setIsSummaryOpen(false);
        }

        if (!isFontSizeBoxVisible && !isSummaryOpen) {
            if (isScrollingUp) {
                setIsHeaderVisible(true);
            } else if (currentScroll > 50) {
                setIsHeaderVisible(false);
            }
        }

        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPct = scrollHeight > 0 ? (currentScroll / scrollHeight) * 100 : 0;
        setShowTitle(scrollPct >= 6);

        lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
    }, [isFontSizeBoxVisible, isSummaryOpen]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        const page = document.querySelector('.page');
        if (page) page.addEventListener('touchstart', handleDoubleTap);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (page) page.removeEventListener('touchstart', handleDoubleTap);
        };
    }, [handleScroll, handleDoubleTap]);

    // --- APLICAÇÃO DOS ESTILOS NO DOM ---

    useEffect(() => {
        const body = document.body;
        body.classList.toggle('dark-mode', isDarkMode);
        
        body.classList.remove('align-left', 'align-justify', 'align-right');
        const alignMap = { 
            justificado: 'align-justify', 
            esquerda: 'align-left', 
            direito: 'align-right' 
        };
        body.classList.add(alignMap[selectedAlignment] || 'align-center');

        const textElements = document.querySelectorAll('.chapter_text');
        const titleElements = document.querySelectorAll('.chapter_title');
        textElements.forEach(el => { 
            el.style.fontSize = `${fontSize}rem`;
            el.style.lineHeight = "1.85"; 
        });
        titleElements.forEach(el => { 
            el.style.fontSize = `${fontSize}rem`;
            el.style.lineHeight = "1.85"; 
        });

    }, [isDarkMode, fontSize, selectedAlignment, chapterIndex]);

    return (
        <div className={`header ${alwaysVisible || isHeaderVisible ? 'visible' : ''} ${alwaysVisible ? 'always-on' : ''}`}>
            <div className="marg">

                <div className="header-buttons-menu">
                    <button onClick={handleToggleSummary}>
                        <img 
                            className='header-icon' 
                            src={house} 
                            alt="Sumário" 
                        />
                    </button>
                    
                </div>

                <p className="header_titulo">{showTitle ? adicionarTitulo() : title}</p>

                <div className="header-buttons-menu no-sea">
                    
                    <button onClick={handleToggleFontSizeMenu}>
                        <img 
                        key={isFontSizeBoxVisible ? 'open' : 'closed'}
                            className='header-icon' 
                            src={isFontSizeBoxVisible ? fecharMenu  : menuCoracao}
                            alt="Configurações" 
                        />
                    </button>
                </div>
            </div>

<div 
    className={`menu-config ${isFontSizeBoxVisible ? 'visible' : ''}`} 
   
    onPointerDown={(e) => e.stopPropagation()}
    onPointerMove={(e) => e.stopPropagation()}
    style={{ touchAction: 'none' }} 
    onClick={(e) => e.stopPropagation()}
>
                <div className="marg-menu">
                    <div className='align-options-buttons'>
                        {['justificado', 'esquerda'].map(align => (
                            <button 
                                key={align} 
                                className={`ajust-option ${selectedAlignment === align ? 'active' : ''}`} 
                                onClick={(e) => handleAlignmentClick(e, align)}
                            >
                                <img src={
                                    align === 'justificado' ? justificado : align === 'direita' ? alinhadoDir : alinhadoDir} alt={align} />
                            </button>
                        ))}
                    </div>

                    <div className="menu-row-controls">

                        <button onClick={toggleDarkMode}>
                            <img 
                                
                                src={isDarkMode ? noturno : claro} 
                                alt="Tema" 
                                />
                        </button>

                        <div className="slider-wrapper">
                            {/* <span><img src={imgTexto} /></span> */}
                            
                            <input 
                                type="range" 
                                min="0.8" 
                                max="3.0" 
                                step="0.1"
                                value={fontSize} 
                                onChange={handleSliderChange}
                                onTouchStart={(e) => e.stopPropagation()}
                            />
                        </div>

                        
                        
                        <button className="reset-settings" onClick={resetSettings}>
                            <img src={botaoRedefinir} />
                        </button>
                    </div>
                </div>
            </div>

            {isSummaryOpen && <div className="overlay" onClick={() => setIsSummaryOpen(false)} />}
            
            <SummarySuspended 
                isOpen={isSummaryOpen} 
                onClose={() => setIsSummaryOpen(false)} 
                goToChapter={goToChapter} 
                chapterIndex={chapterIndex} 
                bookId={bookId} 
            />
        </div>
    );
};

export default Header;