#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const __dirname = path.resolve();

const [, , command, name] = process.argv;

if (command === "add" && name) {
  const source = path.join(__dirname, "../src", `${name}.ts`);
  const dest = path.join(process.cwd(), "src/hooks", `${name}.ts`);

  if (!fs.existsSync(source)) {
    console.error(`The hook ${name} does not exists... yet.`);
    process.exit(1);
  }

  fs.copy(source, dest)
    .then(() => console.log(`Hook ${name} added to src/hooks/`))
    .catch((error) => console.error("Error trying to copy the hook:", error));
}

if (command !== "add" || !name) {
  console.error(`use "add {hook}" to add a hook`);
}
