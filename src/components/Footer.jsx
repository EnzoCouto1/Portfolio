import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-2xl font-bold mb-6">Vamos conversar?</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Estou sempre aberto a novos desafios em desenvolvimento de software, análise de dados e logística. Sinta-se à vontade para entrar em contato!
        </p>

        {/* Links de Contato */}
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="mailto:enzoaugustodocouto99@gmail.com" 
            className="text-gray-300 hover:text-blue-400 transition duration-300 font-medium"
          >
            E-mail
          </a>
          <a 
            href="https://www.linkedin.com/in/enzo-couto"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition duration-300 font-medium"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/EnzoCouto1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition duration-300 font-medium"
          >
            GitHub
          </a>
        </div>

        {/* Copyright e Assinatura */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-sm text-gray-500 flex flex-col items-center">
          <p>&copy; {new Date().getFullYear()} Enzo Augusto do Couto. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com React & Tailwind CSS | Engenharia de Computação - INATEL</p>
        </div>

      </div>
    </footer>
  );
}