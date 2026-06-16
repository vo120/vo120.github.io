/* eslint-disable */
// Post-build step: obfuscate the compiled JavaScript and strip source maps so
// the shipped bundle is much harder to read or reverse-engineer.
//
// NOTE: this only protects the JS logic. HTML, CSS and the rendered page are
// always visible to any browser, so this raises the bar — it cannot make a
// site truly impossible to copy. Settings are kept conservative on purpose so
// they don't break the React runtime or tank performance.
const fs = require("fs");
const path = require("path");
const JavaScriptObfuscator = require("javascript-obfuscator");

const buildDir = path.join(__dirname, "..", "build");
const jsDir = path.join(buildDir, "static", "js");
const staticDir = path.join(buildDir, "static");

const options = {
  compact: true,
  simplify: true,
  target: "browser",
  sourceMap: false,
  identifierNamesGenerator: "hexadecimal",
  stringArray: true,
  stringArrayThreshold: 0.75,
  stringArrayEncoding: ["base64"],
  // The aggressive transforms below are intentionally OFF — they routinely
  // break minified/vendor bundles and hurt performance.
  controlFlowFlattening: false,
  deadCodeInjection: false,
  selfDefending: false,
  debugProtection: false,
  renameGlobals: false,
  transformObjectKeys: false,
  unicodeEscapeSequence: false,
};

function obfuscateJs() {
  if (!fs.existsSync(jsDir)) {
    console.warn("[obfuscate] no build/static/js directory — skipping");
    return;
  }
  const files = fs
    .readdirSync(jsDir)
    .filter((f) => f.endsWith(".js") && !f.endsWith(".min.js"));

  for (const file of files) {
    const filePath = path.join(jsDir, file);
    const code = fs.readFileSync(filePath, "utf8");
    const result = JavaScriptObfuscator.obfuscate(code, options).getObfuscatedCode();
    fs.writeFileSync(filePath, result, "utf8");
    console.log(`[obfuscate] ${file} (${(result.length / 1024).toFixed(1)} KB)`);
  }
}

// Remove every source map so the original source can't be reconstructed.
function stripSourceMaps(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) stripSourceMaps(full);
    else if (entry.name.endsWith(".map")) {
      fs.unlinkSync(full);
      console.log(`[obfuscate] removed source map ${entry.name}`);
    }
  }
}

// Drop the trailing //# sourceMappingURL=... comment now that maps are gone.
function stripSourceMapRefs(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) stripSourceMapRefs(full);
    else if (entry.name.endsWith(".js") || entry.name.endsWith(".css")) {
      const code = fs.readFileSync(full, "utf8");
      const cleaned = code.replace(/\/\*?#\s*sourceMappingURL=.*?(\*\/|$)/gm, "");
      if (cleaned !== code) fs.writeFileSync(full, cleaned, "utf8");
    }
  }
}

console.log("[obfuscate] starting…");
obfuscateJs();
stripSourceMaps(staticDir);
stripSourceMapRefs(staticDir);
console.log("[obfuscate] done.");
