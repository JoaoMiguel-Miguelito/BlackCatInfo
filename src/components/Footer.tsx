import React from 'react';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center mb-4">
              <Code className="h-7 w-7 text-blue-500 mr-2" />
              <h3 className="text-xl font-bold text-white">
                Black<span className="text-blue-500">Cat</span>Info
              </h3>
            </div>
            <p className="text-slate-400 mb-6">
              Soluções em tecnologia para impulsionar seu negócio no mundo digital.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-slate-400 hover:text-blue-500 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-blue-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-blue-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Serviços', 'Portfólio', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <span className="text-slate-400">São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <span className="text-slate-400">(11) 99999-9999</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <span className="text-slate-400">contato@blackcatinfo.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} BlackCatInfo - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;