import React, { useState, useRef } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface FormData {
  nome: string;
  email: string;
  mensagem: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    mensagem: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Mensagem é obrigatória';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form data:', formData);
      // Here you would typically send the form data to your server
      
      // Show success message
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          nome: '',
          email: '',
          mensagem: '',
        });
      }, 5000);
    }
  };

  return (
    <section id="contato" className="bg-slate-800 py-20" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h3 className="section-title mb-4 inline-block">Entre em Contato</h3>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Tem alguma dúvida ou precisa de uma consultoria personalizada? Preencha o formulário abaixo e entraremos em contato o mais breve possível.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className={`bg-emerald-900/40 border border-emerald-500 rounded-lg p-6 text-center ${
              isVisible ? 'fade-in-up' : 'opacity-0'
            }`}>
              <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Mensagem Enviada!</h4>
              <p className="text-slate-300">
                Obrigado por entrar em contato, {formData.nome}! Retornaremos em breve.
              </p>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit} 
              className={`space-y-6 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
            >
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-slate-300 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className={`input-field ${errors.nome ? 'border-red-500 focus:ring-red-500' : ''}`}
                />
                {errors.nome && (
                  <p className="mt-1 text-sm text-red-500">{errors.nome}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-slate-300 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  value={formData.mensagem}
                  onChange={handleChange}
                  className={`input-field resize-none ${errors.mensagem ? 'border-red-500 focus:ring-red-500' : ''}`}
                />
                {errors.mensagem && (
                  <p className="mt-1 text-sm text-red-500">{errors.mensagem}</p>
                )}
              </div>
              
              <button 
                type="submit"
                className="btn-primary w-full flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensagem
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;