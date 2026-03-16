import React from 'react';
import Header from './components/Header';
import SobreMim from './components/SobreMim';
import Experiencia from './components/Experiencia';
import Projetos from './components/Projetos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col scroll-smooth">
      <Header />
      
      <main className="flex-grow">
        <SobreMim />
        <Experiencia />
        <Projetos />
      </main>

      <Footer />
    </div>
  );
}

export default App;