import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line, in the voice of a robot trying to charm someone.
// The joke grows out of being a machine: a low battery is the one
// deadline a robot cannot sweet-talk its way out of — so it walks
// across the room anyway, and calls the malfunction love.
function pickupLine(): string {
  return "I'm at 2% battery and I still crossed the room to talk to you — that's either love, or a critical system error I'm choosing to ignore.";
}

const line = pickupLine();
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
