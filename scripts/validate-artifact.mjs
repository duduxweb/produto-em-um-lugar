import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const workerPath = resolve(projectRoot, "dist/server/index.js");
const manifestPath = resolve(projectRoot, "dist/.openai/hosting.json");

const [source, manifest] = await Promise.all([
  readFile(workerPath, "utf8"),
  readFile(manifestPath, "utf8"),
]);
JSON.parse(manifest);

// A data URL forces ESM parsing even though the generated output has no package.json.
const moduleUrl = `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`;
const workerModule = await import(moduleUrl);
assert.equal(
  typeof workerModule.default?.fetch,
  "function",
  `${pathToFileURL(workerPath)} must export default.fetch`,
);

const pageResponse = await workerModule.default.fetch(new Request("https://produto-em-um-lugar.invalid/"));
assert.equal(pageResponse.status, 200, "The home page must load successfully");
const pageHtml = await pageResponse.text();
const inlineScripts = [...pageHtml.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map((match) => match[1]);
assert.ok(inlineScripts.length > 0, "The home page must include its application script");
for (const [index, script] of inlineScripts.entries()) {
  assert.doesNotThrow(() => new Function(script), `Inline page script ${index + 1} must be valid JavaScript`);
}

console.log("Artifact is valid ESM, serves the home page, and its inline JavaScript parses");
