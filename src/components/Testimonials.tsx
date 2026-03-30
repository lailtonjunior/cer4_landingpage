"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Lúcia Silva",
    role: "Mãe de Paciente",
    text: "O acompanhamento na modalidade Intelectual mudou a vida da nossa família. A estrutura e o acolhimento tecnológico são de primeiro mundo.",
    color: "text-apae-green"
  },
  {
    name: "João Pedro Batista",
    role: "Paciente Reabilitação Física",
    text: "Depois do meu acidente, achei que não ia andar de novo. Com o atendimento humanizado e os equipamentos do CER IV, voltei a ser protagonista da minha vida.",
    color: "text-apae-blue"
  },
  {
    name: "Carlos Eduardo Mendes",
    role: "Professor Rede Inclusiva",
    text: "O trabalho nas modalidades visual e auditiva do CER Colinas tem impacto direto nas nossas escolas. As crianças recebem óculos, aparelhos e dignidade.",
    color: "text-apae-yellow"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vozes da Transformação</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Conheça as histórias reais de quem teve a sua autonomia devolvida graças ao esforço incansável da nossa equipe.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className={`w-12 h-12 mb-6 opacity-20 group-hover:opacity-100 transition-opacity ${test.color}`} />
              <p className="text-gray-700 italic mb-8 leading-relaxed">
                "{test.text}"
              </p>
              <div className="mt-auto">
                <h4 className="font-bold text-gray-900">{test.name}</h4>
                <p className="text-sm text-gray-600">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
