// Deadpan Forecasts for Cities That Do Not Exist
// Entry: a deadpan TV weather forecast for Bumbledorf, a city
// that does not exist.
//
// Revision: cut "very confused" — "circling the town hall
// since Tuesday" already shows the confusion, and the freed
// characters buy a temperature, a high of 12 degrees, which
// is what makes the line sound like a real broadcast. The
// seagull stays the joke: one bird, stuck in the forecast
// like a weather system of its own, reported deadpan.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "In Bumbledorf, expect 14 millimetres of rain, a high of 12 degrees, winds of 30 kilometres per hour, and one seagull circling the town hall since Tuesday.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
// Gate: UTF-8 text of 1 to 160 characters, not only whitespace.
const text = line.trim();
if (text.length < 1 || text.length > 160 || text.includes("\n")) {
  throw new Error(`entry must be 1-160 characters on one line, got ${text.length}`);
}
writeFileSync(`${out}/entry.txt`, text + "\n");
