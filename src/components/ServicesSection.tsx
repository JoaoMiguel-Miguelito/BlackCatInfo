import React, { useEffect, useRef } from 'react';
import { Monitor, Cpu, BarChart3 } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const services = [
  {
    icon: <Monitor className="h-10 w-10 text-blue-500" />,
    title: 'Desenvolvimento Web',
    description:
      'Criação de sites modernos, responsivos e otimizados para SEO, com foco em usabilidade e conversão de visitantes em clientes.',
  },
  {
    icon: <Cpu className="h-10 w-10 text-blue-500" />,
    title: 'Montagem e Manutenção',
    description:
      'Serviços especializados de hardware e software para deixar sua máquina rápida, segura e otimizada para suas necessidades específicas.',
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-blue-500" />,
    title: 'Power BI & Excel',
    description:
      'Dashboards e relatórios inteligentes que transformam dados em decisões estratégicas, impulsionando o crescimento do seu negócio.',
  },
];

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  return (
    <section id="servicos" className="bg-slate-800 py-20" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h3 className="section-title mb-4 inline-block">Nossos Serviços</h3>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Oferecemos soluções completas em tecnologia para alavancar seu negócio no mundo digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`card group hover:translate-y-[-5px] ${
                isVisible ? 'fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="bg-slate-700/50 p-4 rounded-full inline-block mb-4 group-hover:bg-blue-500/20 transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h4>
              <p className="text-slate-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;