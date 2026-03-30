"use client";

import { Download, FileText, PieChart } from "lucide-react";
import { motion } from "framer-motion";

export default function Transparency() {
  const documents = [
    { title: "Relatório de Gestão 2023", type: "PDF", size: "2.4 MB", date: "Jan 12, 2024" },
    { title: "Indicadores de Produção SUS", type: "XLSX", size: "1.1 MB", date: "Feb 05, 2024" },
    { title: "Plano Plurianual de Metas", type: "PDF", size: "4.8 MB", date: "Mar 20, 2024" },
    { title: "Estatuto Social Atualizado", type: "PDF", size: "1.5 MB", date: "Abr 10, 2024" },
  ];

  return (
    <section id="transparencia" className="py-24 bg-apae-bg">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <PieChart className="text-apae-blue w-8 h-8"/> 
              Portal de Transparência
            </h2>
            <p className="text-gray-600">
              Acesso irrestrito a demonstrativos financeiros e relatórios operacionais. Prestação de contas à sociedade colinense, parceiros e órgãos reguladores.
            </p>
          </div>
          <button className="mt-6 md:mt-0 bg-white border border-gray-200 text-gray-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 transition shadow-sm flex items-center gap-2">
            Acessar Dados Abertos
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  <th className="p-6">Documento Publicado</th>
                  <th className="p-6">Data Ref.</th>
                  <th className="p-6">Formato</th>
                  <th className="p-6 text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {documents.map((doc, i) => (
                  <motion.tr 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="hover:bg-apae-blue/5 transition-colors group"
                  >
                    <td className="p-6 flex items-center gap-3 font-medium text-gray-900">
                      <div className="w-10 h-10 rounded-lg bg-apae-blue/10 flex items-center justify-center text-apae-blue">
                        <FileText className="w-5 h-5"/>
                      </div>
                      {doc.title}
                    </td>
                    <td className="p-6 text-gray-500">{doc.date}</td>
                    <td className="p-6">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-bold tracking-widest uppercase">
                        {doc.type}
                      </span>
                    </td>
                    <td className="p-6 text-right">
                      <button className="text-apae-blue hover:text-apae-wine transition-colors p-2 hover:bg-apae-blue/10 rounded-full inline-flex items-center">
                        <Download className="w-5 h-5" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
