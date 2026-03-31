"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Activity, Brain, Eye, Ear, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

const services = [
  {
    id: "fisica",
    title: "Reabilitação Física",
    desc: "Suporte de tecnologia assistiva avançada para restaurar a independência funcional e motora.",
    fullDesc: "Nossa equipe de fisioterapeutas utiliza exoesqueletos, realidade virtual e esteiras antigravidade para uma recuperação ortopédica e neurológica de elite. Promovemos a recuperação muscular, ganho de força e resgate da locomoção.",
    icon: Activity,
    color: "bg-apae-blue",
    light: "bg-apae-blue/10",
    textLight: "text-apae-blue",
    hoverBorder: "hover:border-apae-blue"
  },
  {
    id: "intelectual",
    title: "Reabilitação Intelectual",
    desc: "Desenvolvimento cognitivo, inclusão social e adaptação comportamental com acompanhamento focado.",
    fullDesc: "Com metodologias baseadas em ciência ABA, DENVER e integração sensorial, capacitamos pacientes com deficiência intelectual e TEA a atingirem autonomia máxima em ambientes educacionais e sociais.",
    icon: Brain,
    color: "bg-apae-green",
    light: "bg-apae-green/10",
    textLight: "text-apae-green",
    hoverBorder: "hover:border-apae-green"
  },
  {
    id: "visual",
    title: "Reabilitação Visual",
    desc: "Estimulação precoce, orientação e mobilidade com utilização de recursos ópticos.",
    fullDesc: "Prescrição de auxílios ópticos, treinamento de mobilidade com bengalas inteligentes e softwares de leitura de tela avançados. Foco integral na recolocação profissional.",
    icon: Eye,
    color: "bg-apae-yellow",
    light: "bg-apae-yellow/20",
    textLight: "text-apae-yellow",
    hoverBorder: "hover:border-apae-yellow"
  },
  {
    id: "auditiva",
    title: "Reabilitação Auditiva",
    desc: "Diagnóstico preciso, protetização e terapia fonoaudiológica para percepção sonora.",
    fullDesc: "Oferecemos desde o teste do olhinho até o mapeamento e concessão de Aparelhos de Amplificação Sonora Individual (AASI) de última geração via regulação SUS.",
    icon: Ear,
    color: "bg-apae-red",
    light: "bg-apae-red/10",
    textLight: "text-apae-red",
    hoverBorder: "hover:border-apae-red"
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState<(typeof services)[0] | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="modalidades" className="py-24 bg-apae-bg relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Modalidades de Atendimento
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600"
          >
            Nossas linhas de cuidado são estruturadas em 4 principais pilares para garantir reabilitação especializada e promover autonomia total.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={item}
                whileHover={{ y: -8 }}
                onClick={() => setActiveService(service)}
                className={clsx(
                  "cursor-pointer bg-white rounded-2xl p-8 border border-gray-100 shadow-sm transition-all duration-300 relative overflow-hidden group hover:shadow-lg",
                  service.hoverBorder
                )}
              >
                <div className={clsx("absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500", service.color)} />

                <div className={clsx("w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300", service.light, "group-hover:" + service.color)}>
                  <Icon className={clsx("w-7 h-7 transition-colors", service.textLight, "group-hover:text-white")} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="flex items-center text-sm font-medium text-gray-400 group-hover:text-gray-600 transition-colors">
                  Saiba mais <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Headless Modal using Framer Motion */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveService(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-2xl rounded-3xl p-8 md:p-12 relative shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setActiveService(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className={clsx("absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none", activeService.color)} />

              <div className={clsx("w-16 h-16 rounded-2xl flex items-center justify-center mb-8", activeService.light)}>
                <activeService.icon className={clsx("w-8 h-8", activeService.textLight)} />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-2">{activeService.title}</h2>
              <h4 className="text-gray-500 font-medium text-lg mb-6 leading-relaxed">{activeService.desc}</h4>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  {activeService.fullDesc}
                </p>
              </div>

              <button className={clsx("w-full py-4 rounded-xl text-white font-bold transition-transform active:scale-95 shadow-lg", activeService.color)}>
                Agendar Consulta de Triagem
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
