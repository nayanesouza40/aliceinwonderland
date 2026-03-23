import React, { useEffect, useState } from "react";
import Book from "./pages/Book";
import MetaTags from "./components/MetaTags";
import './styles/ebook.css';

function App() {
  
  return (
    <div className="ebook">
      <MetaTags />
      <Book />

    </div>
  );
}


export default App;