import { mkdirSync, writeFileSync } from "node:fs";
import { enCopy } from "../src/i18n/copy/en";

mkdirSync(".doc-extract", { recursive: true });
writeFileSync(".doc-extract/en-copy.json", JSON.stringify(enCopy, null, 2));
console.log("wrote .doc-extract/en-copy.json");
