import Navigation from './Navigation';
import book_infos from '../control/meta_tags';
import chapters_in_wonderland from '../control/chapters_in_wonderland';
import Header from '../components/Header';
import menuCoracao from "../assets/imgs/8.svg";
import house from "../assets/imgs/1.svg";

const { 
  title: titulo, 
  publisher: editora, 
  author: autor } = book_infos;

const titulo_in_wonderland = chapters_in_wonderland[0].title;

const Infos = ({onNext, onPrev, goToChapter}) => {

return (
  <div className="page chapter_page frontispiece">

    <div>
      <p className="academic_header">
      <img src="" alt="" />
      </p>

      <p className="spacer"></p>

    </div>

    <div>
            <p className="original_author">LEWIS CARROLL</p>

      <p className="info-titulo">Alice's Adventures in Wonderland</p>

      <p className="project_subtitle">
        A Reflowable Edition
      </p>

      <p className="epigraph">
        “Curiouser and curiouser!”
      </p>
    </div>

    <div>
      <p className="front_footer">
      <strong>NAYANE DE SOUZA</strong><br/>
      Produção Editorial<br/>
      Rio de Janeiro, 2026
    </p>
    </div>
    
    <Navigation 
      onNext={onNext} 
      onPrev={onPrev}/>

    <Header goToChapter={goToChapter} chapterIndex={1} alwaysVisible={true}/>

  </div>
); };

export default Infos;