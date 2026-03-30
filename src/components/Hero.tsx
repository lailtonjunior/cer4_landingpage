"use client";

import { motion } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";
import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F7F9FC] via-[#E8F0FF] to-[#DDF0DD]">
      <Hero3D />
      
      <div className="container mx-auto px-6 relative z-10 text-center md:text-left pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-apae-blue/10 text-apae-blue text-sm font-semibold mb-6 tracking-wide uppercase">
              Programa Viver sem Limites
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight"
          >
            Reabilitação de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-apae-blue to-apae-green">
              Referência Nacional
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed"
          >
            Excelência tecnológica e cuidado humano integral nas modalidades Física, Intelectual, Auditiva e Visual. Promovendo saúde, inclusão e cidadania.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#servicos"
              className="flex items-center justify-center gap-2 bg-apae-green text-white px-8 py-4 rounded-xl font-medium shadow-[0_8px_30px_rgb(0,200,0,0.3)] transition-all hover:shadow-[0_8px_30px_rgb(0,200,0,0.5)]"
            >
              Conheça os Serviços
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#transparencia"
              className="flex items-center justify-center gap-2 border-2 border-apae-blue text-apae-blue px-8 py-4 rounded-xl font-medium hover:bg-apae-blue/5 transition-colors"
            >
              Transparência
              <Info className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
