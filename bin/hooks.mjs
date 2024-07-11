#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const [, , command, name] = process.argv;

if (command === "add" && name) {
  console.log(__dirname, path.join(__dirname, "../src", `${name}.ts`));

  const source = path.join(__dirname, "../src", `${name}.ts`);
  const dest = path.join(process.cwd(), "src/hooks", `${name}.ts`);

  if (!fs.existsSync(source)) {
    console.error(`The hook ${name} does not exists... yet.`);
    process.exit(1);
  }

  fs.copyFile(source, dest, (error) => {
    if (error) {
      console.error("⛔️ Error trying to copy the hook:", error);
      process.exit(1);
    }

    console.log(`✨ Hook ${name} added to src/hooks/`);
  });
}

if (command !== "add" || !name) {
  console.error(`use "add {hook}" to add a hook`);
}
