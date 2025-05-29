import React, { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const portfolioItems = [
  {
    title: 'Dashboard de Vendas - Power BI',
    description: 'Dashboard interativo com métricas de vendas por região e produto, incluindo análises de tendências e previsões.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Power BI', 'Análise de Dados', 'Dashboards'],
  },
  {
    title: 'Site de Consultoria Financeira',
    description: 'Desenvolvimento de site institucional responsivo com formulário de contato integrado e SEO otimizado.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Tailwind CSS', 'UX/UI'],
  },
  {
    title: 'Aplicativo de Gestão de Estoque',
    description: 'Sistema web para controle de estoque com alertas de baixo estoque e relatórios automatizados.',
    image: 'https://images.pexels.com/photos/4483608/pexels-photo-4483608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['JavaScript', 'Node.js', 'MongoDB'],
  },
];

const PortfolioSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section id="portfolio" className="bg-slate-900 py-20" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h3 className="section-title mb-4 inline-block">Nosso Portfólio</h3>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos recentes e como temos ajudado empresas a alcançarem seus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl ${
                isVisible ? 'fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden bg-slate-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-90 transition-opacity group-hover:opacity-95">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-300 mb-3 text-sm">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="text-blue-400 hover:text-blue-300 flex items-center text-sm font-medium transition-colors">
                    <span>Ver detalhes</span>
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;