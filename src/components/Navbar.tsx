"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          {/* APAE Logo Placeholder */}
          <div className="w-10 h-10 rounded-full bg-apae-blue flex items-center justify-center font-bold text-white shadow-lg shadow-apae-blue/20">
            A
          </div>
          <div>
            <h1 className="font-bold text-xl text-gray-900 leading-none">CER IV</h1>
            <p className="text-xs text-apae-blue font-semibold">APAE Colinas</p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-8">
          {["Sobre o CER", "Modalidades", "Indicadores", "Transparência"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/ /g, "")}`} className="text-sm font-medium text-gray-600 hover:text-apae-blue transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-apae-green transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <button className="bg-apae-wine text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#6e0505] transition-colors shadow-md shadow-apae-wine/20">
            Área do Cidadão
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 flex flex-col px-6 gap-4"
        >
          {["Sobre o CER", "Modalidades", "Indicadores", "Transparência"].map((item) => (
            <a key={item} href="#" className="font-medium text-gray-700">{item}</a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
