// One Line, One Minute: The Vending Machine Pickup Line
// A vending-machine pickup line: the machine takes all your change
// and still leaves you empty-handed. Entry is one line, 1-200 chars.
// The joke works because the vending machine is the one doing the
// flirting, and it is also the reason the date goes nowhere.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Are you a vending machine? Because every time I see you, I lose all my change and still walk away empty-handed.";

const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
