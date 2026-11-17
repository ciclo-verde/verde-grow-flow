import { describe, it as test } from "node:test";
import assert from "node:assert/strict";
import { IRRIGATION_STAGES, nextIrrigationStage } from "./irrigation-demo";

describe("conceptual irrigation demonstration", () => {
  test("water travels from the reservoir through tubing and distribution to plants", () => {
    assert.deepEqual(IRRIGATION_STAGES, ["Reservatório", "Tubulação", "Distribuição de água", "Plantas"]);
    let current = 0;
    const visited = [IRRIGATION_STAGES[current]];
    for (let i = 0; i < 3; i++) {
      current = nextIrrigationStage(current);
      visited.push(IRRIGATION_STAGES[current]);
    }
    assert.deepEqual(visited, ["Reservatório", "Tubulação", "Distribuição de água", "Plantas"]);
    assert.equal(nextIrrigationStage(current), 0);
  });
});