import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Sprout,
  Droplets,
  Cog,
  Globe2,
  TrendingUp,
  Home,
  Clock,
  Recycle,
  Container,
  Split,
  Waves,
  Leaf,
  ArrowRight,
  Check,
  Quote,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal, Counter } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

import heroImg from "@/assets/hero.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ciclo Verde | Hortas Sustentáveis e Irrigação Automatizada" },
      {
        name: "description",
        content:
          "Hortas sustentáveis e sistemas automatizados de irrigação por gotejamento. Economize até 50% de água com tecnologia simples, prática e ecológica.",
      },
      { property: "og:title", content: "Ciclo Verde | Tecnologia e Sustentabilidade" },
      {
        property: "og:description",
        content:
          "Hortas sustentáveis e irrigação por gotejamento automatizada para residências, escolas e empresas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionTitle({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{eyebrow}</span>
      <h2
        className={`mt-4 text-3xl font-semibold sm:text-4xl ${light ? "text-primary-foreground" : "text-primary"}`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-4 text-base leading-relaxed ${light ? "text-primary-foreground/75" : "text-muted-foreground"}`}
        >
          {text}
        </p>
      )}
    </Reveal>
  );
}

/* ---------------------------------- HERO --------------------------------- */
function Hero() {
  const [offset, setOffset] = useState(0);

  // Efeito parallax suave no banner principal
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.35);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="inicio" className="relative isolate flex min-h-screen items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Horta sustentável moderna com sistema de irrigação por gotejamento"
        width={1920}
        height={1200}
        className="absolute inset-0 -z-20 h-[120%] w-full object-cover"
        style={{ transform: `translateY(${offset}px)` }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-36 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground">
            <Leaf className="h-3.5 w-3.5 text-gold" /> Sustentabilidade + Tecnologia
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] text-primary-foreground sm:text-6xl lg:text-7xl">
            CICLO VERDE
          </h1>
          <p className="mt-4 text-xl font-medium text-gold sm:text-2xl">
            Tecnologia e sustentabilidade cultivando um futuro melhor.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80">
            Transformamos o cultivo em uma experiência simples, econômica e inteligente através de
            hortas sustentáveis e sistemas automatizados de irrigação.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#produtos"
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-leaf)] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:scale-105"
            >
              Conheça nossos produtos
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contato"
              className="glass-dark inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-white/15"
            >
              Fale Conosco
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- SOBRE --------------------------------- */
function Sobre() {
  return (
    <section id="sobre" className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Sobre nós
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">Quem Somos</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A Ciclo Verde nasceu da união entre sustentabilidade e inovação. Nosso objetivo é
            facilitar o cultivo de alimentos e plantas através de soluções inteligentes que
            economizam água, reduzem desperdícios e promovem uma vida mais sustentável.
          </p>
          <p className="mt-5 rounded-2xl border-l-2 border-gold bg-sand px-6 py-5 text-base italic leading-relaxed text-foreground/80">
            Levar soluções sustentáveis e inteligentes para residências, escolas, empresas e
            comunidades, incentivando o cultivo de alimentos e plantas de forma prática, econômica e
            ecológica.
          </p>
        </Reveal>

        <Reveal delay={150} className="relative">
          <img
            src={g2}
            alt="Horta urbana sustentável em telhado com irrigação"
            loading="lazy"
            width={1024}
            height={1024}
            className="aspect-4/5 w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
          />
          <div className="glass float-slow absolute -bottom-6 -left-4 rounded-2xl px-6 py-4 shadow-[var(--shadow-soft)] sm:left-8">
            <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-primary">
              <Counter value={50} suffix="%+" />
            </p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Economia de água
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- PRODUTOS -------------------------------- */
const PRODUTOS = [
  {
    icon: Sprout,
    name: "Horta Sustentável",
    desc: "Estrutura pensada para cultivar alimentos frescos em qualquer espaço, com manutenção simples.",
    items: [
      "Produção de alimentos frescos",
      "Sustentabilidade",
      "Aproveitamento de espaços",
      "Fácil manutenção",
      "Qualidade de vida",
    ],
    featured: false,
  },
  {
    icon: Droplets,
    name: "Sistema Automatizado de Irrigação",
    desc: "Sistema inteligente de irrigação por gotejamento que distribui água de forma uniforme para as plantas, reduzindo desperdícios e diminuindo a necessidade de regas manuais.",
    items: [
      "Economia de água",
      "Irrigação uniforme",
      "Menos desperdício",
      "Praticidade",
      "Eficiência",
    ],
    featured: false,
  },
  {
    icon: Recycle,
    name: "Kit Completo Ciclo Verde",
    desc: "Inclui horta sustentável, sistema automatizado de irrigação, gotejadores e estrutura completa.",
    items: [
      "Solução completa",
      "Fácil instalação",
      "Melhor custo-benefício",
      "Sustentabilidade e tecnologia juntas",
    ],
    featured: true,
  },
];

function Produtos() {
  return (
    <section id="produtos" className="bg-sand py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Produtos"
          title="Soluções que cultivam o futuro"
          text="Venda separada ou no kit completo — você escolhe como começar."
        />

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {PRODUTOS.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <article
                className={`lift flex h-full flex-col rounded-[1.75rem] p-8 ${
                  p.featured
                    ? "bg-leaf-deep text-primary-foreground ring-1 ring-gold/40"
                    : "border border-border bg-card"
                }`}
              >
                {p.featured && (
                  <span className="mb-4 w-fit rounded-full bg-gold/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    Mais completo
                  </span>
                )}
                <p.icon
                  className={`h-10 w-10 transition-transform duration-500 group-hover:rotate-6 ${p.featured ? "text-gold" : "text-leaf"}`}
                />
                <h3
                  className={`mt-5 text-xl font-semibold ${p.featured ? "text-primary-foreground" : "text-primary"}`}
                >
                  {p.name}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${p.featured ? "text-primary-foreground/75" : "text-muted-foreground"}`}
                >
                  {p.desc}
                </p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? "text-gold" : "text-leaf"}`}
                      />
                      <span className={p.featured ? "text-primary-foreground/85" : "text-foreground/80"}>
                        {it}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                    p.featured ? "text-gold hover:text-primary-foreground" : "text-primary hover:text-leaf"
                  }`}
                >
                  Solicitar orçamento <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ COMO FUNCIONA ----------------------------- */
const ETAPAS = [
  { icon: Container, title: "Reservatório de água", text: "A água é armazenada no reservatório do sistema." },
  { icon: Split, title: "Distribuição", text: "A tubulação conduz a água até toda a horta." },
  { icon: Droplets, title: "Gotejadores", text: "A água passa pelos gotejadores em fluxo controlado." },
  { icon: Waves, title: "Irrigação uniforme", text: "Cada planta recebe a quantidade certa de água." },
  { icon: Sprout, title: "Economia e crescimento", text: "Menos desperdício e plantas mais saudáveis." },
];

function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-leaf-deep py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Como Funciona"
          title="Do reservatório à raiz, gota a gota"
          light
          text="Um ciclo inteligente que leva água na medida certa para cada planta."
        />

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent lg:block"
            aria-hidden="true"
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {ETAPAS.map((e, i) => (
              <Reveal key={e.title} delay={i * 130}>
                <li className="group relative flex flex-col items-center text-center">
                  <div className="glass-dark flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-gold/20">
                    <e.icon className="h-7 w-7 text-gold transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <span className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                    Etapa {i + 1}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-primary-foreground">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">{e.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- BENEFÍCIOS ------------------------------- */
const BENEFICIOS = [
  { icon: Sprout, title: "Sustentabilidade", text: "Cultivo consciente do início ao fim." },
  { icon: Droplets, title: "Economia de água", text: "Água na medida exata, sem excessos." },
  { icon: Cog, title: "Automação", text: "O sistema rega por você, todos os dias." },
  { icon: Globe2, title: "Menor impacto ambiental", text: "Menos recursos, mais equilíbrio." },
  { icon: TrendingUp, title: "Maior produtividade", text: "Plantas saudáveis e colheitas melhores." },
  { icon: Home, title: "Para todos os espaços", text: "Residências, escolas e empresas." },
  { icon: Clock, title: "Economia de tempo", text: "Sem regas manuais diárias." },
  { icon: Recycle, title: "Redução de desperdícios", text: "Cada gota é aproveitada." },
];

function Beneficios() {
  return (
    <section id="beneficios" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Benefícios"
          title="Por que escolher a Ciclo Verde"
          text="Tecnologia que devolve tempo, água e qualidade de vida."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFICIOS.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className="lift group h-full rounded-2xl border border-border bg-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent transition-colors duration-500 group-hover:bg-leaf">
                  <b.icon className="h-6 w-6 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-primary">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ ESTATÍSTICAS ------------------------------ */
const STATS = [
  { value: 50, suffix: "%+", label: "Economia de água" },
  { value: 100, suffix: "%", label: "Irrigação uniforme" },
  { value: 100, suffix: "%", label: "Sustentável" },
  { value: 24, suffix: "h", label: "Praticidade no cultivo" },
];

function Estatisticas() {
  return (
    <section className="bg-[image:var(--gradient-leaf)] py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 110} className="text-center">
            <p className="font-[family-name:var(--font-display)] text-5xl font-bold text-primary-foreground">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-primary-foreground/80">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- GALERIA -------------------------------- */
const GALERIA = [
  { src: g1, alt: "Gotejador liberando água sobre o solo" },
  { src: g2, alt: "Horta urbana sustentável em telhado" },
  { src: g3, alt: "Kit de horta com reservatório e controlador automatizado" },
  { src: g4, alt: "Folhas verdes saudáveis com gotas de água" },
];

function Galeria() {
  return (
    <section id="galeria" className="bg-sand py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Galeria"
          title="Sustentabilidade em funcionamento"
          text="Hortas, gotejadores e ambientes transformados pela Ciclo Verde."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GALERIA.map((img, i) => (
            <Reveal key={img.alt} delay={i * 100}>
              <figure
                className={`group relative overflow-hidden rounded-[1.5rem] shadow-[var(--shadow-soft)] ${
                  i % 3 === 0 ? "aspect-4/5" : "aspect-square"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-5 text-sm text-white transition-transform duration-500 group-hover:translate-y-0">
                  {img.alt}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- DEPOIMENTOS ------------------------------ */
const DEPOIMENTOS = [
  { text: "Uma solução sustentável e extremamente prática para o dia a dia.", author: "Marina Alves", role: "Cliente residencial" },
  { text: "A economia de água foi impressionante.", author: "Escola Horizonte", role: "Projeto educacional" },
  { text: "O sistema automatizado facilitou totalmente a manutenção da nossa horta.", author: "Rafael Menezes", role: "Restaurante Raiz" },
];

function Depoimentos() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Depoimentos" title="Quem cultiva com a gente" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {DEPOIMENTOS.map((d, i) => (
            <Reveal key={d.author} delay={i * 120}>
              <blockquote className="lift h-full rounded-[1.5rem] border border-border bg-card p-8">
                <Quote className="h-8 w-8 text-gold" />
                <p className="mt-5 text-base leading-relaxed text-foreground/85">“{d.text}”</p>
                <footer className="mt-6">
                  <p className="text-sm font-semibold text-primary">{d.author}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{d.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- CONTATO -------------------------------- */
function Contato() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Mensagem enviada! Entraremos em contato em breve.");
    }, 700);
  };

  const field =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-leaf focus:ring-4 focus:ring-leaf/15";

  return (
    <section id="contato" className="bg-sand py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Contato"
          title="Vamos cultivar juntos"
          text="Conte o seu projeto e receba um orçamento personalizado."
        />

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            className="mt-12 grid gap-5 rounded-[2rem] border border-border bg-card p-8 shadow-[var(--shadow-soft)] sm:grid-cols-2 sm:p-10"
          >
            <div>
              <label htmlFor="nome" className="mb-2 block text-sm font-medium text-foreground">
                Nome
              </label>
              <input id="nome" name="nome" required placeholder="Seu nome" className={field} />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="voce@email.com"
                className={field}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="telefone" className="mb-2 block text-sm font-medium text-foreground">
                Telefone
              </label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                placeholder="(11) 90000-0000"
                className={field}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="mensagem" className="mb-2 block text-sm font-medium text-foreground">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                required
                placeholder="Como podemos ajudar?"
                className={`${field} resize-none`}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-leaf)] px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:scale-105 disabled:opacity-70 sm:col-span-2 sm:justify-self-start"
            >
              {sending ? "Enviando..." : "Enviar Mensagem"}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Produtos />
        <ComoFunciona />
        <Beneficios />
        <Estatisticas />
        <Galeria />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </>
  );
}
