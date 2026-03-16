import React from 'react';

export default function Projetos() {
  const listaProjetos = [
    {
      id: 1,
      titulo: 'SmartGrow - Cultivo Indoor Inteligente',
      descricao: 'Sistema de cultivo automatizado utilizando IoT. Envolve a integração de hardware, leitura contínua de sensores e processamento de dados para otimização do ambiente.',
      tecnologias: ['Python', 'C++', 'ESP32', 'IoT'],
      linkGithub: 'https://github.com/EnzoCouto1/SmartGrow'
    },
    {
      id: 2,
      titulo: 'CarPricePredict - Machine Learning',
      descricao: 'Modelo preditivo para estimar preços de carros usados. Realizou feature engineering e comparou Regressão Linear Múltipla com Random Forest Regressor, alcançando precisão (R²) de 0.96 no modelo campeão.',
      tecnologias: ['Python', 'Scikit-Learn', 'Pandas', 'Data Science'],
      linkGithub: 'https://github.com/EnzoCouto1/CarPricePredict'
    },
    {
      id: 3,
      titulo: 'EcoWallet - Carteira Virtual',
      descricao: 'Aplicação Full-Stack para gestão de finanças. Backend com FastAPI e PostgreSQL, containerizada com Docker e integração contínua (CI/CD) via GitHub Actions.',
      tecnologias: ['FastAPI', 'PostgreSQL', 'Docker', 'CI/CD'],
      linkGithub: 'https://github.com/EnzoCouto1/EcoWallet'
    }
  ];

  return (
    <section id="projetos" className="py-24 bg-slate-50 text-slate-800">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Meus Projetos</h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {listaProjetos.map((projeto) => (
            <div key={projeto.id} className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:border-blue-100 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                {projeto.titulo}
              </h3>
              
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                {projeto.descricao}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {projeto.tecnologias.map((tech, index) => (
                  <span key={index} className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={projeto.linkGithub} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full block text-center bg-slate-50 text-blue-600 border border-blue-100 py-3 rounded-xl font-semibold group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mt-auto"
              >
                Ver Repositório
              </a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}