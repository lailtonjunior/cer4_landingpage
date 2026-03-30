"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorator */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-apae-bg/50 skew-x-12 translate-x-32 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossa Missão é <span className="text-apae-blue">Transformar Vidas</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8 leading-relaxed">
              O CER IV APAE Colinas é credenciado como Centro Especializado em Reabilitação, focado em promover um cuidado verdadeiramente <span className="font-semibold text-apae-green">integral e humanizado</span>. Inspirado nas premissas do programa "Viver sem Limites", nós garantimos o protagonismo e a autonomia da pessoa com deficiência.
            </motion.p>
            
            <div className="space-y-4">
              {[
                "Integração tecnológica de ponta",
                "Equipe multidisciplinar especializada",
                "Programas de Inclusão e Acessibilidade",
                "Tratamento contínuo nas 4 modalidades estruturais"
              ].map((text, i) => (
                <motion.div variants={itemVariants} key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-apae-green flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-panel p-8 rounded-3xl border border-gray-100/50 shadow-2xl bg-white/80">
              <div className="aspect-square md:aspect-video rounded-2xl bg-gradient-to-tr from-apae-blue/10 to-apae-green/10 flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-10"></div>
                <div className="relative z-20 text-center">
                  <p className="text-xl md:text-3xl font-bold text-gray-800 italic mb-4">"A pessoa com deficiência tem o direito de ser a protagonista de sua própria história."</p>
                  <span className="text-sm uppercase tracking-widest text-apae-wine font-semibold">- Viver Sem Limites</span>
                </div>
              </div>
            </div>
            
            {/* Decoration Orbs */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-apae-yellow/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-apae-red/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
