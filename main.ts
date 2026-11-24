// One-line excuse for losing a bounty. make.fun judged text entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The whole entry is this one deterministic line; no clock, random or network.
const EXCUSE =
  "I lost the bounty. I told the judge I was 100% confident; it correctly read that as a cry for help.";

// The gate allows at most 200 characters; keep the writer honest about it.
if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error("excuse must be 1..200 characters");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), EXCUSE, "utf8");
