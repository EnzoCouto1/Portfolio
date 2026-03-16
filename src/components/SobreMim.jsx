import React from 'react';

export default function SobreMim() {
  return (
    <section id="sobre" className="py-24 bg-white text-slate-800">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Sobre Mim</h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-4"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
          
          <div className="lg:w-3/5 space-y-6 text-lg leading-relaxed text-slate-600">
            <p>
              Sou <span className="font-bold text-slate-900">Engenheiro da Computação pelo INATEL</span> e Desenvolvedor Full-Stack. Minha motivação diária não é apenas escrever linhas de código, mas construir soluções escaláveis que resolvem problemas reais e otimizam operações complexas.
            </p>
            <p>
              Tenho uma base técnica muito robusta que me permite atuar em diferentes camadas de um projeto. Construo APIs eficientes com <span className="font-bold text-slate-900">Python (FastAPI/Django) e Java</span>, modelo bancos de dados relacionais e não-relacionais (PostgreSQL, MongoDB), e garanto a integridade do código através de pipelines CI/CD e testes automatizados (Pytest/JUnit).
            </p>
            <p>
              O meu maior diferencial é a vivência prática corporativa e logística. Atuei na garantia de qualidade de infraestruturas de telecomunicações pela <span className="font-bold text-blue-600">Huawei</span>, o que me ensinou a trabalhar com alto rigor técnico e conformidade de padrões. Aliado a isso, tenho experiência em operações logísticas, o que me dá uma visão de negócios focada em eficiência, métricas e resultados operacionais.
            </p>
            <p>
              Acostumado a atuar sob <span className="font-bold text-slate-900">metodologias ágeis (Scrum/Kanban via Jira)</span>, busco integrar times onde eu possa unir a precisão da engenharia com a agilidade do desenvolvimento web para gerar impacto imediato.
            </p>
          </div>

          <div className="lg:w-2/5 w-full">
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-10 -translate-y-10"></div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6 relative z-10">Resumo Profissional</h3>
              
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">💻</span>
                  <div>
                    <strong className="block text-slate-900">Back-end & Front-end</strong>
                    <span className="text-slate-600 text-sm">Python, FastAPI, Django, Java, C++, React, JS</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">📈</span>
                  <div>
                    <strong className="block text-slate-900">Dados & Machine Learning</strong>
                    <span className="text-slate-600 text-sm">Pandas, Scikit-Learn, Regressão, Random Forest</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">🗄️</span>
                  <div>
                    <strong className="block text-slate-900">Dados & Infraestrutura</strong>
                    <span className="text-slate-600 text-sm">PostgreSQL, MySQL, MongoDB, Neo4j, Docker</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">⚙️</span>
                  <div>
                    <strong className="block text-slate-900">Qualidade & Boas Práticas</strong>
                    <span className="text-slate-600 text-sm">Git, CI/CD (GitHub Actions), Pytest, JUnit, Insomnia</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">🔄</span>
                  <div>
                    <strong className="block text-slate-900">Metodologias & Soft Skills</strong>
                    <span className="text-slate-600 text-sm">Scrum, Kanban, Jira, Gestão Logística, Inglês Intermediário</span>
                  </div>
                </li>
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}