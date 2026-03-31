"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

const journeySteps = [
  {
    iconSrc: "/icons/3d/folder.png",
    title: "1. Cadastro Único",
    desc: "Acolhimento via regulação e registro digital no sistema para garantir rastreabilidade do cidadão.",
    color: "bg-apae-blue",
  },
  {
    iconSrc: "/icons/3d/stethoscope.png",
    title: "2. Triagem Multiprofissional",
    desc: "Avaliação global para identificar as necessidades de saúde e traçar o PTS adequado.",
    color: "bg-apae-yellow",
  },
  {
    iconSrc: "/icons/3d/syringe.png",
    title: "3. Atendimento Especializado",
    desc: "Intervenção terapêutica rigorosa, com recursos tecnológicos visando autonomia.",
    color: "bg-apae-green",
  },
  {
    iconSrc: "/icons/3d/magnifying_glass.png",
    title: "4. Diagnóstico",
    desc: "Avaliação minuciosa para identificação precisa de necessidades clínicas e mapeamento de espectros.",
    color: "bg-orange-500",
  },
  {
    iconSrc: "/icons/3d/shield.png",
    title: "5. Acompanhamento",
    desc: "Monitoramento contínuo, interface familiar e articulação em rede do SUS.",
    color: "bg-apae-wine",
  }
];

export default function Timeline() {
  return (
    <section id="jornada" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">A Jornada do Paciente</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Com foco total na transparência, todo o fluxo do paciente no CER IV é monitorado e otimizado visando acesso ágil.</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Animated SVG Line bridging all points */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] w-[80%] h-1 bg-gray-100 -translate-y-1/2 rounded-full z-0 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-apae-blue via-apae-green to-apae-wine"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
            {journeySteps.map((step, i) => {
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, type: "spring" }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className={clsx("w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-xl transition-transform duration-500 group-hover:scale-110 relative", step.color)}>
                    <Image src={step.iconSrc} width={48} height={48} alt={step.title} className="object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}
