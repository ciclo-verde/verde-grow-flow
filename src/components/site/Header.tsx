import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Projeto", href: "#sobre" },
  { label: "Protótipo", href: "#produtos" },
  { label: "Sustentabilidade", href: "#beneficios" },
  { label: "Irrigação", href: "#como-funciona" },
  { label: "Galeria", href: "#galeria" },
  { label: "Equipe", href: "#equipe" },
];

/** Menu fixo transparente que ganha fundo de vidro ao rolar. */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled || open ? "glass shadow-[var(--shadow-soft)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2.5">
          <img src={logo} alt="Logo Ciclo Verde" width={40} height={40} className="h-10 w-10" />
          <span
            className={`font-[family-name:var(--font-display)] text-lg font-semibold transition-colors ${
              scrolled || open ? "text-primary" : "text-primary-foreground"
            }`}
          >
            Ciclo Verde
          </span>
        </a>

        <nav className="hidden items-center gap-5 xl:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ${
                scrolled || open
                  ? "text-foreground hover:text-primary"
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex"><a href="#contato">Fale com a equipe</a></Button>
          <Button variant="ghost" size="icon" onClick={() => setOpen((v) => !v)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-nav" className={`xl:hidden ${scrolled || open ? "text-foreground" : "text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"}`}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="glass border-t border-border/50 px-5 pb-6 pt-2 xl:hidden">
          <nav id="mobile-nav" className="flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-3 text-sm font-medium text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-4"><a href="#contato" onClick={() => setOpen(false)}>Fale com a equipe</a></Button>
          </nav>
        </div>
      )}
    </header>
  );
}
