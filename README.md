# CER IV APAE Colinas - Portal Institucional 🚀

**Plataforma web avançada** focada em acessibilidade, humanização e transparência pública. Desenvolvida sob rigorosas diretrizes de UI/UX inspiradas no programa **"Viver sem Limites"** do Governo Federal/Ministério da Saúde do Brasil.

![Status](https://img.shields.io/badge/Status-Produção_Pronta-success)
![Next.js](https://img.shields.io/badge/Next.js-14.2.0-black?logo=next.js)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-f08a5d?logo=framer)
![Three.js](https://img.shields.io/badge/Three.js-Avançado-black?logo=three.js)

---

## 🌟 Visão Geral

O novo site do **CER IV APAE Colinas** substitui a antiga infraestrutura baseada em HTML estático por uma poderosa **Single Page Application (SPA)** no React.
Ele traz uma experiência digital compatível com as 4 modalidades de deficiência cobertas pelo Centro: *Física*, *Intelectual*, *Visual* e *Auditiva*. 

### ✨ Features de Destaque

*   **Identidade Visual Governante:** Uso primário das cores da APAE (Azul) somadas ao verde, amarelo, e vinho em proporções de acessibilidade AAA.
*   **Hero Section com Canvas 3D:** Fundo "blob" rotativo gerado processualmente com a biblioteca `three` / `@react-three/fiber` em divisão de tela para não obstruir a tipologia heroica.
*   **Modalidades Inteligentes:** Cartões descritivos das especialidades (Física, Intelectual, Auditiva e Visual) que disparam modais de ecrã inteiro (Headless Modals via `AnimatePresence`).
*   **Contadores de Impacto (KPIs):** Numeração de dados de atendimentos e estatísticas carregados organicamente à medida que a tela rola (Scroll Intersect / `requestAnimationFrame`).
*   **Timeline da Jornada:** Acompanhamento didático desde o 'Cadastro Único' à 'Regulação SUS' iluminado via Framer Motion.
*   **Glassmorphism Misto:** Efeitos vítreos (`backdrop-blur`) que entregam aparência limpa frente a paletas pesadas.
*   **Acessibilidade Elevada:** Textos de base reescritos em cores escuras de alto contraste, sem perda de luxo corporativo.

---

## 🛠️ Stack Tecnológica

*   [**Next.js (App Router)**](https://nextjs.org/) - Framework base em TypeScript para estruturar roteamentos, metadados e Layouts sem dor de cabeça.
*   [**Tailwind CSS**](https://tailwindcss.com/) - Engine de estilização *Utility-First*.
*   [**Framer Motion**](https://www.framer.com/motion/) - Biblioteca suprema para transições orquestradas, pop-ups, list-rendings e modais fluidos.
*   [**React Three Fiber**](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) + **Drei** - Para injetar contextos WebGL de renderização 3D de alta performance.
*   [**Lucide React**](https://lucide.dev/) - Biblioteca de ícones vetoriais com a estética arredondada ideal.

---

## 🚀 Como Executar o Projeto Localmente

No seu terminal, clone o repositório e rode os scripts de setup.

```bash
# Instale as dependências (Node.js deve ser versão 18+)
npm install

# Inicie o servidor em modo de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador. Ao salvar qualquer modificação nos arquivos dentro de `src/`, o site refletirá as mudanças instantaneamente.

---

## 📦 Deploy para Produção (HostGator / cPanel)

Este projeto de Next.js foi intencionalmente modificado dentro de `next.config.mjs` para gerar saídas front-end rígidas (`output: 'export'`). 
Sendo assim, o servidor Vercel não é obrigatório, ele pode ser hospedado em CPANELs compartilhados simples, via Hostgator por exemplo.

Para agrupar, otimizar todo o WebPack, fundir o TailwindCSS e produzir os HTMLs estáticos, rode:

```bash
npm run build
```

O Next.js vai fabricar uma pasta mágica chamada `/out`.
Sua única responsabilidade será empacotar (zipar) ou transferir através do Filezilla FTP todos os arquivos de **dentro** da pasta `/out` diretamente para dentro da pasta `/public_html` da sua HostGator. Simples assim.

---
*Projeto arquitetado e finalizado para o Sistema APAE CER IV. Contribuições baseadas no design pattern "Viver Sem Limites".*
