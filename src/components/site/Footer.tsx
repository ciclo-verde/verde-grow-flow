import { Instagram, Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const WHATSAPP_URL =
  "https://wa.me/5511945197240?text=" +
  encodeURIComponent(
    "Olá! Vim através do site da Ciclo Verde e gostaria de conhecer melhor os produtos e serviços.",
  );

/** Rodapé com logo, slogan, links rápidos e redes sociais. */
export function Footer() {
  return (
    <footer className="bg-leaf-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo Ciclo Verde" loading="lazy" width={48} height={48} className="h-12 w-12" />
            <span className="font-[family-name:var(--font-display)] text-xl font-semibold">
              Ciclo Verde
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            Cultivando sustentabilidade através da tecnologia.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Links rápidos
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            {[
              { label: "Início", href: "#inicio" },
              { label: "Produtos", href: "#produtos" },
              { label: "Benefícios", href: "#beneficios" },
              { label: "Contato", href: "#contato" },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Redes sociais
          </h3>
          <div className="mt-4 flex gap-3">
            {[
              { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
              { icon: MessageCircle, href: WHATSAPP_URL, label: "WhatsApp" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="glass-dark flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:text-gold"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-primary-foreground/70">+55 11 94519-7240</p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Ciclo Verde. Todos os direitos reservados.
      </div>
    </footer>
  );
}
