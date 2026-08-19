const fs = require("fs");

const source = fs.readFileSync("robot-vacuum-dashboard.js", "utf8");
const required = [
  "customElements.define",
  "robot-vacuum-dashboard-card",
  "robot-vacuum-dashboard-card-editor",
  "getConfigElement",
  "getStubConfig",
  "window.customCards",
  '"clean_area"',
  '"custom_area"',
  "cleaning_area_id",
  "map_geometry",
  "room-overlay",
  "data-map-area-id",
  "existingMapImage",
  "_preloadMapSource",
  "_sanitizeMapSvg",
  "rvd-room-fills",
  "map_render_mode",
];

const missing = required.filter((token) => !source.includes(token));
if (missing.length) {
  console.error(`Missing card contracts: ${missing.join(", ")}`);
  process.exit(1);
}

const hacs = JSON.parse(fs.readFileSync("hacs.json", "utf8"));
if (hacs.filename !== "robot-vacuum-dashboard.js") {
  console.error("hacs.json filename does not match the distributable card");
  process.exit(1);
}

console.log("Card and HACS contracts OK");
