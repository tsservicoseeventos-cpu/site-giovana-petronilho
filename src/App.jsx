import { useState } from "react";

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20 11.5A8 8 0 0 1 8.4 18.6L4 20l1.5-4.2A8 8 0 1 1 20 11.5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.2 9.3c.2-.4.5-.4.7-.4h.6c.2 0 .4.1.5.4l.6 1.5c.1.2 0 .5-.1.7l-.5.6c-.1.1-.1.3 0 .5.3.5.8 1 1.3 1.3.2.1.3.1.5 0l.6-.5c.2-.2.5-.2.7-.1l1.5.6c.3.1.4.3.4.5v.6c0 .2 0 .5-.4.7-.5.3-1 .4-1.6.3-1.4-.2-2.8-1.1-4-2.3-1.2-1.2-2.1-2.6-2.3-4-.1-.6 0-1.1.3-1.6Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function GiovanaPetronilhoSite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappLink =
    "https://wa.me/5535997085215?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20um%20ensaio%20fotogr%C3%A1fico.";
  const instagramLink = "https://instagram.com/giovanapetronilhofotografia";

  const galleries = [
    {
      title: "Ensaios Femininos",
      subtitle: "Retratos delicados, elegantes e com direção natural.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Gestante & Maternidade",
      subtitle: "Memórias com sensibilidade, leveza e sofisticação.",
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Família & Conexão",
      subtitle: "Imagens atemporais para histórias que merecem ficar.",
      image:
        "https://images.unsplash.com/photo-1516589091380-5d6019ddf5df?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  const testimonials = [
    {
      name: "Mariana",
      text: "Foi uma experiência leve, acolhedora e muito especial. As fotos ficaram lindas e com a nossa essência.",
    },
    {
      name: "Camila & Família",
      text: "Tudo foi conduzido com muita sensibilidade. O resultado ficou elegante, natural e emocionante.",
    },
    {
      name: "Naiara",
      text: "Desde o atendimento até a entrega final, tudo teve muito cuidado. São fotos que vou guardar para sempre.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Primeiro contato",
      text: "Você me chama no WhatsApp e me conta o que deseja para o seu ensaio.",
    },
    {
      number: "02",
      title: "Planejamento",
      text: "Definimos estilo, proposta, referências, roupas e todos os detalhes da experiência.",
    },
    {
      number: "03",
      title: "Ensaio",
      text: "A sessão é conduzida com leveza, direção natural e atenção a cada detalhe.",
    },
    {
      number: "04",
      title: "Entrega",
      text: "Você recebe imagens refinadas, atemporais e pensadas para permanecerem bonitas com o tempo.",
    },
  ];

  const faqs = [
    {
      question: "Como faço para agendar?",
      answer: "O agendamento é feito diretamente pelo WhatsApp, onde alinhamos disponibilidade, proposta e detalhes do ensaio.",
    },
    {
      question: "Os ensaios podem ser em estúdio ou externo?",
      answer: "Sim. Os ensaios podem ser realizados em estúdio ou em locações externas, conforme o estilo desejado.",
    },
    {
      question: "Você ajuda com direção e poses?",
      answer: "Sim. Toda a condução é feita de forma leve e natural, para que você se sinta confortável durante o ensaio.",
    },
    {
      question: "Como recebo as fotos?",
      answer: "As fotos são entregues em formato digital, com tratamento refinado e apresentação organizada.",
    },
  ];

  const NavLinks = ({ mobile = false }) => (
    <>
      {[
        ["Início", "#inicio"],
        ["Portfólio", "#portfolio"],
        ["Experiência", "#experiencia"],
        ["Sobre", "#sobre"],
        ["Contato", "#contato"],
      ].map(([label, href]) => (
        <a
          key={label}
          href={href}
          onClick={() => setMenuOpen(false)}
          className={`transition hover:opacity-60 ${
            mobile ? "py-2 text-sm uppercase tracking-[0.22em]" : "text-[11px] uppercase tracking-[0.24em]"
          }`}
        >
          {label}
        </a>
      ))}
    </>
  );

  return (
    <div className="min-h-screen bg-[#f6f3ee] text-[#181818] selection:bg-black selection:text-white">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-[60] flex items-center gap-2 rounded-full bg-[#181818] px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-white shadow-2xl transition hover:opacity-90"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#f6f3ee]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <a href="#inicio" className="text-[11px] uppercase tracking-[0.45em] text-[#5f5a55]">
            Giovana Petronilho
          </a>

          <nav className="hidden items-center gap-10 text-[#4b4743] md:flex">
            <NavLinks />
          </nav>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden"
            aria-label="Abrir menu"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-black/5 bg-[#f6f3ee] px-6 py-5 md:hidden">
            <nav className="flex flex-col text-[#4b4743]">
              <NavLinks mobile />
            </nav>
          </div>
        )}
      </header>

      <section
        id="inicio"
        className="mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pt-28 pb-16 lg:grid-cols-[0.82fr_1.18fr] lg:px-12"
      >
        <div className="max-w-xl">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#8c847d]">Fotografia autoral</p>
          <h1 className="mt-6 text-4xl font-light leading-[1.03] md:text-6xl">
            Imagens sensíveis, elegantes e atemporais para histórias reais.
          </h1>
          <p className="mt-8 max-w-md text-sm leading-7 text-[#5d5752] md:text-[15px]">
            Ensaios femininos, maternidade e família com uma abordagem leve, refinada e pensada para valorizar a essência de cada momento.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 border border-[#1c1c1c] px-6 py-3 text-[11px] uppercase tracking-[0.25em] transition hover:bg-[#1c1c1c] hover:text-white"
            >
              Ver portfólio <ArrowIcon />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="px-2 py-3 text-[11px] uppercase tracking-[0.25em] text-[#5d5752] transition hover:opacity-60"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80"
            alt="Ensaio fotográfico sofisticado"
            className="h-[72vh] w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent p-6 text-white">
            <p className="text-[10px] uppercase tracking-[0.32em] opacity-90">Experiência delicada e autoral</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
        <div className="grid gap-8 border-y border-[#ddd6cf] py-14 md:grid-cols-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#8c847d]">Estilo</p>
            <p className="mt-3 text-sm leading-7 text-[#5d5752]">
              Direção leve, estética minimalista e acabamento refinado.
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#8c847d]">Experiência</p>
            <p className="mt-3 text-sm leading-7 text-[#5d5752]">
              Atendimento acolhedor e personalizado do primeiro contato até a entrega final.
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#8c847d]">Proposta</p>
            <p className="mt-3 text-sm leading-7 text-[#5d5752]">
              Fotografias feitas para preservar presença, beleza e memória com autenticidade.
            </p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.45em] text-[#8c847d]">Portfólio</p>
            <h2 className="mt-5 text-3xl font-light md:text-5xl">Seleção de trabalhos</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#625c57]">
            Uma apresentação limpa e sofisticada, onde cada imagem assume o protagonismo.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {galleries.map((item) => (
            <article key={item.title} className="group">
              <div className="overflow-hidden bg-[#ebe5de]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[460px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="pt-5">
                <h3 className="text-xl font-light">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#66605b]">{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experiencia" className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.45em] text-[#8c847d]">Experiência</p>
            <h2 className="mt-5 text-3xl font-light leading-tight md:text-5xl">
              Um processo leve, organizado e pensado em cada detalhe.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step) => (
              <div key={step.number} className="border-t border-[#ddd6cf] pt-5">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8c847d]">{step.number}</p>
                <h3 className="mt-3 text-xl font-light">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5954]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-5xl px-6 py-24 lg:px-12">
        <p className="text-[11px] uppercase tracking-[0.45em] text-[#8c847d]">Sobre</p>
        <h2 className="mt-5 max-w-3xl text-3xl font-light leading-tight md:text-5xl">
          Fotografar é transformar sentimento em memória, com beleza, intenção e delicadeza.
        </h2>
        <p className="mt-8 max-w-2xl text-sm leading-8 text-[#5f5954] md:text-[15px]">
          Meu trabalho é guiado por um olhar sensível e por uma estética atemporal. Cada ensaio é pensado para ser uma experiência leve, confortável e verdadeira, respeitando a essência de quem está diante da câmera.
        </p>
        <p className="mt-6 max-w-2xl text-sm leading-8 text-[#5f5954] md:text-[15px]">
          Mais do que entregar fotos bonitas, a proposta é criar imagens que continuem significativas com o passar do tempo.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="border border-[#ddd6cf] bg-white/40 p-8">
              <p className="text-sm leading-8 text-[#5f5954]">“{item.text}”</p>
              <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-[#8c847d]">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 lg:px-12">
        <div className="border-t border-[#ddd6cf] pt-14">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#8c847d]">Dúvidas frequentes</p>
          <div className="mt-8 divide-y divide-[#ddd6cf]">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="text-lg font-light">{faq.question}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#5f5954]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-5xl px-6 py-24 lg:px-12">
        <div className="border-t border-[#ddd6cf] pt-14">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#8c847d]">Contato</p>
          <div className="mt-6 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-light md:text-5xl">Agende seu ensaio.</h2>
              <p className="mt-6 max-w-md text-sm leading-8 text-[#5f5954] md:text-[15px]">
                Atendimento para ensaios em estúdio e externos, com proposta personalizada e uma experiência pensada em cada detalhe.
              </p>

              <div className="mt-8 flex flex-col gap-4 text-sm text-[#5f5954]">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 transition hover:opacity-60"
                >
                  <WhatsAppIcon /> WhatsApp
                </a>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 transition hover:opacity-60"
                >
                  <InstagramIcon /> Instagram
                </a>
              </div>
            </div>

            <form className="grid gap-5 rounded-none border border-[#ddd6cf] bg-white/40 p-6 md:p-8">
              <input
                className="border-b border-[#cfc7c0] bg-transparent px-0 py-4 text-sm outline-none placeholder:text-[#8b837c]"
                placeholder="Nome"
              />
              <input
                className="border-b border-[#cfc7c0] bg-transparent px-0 py-4 text-sm outline-none placeholder:text-[#8b837c]"
                placeholder="WhatsApp"
              />
              <input
                className="border-b border-[#cfc7c0] bg-transparent px-0 py-4 text-sm outline-none placeholder:text-[#8b837c]"
                placeholder="Tipo de ensaio"
              />
              <textarea
                className="min-h-[120px] border-b border-[#cfc7c0] bg-transparent px-0 py-4 text-sm outline-none placeholder:text-[#8b837c]"
                placeholder="Conte um pouco sobre o ensaio que deseja"
              />
              <div className="pt-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-[#1d1d1d] px-6 py-3 text-[11px] uppercase tracking-[0.25em] transition hover:bg-[#1d1d1d] hover:text-white"
                >
                  Falar no WhatsApp <ArrowIcon />
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5 px-6 py-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-[11px] uppercase tracking-[0.25em] text-[#7d756e] md:flex-row md:items-center md:justify-between">
          <span>© 2026 Giovana Petronilho Fotografia</span>
          <div className="flex gap-6">
            <a href={instagramLink} target="_blank" rel="noreferrer" className="transition hover:opacity-60">
              Instagram
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="transition hover:opacity-60">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
