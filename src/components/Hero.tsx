import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;

    if (title) title.classList.add('fade-in-up');
    if (subtitle) {
      subtitle.classList.add('fade-in-up');
      subtitle.classList.add('stagger-delay-1');
    }
    if (button) {
      button.classList.add('fade-in-up');
      button.classList.add('stagger-delay-2');
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="section-container text-center z-10">
        <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
          Soluções em <span className="text-blue-500">Tecnologia</span> para o seu Negócio
        </h2>
        <p ref={subtitleRef} className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-slate-300">
          Desenvolvimento de sites, manutenção de computadores, automação com dados e dashboards profissionais customizados para suas necessidades.
        </p>
        <a 
          ref={buttonRef}
          href="#servicos" 
          className="btn-primary text-lg px-8 py-3"
        >
          Conheça Nossos Serviços
        </a>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#servicos" aria-label="Rolar para baixo">
          <ChevronDown className="h-8 w-8 text-blue-500" />
        </a>
      </div>
    </section>
  );
};

export default Hero;