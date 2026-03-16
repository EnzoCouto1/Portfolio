import React from 'react';
import minhaFoto from '../assets/Enzo.jpeg';

export default function Header() {
  return (
    <header 
      className="h-screen w-full relative bg-no-repeat bg-cover **bg-top** bg-slate-900"
      style={{
        backgroundImage: `url(${minhaFoto})`,
      }}
    >
      
      {/* Camada de Gradiente Escuro para dar leitura ao texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent z-10"></div>

      {/* Menu Superior */}
      <nav className="absolute top-0 left-0 w-full p-8 md:p-12 z-20 flex items-center justify-start gap-x-12 text-white font-bold uppercase tracking-widest text-xs">
        <a href="#" className="hover:text-blue-400 transition-colors">Início</a>
        <a href="#sobre" className="hover:text-blue-400 transition-colors">Bio</a>
        <a href="#projetos" className="hover:text-blue-400 transition-colors">Projetos</a>
        <a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a>
      </nav>

      {/* Textos Principais */}
      <div className="absolute inset-y-0 left-0 flex items-center justify-start p-8 md:p-24 z-10 max-w-5xl">
        <div className="text-white mt-20">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tighter leading-none text-white">
            Enzo Augusto <br /> do Couto
          </h1>
          
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl text-gray-200 mt-4">
            Engenheiro da Computação <span className="text-blue-400 font-bold mx-2">|</span> Desenvolvedor Full-Stack 
            <br className="hidden md:block" /> 
            <span className="text-lg text-gray-400 mt-2 block">
              Python • Java • C++ • PHP • FastAPI • React • HTML/CSS • JavaScript • Docker • IoT • CI/CD • PostgreSQL • MongoDB • Machine Learning •
            </span>
          </p>
        </div>
      </div>

      {/* Ícones Laterais (Substitua por ícones reais depois usando react-icons se quiser) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 p-8 md:p-12 z-20 flex flex-col gap-y-8 items-center text-white font-bold text-sm tracking-widest">
        <a href="https://github.com/EnzoCouto1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GH</a>
        <a href="https://www.linkedin.com/in/enzo-couto"  target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">IN</a>
        <a href="mailto:enzoaugustodocouto99@gmail.com" className="hover:text-blue-400 transition-colors">@</a>
      </div>

    </header>
  );
}