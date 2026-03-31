"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

const team = [
  { name: "Dra. Renata Alves", role: "Coordenação Geral CER IV" },
  { name: "Dr. Marcos Vinícius", role: "Especialista Reabilitação Física" },
  { name: "Luciana Costa", role: "Fonoaudióloga Chefe" },
  { name: "Julio Santos", role: "Psicólogo e Triagem" },
];

export default function Team() {
  return (
    <section id="equipe" className="py-24 bg-apae-bg relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Corpo Clínico</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Nossos profissionais são o coração da instituição, combinando excelência técnica com o calor do cuidado humanizado.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 shadow-xl border-4 border-white">
                {/* Generic placeholder for avatar using Lucide */}
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 text-gray-400">
                  <User className="w-20 h-20" />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-apae-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-medium p-4 text-center">
                  Ver Perfil
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-apae-blue font-medium mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
