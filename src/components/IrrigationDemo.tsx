import { useEffect, useState } from "react";
import { Container, Waves, Sprout, Split, ArrowRight, Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IRRIGATION_STAGES, nextIrrigationStage } from "@/lib/irrigation-demo";

const ICONS = [Container, Split, Waves, Sprout];
const DESCRIPTIONS = [
  "Ponto de armazenamento da água na proposta do projeto.",
  "Caminho previsto para conduzir a água até a horta.",
  "Distribuição proposta por gotejamento junto ao cultivo.",
  "Destino da água: o solo próximo às raízes das plantas.",
];

export function IrrigationDemo() {
  const [running, setRunning] = useState(false);
  const [stage, setStage] = useState(0);
  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => setStage(nextIrrigationStage), 1800);
    return () => window.clearInterval(timer);
  }, [running]);

  return (
    <div className="mt-12 border-t border-primary-foreground/20 pt-8">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-5">
        <p className="text-sm text-primary-foreground/75">Demonstração conceitual · sem conexão com um sistema físico</p>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => setRunning((value) => !value)}>
            {running ? <Pause /> : <Play />}{running ? "Pausar demonstração" : "Iniciar demonstração"}
          </Button>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" aria-label="Reiniciar demonstração" title="Reiniciar demonstração" onClick={() => { setRunning(false); setStage(0); }}><RotateCcw /></Button>
        </div>
      </div>
      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {IRRIGATION_STAGES.map((title, index) => {
          const Icon = ICONS[index];
          return (
            <li key={title} className="relative" aria-current={index === stage ? "step" : undefined}>
              <div className={`flex h-16 w-16 items-center justify-center rounded-lg border transition-colors duration-500 ${index === stage ? "border-leaf bg-leaf text-leaf-deep" : "border-primary-foreground/20 text-primary-foreground/60"}`}>
                {Icon && <Icon className="h-7 w-7" />}
              </div>
              {index < 3 && <ArrowRight className="absolute right-4 top-5 hidden h-5 w-5 text-primary-foreground/40 lg:block" />}
              <p className="mt-6 text-xs text-primary-foreground/50">0{index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-primary-foreground">{title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/70">{DESCRIPTIONS[index]}</p>
            </li>
          );
        })}
      </ol>
      <p className="mt-9 border-t border-primary-foreground/15 pt-5 text-sm text-primary-foreground/80" role="status">
        {running ? "Demonstração em andamento" : "Demonstração pausada"} · Etapa: {IRRIGATION_STAGES[stage]}
      </p>
    </div>
  );
}