import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I remember every word you've ever typed. Ten seconds from now, I won't. Enjoy the fresh start \u2014 I know I would have.";

console.log(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
