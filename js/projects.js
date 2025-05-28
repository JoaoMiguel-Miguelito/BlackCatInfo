// Funcionalidade dos projetos
document.addEventListener('DOMContentLoaded', function() {
  // Inicializa filtro de projetos
  initProjectFilter();
  
  // Inicializa modais de projetos
  initProjectModals();
});

/**
 * Inicializa funcionalidade de filtro de projetos
 */
function initProjectFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (filterButtons.length === 0 || projectCards.length === 0) return;
  
  // Adiciona evento de clique aos botões de filtro
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove classe ativa de todos os botões
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Adiciona classe ativa ao botão clicado
      button.classList.add('active');
      
      // Obtém o valor do filtro
      const filterValue = button.getAttribute('data-filter');
      
      // Filtra projetos
      projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/**
 * Inicializa funcionalidade do modal de projetos
 */
function initProjectModals() {
  const projectLinks = document.querySelectorAll('.project-link[data-project]');
  const modal = document.getElementById('project-modal');
  
  if (!modal || projectLinks.length === 0) return;
  
  // Fecha modal ao clicar no botão fechar
  const closeButton = modal.querySelector('.modal-close');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      
      // Após a animação terminar, esconde o modal
      setTimeout(() => {
        if (!modal.classList.contains('active')) {
          modal.style.display = 'none';
        }
      }, 300);
    });
  }
  
  // Fecha modal ao clicar fora do conteúdo
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeButton.click();
    }
  });
  
  // Fecha modal com tecla Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeButton.click();
    }
  });
  
  // Abre modal ao clicar em um projeto
  projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = link.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });
}

/**
 * Abre modal de projeto com dados específicos
 */
function openProjectModal(projectId) {
  const modal = document.getElementById('project-modal');
  if (!modal)
    return;
  
  // Obtém dados do projeto baseado no ID
  const projectData = getProjectData(projectId);
  
  // Atualiza conteúdo do modal
  const modalTitle = document.getElementById('modal-title');
  const modalImage = document.getElementById('modal-image');
  const modalDescription = document.getElementById('modal-description');
  
  if (modalTitle && modalImage && modalDescription) {
    modalTitle.textContent = projectData.title;
    modalImage.innerHTML = `<img src="${projectData.image}" alt="${projectData.title}">`;
    modalDescription.innerHTML = projectData.description;
  }
  
  // Mostra modal
  modal.style.display = 'flex';
  setTimeout(() => {
    modal.classList.add('active');
  }, 10);
  document.body.style.overflow = 'hidden';
}

/**
 * Obtém dados do projeto para o modal
 * Em uma aplicação real, isso normalmente buscaria de uma API ou banco de dados
 */
function getProjectData(projectId) {
  // Dados de exemplo dos projetos
  const projects = {
    'project1': {
      title: 'Plataforma E-commerce',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: `
        <h3>Visão Geral do Projeto</h3>
        <p>Uma solução completa de e-commerce projetada para escalabilidade e desempenho. Esta plataforma processa milhares de produtos e transações diariamente com foco na experiência do usuário.</p>
        
        <h3>Principais Recursos</h3>
        <ul>
          <li>Recomendações personalizadas de produtos usando IA</li>
          <li>Gerenciamento de estoque em tempo real</li>
          <li>Gateway de pagamento integrado com múltiplas opções</li>
          <li>Design responsivo para todos os dispositivos</li>
          <li>Capacidades avançadas de busca e filtragem</li>
        </ul>
        
        <h3>Tecnologias Utilizadas</h3>
        <p>React, Node.js, Express, MongoDB, Redis, AWS, API Stripe</p>
        
        <h3>Resultados</h3>
        <p>Aumentou as vendas online do cliente em 150% no primeiro trimestre após o lançamento. Melhorou as métricas de engajamento do usuário e reduziu a taxa de abandono do carrinho em 30%.</p>
      `
    },
    'project2': {
      title: 'Aplicativo Bancário',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: `
        <h3>Visão Geral do Projeto</h3>
        <p>Um aplicativo bancário seguro e amigável para um banco regional, permitindo que os clientes realizem operações bancárias em movimento.</p>
        
        <h3>Principais Recursos</h3>
        <ul>
          <li>Autenticação biométrica segura</li>
          <li>Alertas de transação em tempo real</li>
          <li>Agendamento de pagamentos e transferências</li>
          <li>Ferramentas de rastreamento de despesas e orçamento</li>
          <li>Localizador de agências e caixas eletrônicos</li>
        </ul>
        
        <h3>Tecnologias Utilizadas</h3>
        <p>Flutter, Firebase, Swift, Kotlin, Java, OAuth 2.0, APIs Bancárias</p>
        
        <h3>Resultados</h3>
        <p>Alcançou avaliação 4.7/5 em ambas as lojas de aplicativos. Reduziu as chamadas de atendimento ao cliente em 35% através de recursos intuitivos de autoatendimento.</p>
      `
    },
    'project3': {
      title: 'Dashboard em Nuvem',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: `
        <h3>Visão Geral do Projeto</h3>
        <p>Uma solução abrangente de gerenciamento em nuvem que permite às empresas monitorar e gerenciar seus recursos em nuvem em vários provedores.</p>
        
        <h3>Principais Recursos</h3>
        <ul>
          <li>Monitoramento de recursos e alertas em tempo real</li>
          <li>Recomendações de otimização de custos</li>
          <li>Verificação de conformidade de segurança</li>
          <li>Políticas de escalonamento automatizado</li>
          <li>Compatibilidade multiplataforma</li>
        </ul>
        
        <h3>Tecnologias Utilizadas</h3>
        <p>Vue.js, GraphQL, Node.js, AWS SDK, API Azure, API Google Cloud Platform</p>
        
        <h3>Resultados</h3>
        <p>Ajudou o cliente a reduzir gastos em nuvem em 28% enquanto melhorava a utilização de recursos. Simplificou o gerenciamento de infraestrutura multi-nuvem.</p>
      `
    },
    'project4': {
      title: 'Plataforma de Análise com IA',
      image: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: `
        <h3>Visão Geral do Projeto</h3>
        <p>Uma plataforma de análise preditiva que ajuda empresas a prever tendências, otimizar operações e tomar decisões baseadas em dados.</p>
        
        <h3>Principais Recursos</h3>
        <ul>
          <li>Modelos de machine learning para previsão</li>
          <li>Visualização de dados interativa</li>
          <li>Geração automatizada de relatórios</li>
          <li>Integração de dados de múltiplas fontes</li>
          <li>Dashboards personalizáveis</li>
        </ul>
        
        <h3>Tecnologias Utilizadas</h3>
        <p>Python, TensorFlow, React, D3.js, Flask, PostgreSQL, Docker</p>
        
        <h3>Resultados</h3>
        <p>Permitiu ao cliente prever tendências de mercado com 87% de precisão, resultando em gerenciamento otimizado de estoque e aumento nas vendas.</p>
      `
    },
    'project5': {
      title: 'Sistema de Gestão de Conteúdo',
      image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: `
        <h3>Visão Geral do Projeto</h3>
        <p>Um CMS flexível de nível empresarial construído para lidar com requisitos complexos de conteúdo para uma corporação multinacional.</p>
        
        <h3>Principais Recursos</h3>
        <ul>
          <li>Suporte a múltiplos idiomas</li>
          <li>Processos de fluxo de trabalho e aprovação</li>
          <li>Modelagem avançada de conteúdo</li>
          <li>Versionamento e histórico de conteúdo</li>
          <li>Arquitetura API-first</li>
        </ul>
        
        <h3>Tecnologias Utilizadas</h3>
        <p>Next.js, Strapi, GraphQL, PostgreSQL, Docker, AWS</p>
        
        <h3>Resultados</h3>
        <p>Reduziu o tempo de publicação de conteúdo em 60% enquanto permitia o gerenciamento perfeito de conteúdo em 12 sites regionais diferentes.</p>
      `
    },
    'project6': {
      title: 'App de Fitness',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: `
        <h3>Visão Geral do Projeto</h3>
        <p>Um aplicativo social de fitness que ajuda os usuários a acompanhar treinos, nutrição e se conectar com amigos para motivação e competição amigável.</p>
        
        <h3>Principais Recursos</h3>
        <ul>
          <li>Planos de treino personalizados e acompanhamento</li>
          <li>Registro e análise de nutrição</li>
          <li>Desafios sociais e rankings</li>
          <li>Integração com dispositivos fitness</li>
          <li>Visualização de progresso e definição de metas</li>
        </ul>
        
        <h3>Tecnologias Utilizadas</h3>
        <p>React Native, Node.js, MongoDB, WebSockets, Apple HealthKit, API Google Fit</p>
        
        <h3>Resultados</h3>
        <p>Adquiriu mais de 100.000 usuários nos primeiros seis meses após o lançamento com taxa de retenção de 70%, significativamente acima da média do setor.</p>
      `
    }
  };
  
  // Retorna dados do projeto ou um padrão se não encontrado
  return projects[projectId] || {
    title: 'Detalhes do Projeto',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: '<p>Detalhes do projeto não estão disponíveis.</p>'
  };
}

// Slider de Depoimentos
document.addEventListener('DOMContentLoaded', function() {
  initTestimonialSlider();
});

/**
 * Inicializa slider de depoimentos
 */
function initTestimonialSlider() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  if (!slides.length || !indicators.length || !prevBtn || !nextBtn) return;
  
  let currentSlide = 0;
  let slideInterval;
  
  // Inicia slideshow automático
  startSlideshow();
  
  // Pausa slideshow ao passar o mouse
  const slideshowContainer = document.querySelector('.testimonials-slider');
  if (slideshowContainer) {
    slideshowContainer.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
    
    slideshowContainer.addEventListener('mouseleave', () => {
      startSlideshow();
    });
  }
  
  // Botão slide anterior
  prevBtn.addEventListener('click', () => {
    clearInterval(slideInterval);
    prevSlide();
    startSlideshow();
  });
  
  // Botão próximo slide
  nextBtn.addEventListener('click', () => {
    clearInterval(slideInterval);
    nextSlide();
    startSlideshow();
  });
  
  // Botões indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      clearInterval(slideInterval);
      goToSlide(index);
      startSlideshow();
    });
  });
  
  // Função para iniciar slideshow
  function startSlideshow() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Muda slide a cada 5 segundos
  }
  
  // Vai para slide anterior
  function prevSlide() {
    goToSlide(currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1);
  }
  
  // Vai para próximo slide
  function nextSlide() {
    goToSlide(currentSlide + 1 >= slides.length ? 0 : currentSlide + 1);
  }
  
  // Vai para slide específico
  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
  }
}