"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t-4 border-apae-blue text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Contact Section / Institutional Info */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-apae-blue flex items-center justify-center font-bold text-xl shadow-lg shadow-apae-blue/20">
                A
              </div>
              <div>
                <h3 className="text-2xl font-bold">CER IV</h3>
                <p className="text-apae-blue font-semibold uppercase tracking-wider text-xs">APAE Colinas</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              O Centro Especializado em Reabilitação IV é referência nacional em cuidado integral, inovação tecnológica e humanização na saúde pública.
            </p>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-apae-yellow">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Av. Principal, 1000 - Centro, Colinas - TO</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-apae-green">
                  <Phone className="w-4 h-4" />
                </div>
                <span>(63) 3452-0000 / Recepção SUS</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-apae-red">
                  <Mail className="w-4 h-4" />
                </div>
                <span>contato@cercolinas.com.br</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-2 h-6 bg-apae-green rounded-full"></div>
              Fale com a Ouvidoria
            </h4>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Nome completo" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-apae-blue transition-colors" />
                <input type="email" placeholder="E-mail" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-apae-blue transition-colors" />
              </div>
              <textarea placeholder="Mensagem / Dúvida" rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-apae-blue transition-colors"></textarea>
              <button type="button" className="w-full bg-apae-blue hover:bg-[#0030cc] text-white font-semibold py-3 rounded-lg transition-colors shadow-lg shadow-apae-blue/20">
                Enviar Requisição
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 CER IV APAE Colinas. Todos os direitos reservados. Design em conformidade com "Viver sem Limites".
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-apae-blue transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-apae-blue transition-all">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
