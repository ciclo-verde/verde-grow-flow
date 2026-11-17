import { createFileRoute } from "@tanstack/react-router";
import { type FormEvent } from "react";
import {
  Sprout,
  Droplets,
  Cog,
  Globe2,
  Recycle,
  Leaf,
  ArrowRight,
  Check,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { IrrigationDemo } from "@/components/IrrigationDemo";
import { Toaster } from "@/components/ui/sonner";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

import heroImg from "@/assets/hero.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ciclo Verde | Horta Sustentável · Projeto Acadêmico" },
      {
        name: "description",
        content:
          "Conheça o Ciclo Verde, projeto acadêmico da escola República do Panamá com uma horta sustentável e um protótipo de irrigação em desenvolvimento.",
      },
      { property: "og:title", content: "Ciclo Verde | Sustentabilidade em desenvolvimento" },
      {
        property: "og:description",
        content:
          "Uma iniciativa acadêmica dedicada ao cultivo de alimentos, à educação ambiental e ao uso consciente da água.",
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
      <span className={`section-eyebrow ${light ? "!text-primary-foreground/70" : ""}`}>{eyebrow}</span>
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

  return (
    <section id="inicio" className="hero-section relative isolate flex items-center overflow-hidden bg-leaf-deep">
      <img
        src={heroImg}
        alt="Imagem ilustrativa de horta sustentável com cultivo de vegetais"
        width={1920}
        height={1200}
        className="hero-image absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-36 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-primary-foreground/85">
            <Leaf className="h-3.5 w-3.5 text-gold" /> República do Panamá · Projeto acadêmico
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.1] text-primary-foreground sm:text-6xl lg:text-7xl">
            CICLO VERDE
          </h1>
          <p className="mt-5 max-w-lg text-2xl font-medium leading-snug text-gold sm:text-3xl">
            Pequenas sementes. Novas possibilidades.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80">
            Um projeto acadêmico que une cultivo de alimentos, uso consciente da água e uma proposta de irrigação automatizada. Nosso protótipo está em desenvolvimento.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 bg-leaf text-leaf-deep hover:bg-leaf/90"><a href="#sobre">Conhecer o projeto <ArrowRight /></a></Button>
            <Button asChild variant="ghost" size="lg" className="h-12 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href="#como-funciona">Ver demonstração <Droplets /></a></Button>
          </div>
          <p className="mt-12 border-t border-primary-foreground/20 pt-5 text-xs text-primary-foreground/60">Sustentabilidade · Educação ambiental · Tecnologia</p>
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
          <span className="section-eyebrow">
            Sobre o projeto
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">Cultivar também é aprender.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            O Ciclo Verde é uma iniciativa acadêmica da escola República do Panamá. Investigamos como uma horta sustentável pode aproximar o cultivo de alimentos, a tecnologia e a utilização consciente dos recursos naturais.
          </p>
          <p className="mt-5 border-l-2 border-primary bg-sand px-6 py-5 text-base italic leading-relaxed text-foreground/80">
            Nossa proposta é aprender na prática: desenvolver um protótipo, explorar a irrigação por gotejamento e incentivar a educação ambiental. Os benefícios são objetivos a serem avaliados, não resultados já comprovados.
          </p>
        </Reveal>

        <Reveal delay={150} className="relative">
          <img
            src={g2}
            alt="Referência ilustrativa de horta urbana sustentável"
            loading="lazy"
            width={1024}
            height={1024}
            className="aspect-4/3 w-full rounded-lg object-cover shadow-[var(--shadow-lift)]"
          />
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-md bg-background/95 px-5 py-4">
            <Sprout className="h-7 w-7 shrink-0 text-primary" />
            <div><p className="text-sm font-semibold text-primary">Uma ideia em crescimento</p><p className="mt-1 text-xs text-muted-foreground">Imagem de referência · não representa o protótipo real</p></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- PRODUTOS -------------------------------- */
const PRODUTOS = [
  { icon: Sprout, name: "Horta sustentável", desc: "Estrutura de cultivo em desenvolvimento para explorar o plantio de alimentos e o aproveitamento do espaço.", items: ["Espaço de cultivo", "Solo e plantas", "Aprendizado prático"], featured: false },
  { icon: Droplets, name: "Proposta de irrigação", desc: "Planejamento do caminho da água, do reservatório às plantas, com distribuição por gotejamento.", items: ["Reservatório de água", "Tubulação e gotejadores", "Automação a ser desenvolvida"], featured: false },
  { icon: Recycle, name: "Protótipo integrado", desc: "A proposta reúne cultivo e irrigação para uma futura demonstração acadêmica. A montagem e a avaliação ainda fazem parte do desenvolvimento.", items: ["Integração dos componentes", "Demonstração da proposta", "Testes e avaliação previstos"], featured: true },
];

function Produtos() {
  return (
    <section id="produtos" className="bg-sand py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Nosso protótipo"
          title="Da ideia à experiência prática."
          text="Conheça os elementos previstos para o protótipo. O projeto está em desenvolvimento, ainda sem resultados validados."
        />

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {PRODUTOS.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <article
                className={`lift flex h-full flex-col rounded-lg p-8 ${
                  p.featured
                    ? "bg-leaf-deep text-primary-foreground ring-1 ring-gold/40"
                    : "border border-border bg-card"
                }`}
              >
                {p.featured && (
                  <span className="mb-4 w-fit rounded-full bg-gold/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    Em desenvolvimento
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
                <Button asChild variant="link" className={`mt-auto justify-start px-0 pt-8 ${p.featured ? "text-gold" : "text-primary"}`}><a href="#como-funciona">Explorar a proposta <ArrowRight /></a></Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ COMO FUNCIONA ----------------------------- */
function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-leaf-deep py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Sistema de irrigação" title="O caminho de cada gota." light text="Uma representação da proposta de irrigação por gotejamento. O sistema físico ainda não está implementado e funcional." />
        <IrrigationDemo />
      </div>
    </section>
  );
}

/* ------------------------------- BENEFÍCIOS ------------------------------- */
const BENEFICIOS = [
  { icon: Droplets, title: "Uso consciente da água", text: "Explorar a distribuição junto às raízes e avaliar formas de evitar desperdícios." },
  { icon: Sprout, title: "Cultivo de alimentos", text: "Incentivar o contato com o plantio e a compreensão dos cuidados com uma horta." },
  { icon: Globe2, title: "Educação ambiental", text: "Relacionar escolhas do dia a dia à preservação dos recursos naturais." },
  { icon: Cog, title: "Aprendizado tecnológico", text: "Investigar como a automação pode contribuir para o cuidado com as plantas." },
];

function Beneficios() {
  return (
    <section id="beneficios" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Sustentabilidade"
          title="O que queremos cultivar."
          text="Benefícios esperados que orientam o desenvolvimento. Sua avaliação dependerá de testes futuros do protótipo."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFICIOS.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className="lift group h-full rounded-lg border border-border bg-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent transition-colors duration-500 group-hover:bg-accent">
                  <b.icon className="h-6 w-6 text-primary transition-colors duration-500 group-hover:text-primary" />
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
/* --------------------------------- GALERIA -------------------------------- */
const GALERIA = [
  { src: g1, alt: "Referência de gotejamento junto ao solo" },
  { src: g2, alt: "Referência de horta urbana sustentável" },
  { src: g3, alt: "Referência ilustrativa de cultivo com reservatório" },
  { src: g4, alt: "Referência de folhas com gotas de água" },
];

function Galeria() {
  return (
    <section id="galeria" className="bg-sand py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Galeria"
          title="Referências que inspiram o projeto."
          text="Imagens ilustrativas de cultivo e irrigação. Não são registros do nosso protótipo nem de resultados alcançados."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GALERIA.map((img, i) => (
            <Reveal key={img.alt} delay={i * 100}>
              <figure
                className={`group relative overflow-hidden rounded-lg shadow-[var(--shadow-soft)] ${
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
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-leaf-deep/90 p-5 text-sm text-primary-foreground transition-transform duration-500 group-hover:translate-y-0">
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
const EQUIPE = ["Miguel Roberto", "José", "Kauã Porfírio", "Daniel Costa"];

function Equipe() {
  return (
    <section id="equipe" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Nossa equipe" title="Quem faz a ideia crescer." text="Integrantes do projeto Ciclo Verde · República do Panamá" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EQUIPE.map((nome, index) => <Reveal key={nome} delay={index * 80}><article className="border-t border-border py-7"><div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent font-semibold text-primary">{nome.split(" ").map((part) => part[0]).slice(0, 2).join("")}</div><h3 className="mt-5 text-lg font-semibold text-primary">{nome}</h3><p className="mt-2 text-sm text-muted-foreground">Integrante do projeto</p></article></Reveal>)}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- CONTATO -------------------------------- */
function Contato() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = `Olá, equipe Ciclo Verde!\nNome: ${data.get("nome")}\nE-mail: ${data.get("email")}\nTelefone: ${data.get("telefone") || "Não informado"}\n\n${data.get("mensagem")}`;
    window.open(`https://wa.me/5511945197240?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    toast.info("Mensagem preparada. Conclua o envio no WhatsApp.");
  };

  const field =
    "w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-leaf focus:ring-4 focus:ring-leaf/15";

  return (
    <section id="contato" className="bg-sand py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Contato"
          title="Vamos conversar sobre o projeto."
          text="Envie sua dúvida ou sugestão à equipe pelo WhatsApp."
        />

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            className="mt-12 grid gap-5 border-t border-border pt-8 sm:grid-cols-2"
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
            <Button type="submit" size="lg" className="h-12 sm:col-span-2 sm:justify-self-start">Continuar no WhatsApp <ArrowRight /></Button>
            <p className="text-xs text-muted-foreground sm:col-span-2">Os dados serão incluídos na mensagem. O envio só acontece quando você confirmar no WhatsApp.</p>
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
        <Galeria />
        <Equipe />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </>
  );
}
