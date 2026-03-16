import React from 'react';

export default function Experiencia() {
  const experiencias = [
    {
      id: 1,
      cargo: "Estagiário de Qualidade",
      empresa: "Instituto Nacional de Telecomunicações (INATEL) - Huawei",
      periodo: "Nov 2023 - Nov 2025",
      descricao: "Atuação direta na garantia da qualidade e validação de infraestruturas de rede e telecomunicações da operadora. Responsável pela identificação e acompanhamento de correções de não-conformidades em equipamentos (Antenas RF, BBUs, etc). Utilização de ferramentas analíticas para otimizar o direcionamento e desempenho dos equipamentos, prestando suporte técnico e assegurando alto rigor de projeto.",
      tags: ["Qualidade", "Infraestrutura", "Telecomunicações", "Análise de Dados"]
    },
    {
      id: 2,
      cargo: "Gestão Logística e Operações",
      empresa: "Comércio Local / Vivência Prática",
      periodo: "Experiência Contínua",
      descricao: "Gerenciamento de estoque, roteirização de entregas e otimização de rotas para garantir eficiência operacional. Essa vivência prática moldou minha capacidade analítica para entender as dores do negócio e traduzi-las em soluções tecnológicas voltadas para a redução de custos e tempo.",
      tags: ["Logística", "Gestão de Estoque", "Visão de Negócios", "Eficiência"]
    }
  ];

  return (
    <section id="experiencia" className="py-24 bg-slate-100 text-slate-800">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Experiência Profissional</h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-4"></div>
        </div>

        <div className="space-y-12">
          {experiencias.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              
              {/* Linha vertical (Desktop) */}
              <div className="hidden md:block absolute left-1/4 w-0.5 h-full bg-blue-200 transform -translate-x-1/2 mt-8"></div>
              
              <div className="md:flex items-center justify-between w-full">
                
                {/* Lado Esquerdo (Período) */}
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="flex items-center md:justify-end md:pr-8">
                    {/* Bolinha da Timeline */}
                    <div className="absolute left-0 md:left-1/4 w-4 h-4 bg-blue-600 rounded-full border-4 border-slate-100 transform -translate-x-1.5 md:-translate-x-2 mt-1.5 md:mt-0 z-10"></div>
                    <span className="text-sm font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">{exp.periodo}</span>
                  </div>
                </div>
                
                {/* Lado Direito (Conteúdo) */}
                <div className="md:w-3/4">
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-slate-900">{exp.cargo}</h3>
                    <h4 className="text-lg font-medium text-slate-500 mb-4">{exp.empresa}</h4>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {exp.descricao}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}