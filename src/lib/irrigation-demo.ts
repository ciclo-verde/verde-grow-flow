/** Conceptual sequence only; no physical device or sensor is connected. */
export const IRRIGATION_STAGES = ["Reservatório", "Tubulação", "Distribuição de água", "Plantas"] as const;

export function nextIrrigationStage(stage: number): number {
  return (stage + 1) % IRRIGATION_STAGES.length;
}