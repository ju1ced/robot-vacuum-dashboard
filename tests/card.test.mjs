import { GlobalRegistrator } from "@happy-dom/global-registrator";
import { readFileSync } from "node:fs";
import { test, before, after } from "node:test";
import assert from "node:assert/strict";

const SOURCE = readFileSync(new URL("../robot-vacuum-dashboard.js", import.meta.url), "utf8");
const flush = () => new Promise((resolve) => setTimeout(resolve, 0));
const state = (entity_id, value, attributes = {}) => ({ entity_id, state: String(value), attributes, last_updated: "2026-10-10T10:00:00Z" });

let Card;

before(async () => {
  GlobalRegistrator.register({ url: "http://localhost/" });
  globalThis.fetch = async () => ({ ok: false, status: 404, text: async () => "" });
  await import("../robot-vacuum-dashboard.js");
  Card = customElements.get("robot-vacuum-dashboard-card");
});

after(async () => {
  await GlobalRegistrator.unregister();
});

// A Deebot as Home Assistant 2026.9 exposes it: entity names that the old name
// heuristic did not recognise, with translation keys in the entity registry.
const deebotHass = (overrides = {}) => {
  const states = {
    "vacuum.deebot_ga": state("vacuum.deebot_ga", "docked", { friendly_name: "Deebot", battery_level: 90, fan_speed: "max_plus", fan_speed_list: ["quiet", "normal", "max_plus"], supported_features: 29500 }),
    "sensor.deebot_ga_area_cleaned": state("sensor.deebot_ga_area_cleaned", 17, { unit_of_measurement: "m²" }),
    "sensor.deebot_ga_cleaning_duration": state("sensor.deebot_ga_cleaning_duration", 18, { unit_of_measurement: "min" }),
    "sensor.deebot_ga_total_cleaning_duration": state("sensor.deebot_ga_total_cleaning_duration", 277, { unit_of_measurement: "h" }),
    "sensor.deebot_ga_total_area_cleaned": state("sensor.deebot_ga_total_area_cleaned", 12123, { unit_of_measurement: "m²" }),
    "sensor.deebot_ga_main_brush_lifespan": state("sensor.deebot_ga_main_brush_lifespan", 97),
    "select.deebot_ga_water_flow_level": state("select.deebot_ga_water_flow_level", "low", { options: ["low", "medium", "high"] }),
    "sensor.ecovacs_map_data_map_geometry": state("sensor.ecovacs_map_data_map_geometry", 2, { schema_version: 2, rotation: 0, rooms: [
      { id: 1, name: "Kitchen", coordinates: [[0, 0], [5000, 0], [5000, -5000], [0, -5000]] },
      { id: 2, name: "Living", coordinates: [[5000, 0], [9000, 0], [9000, -5000], [5000, -5000]] },
    ] }),
    "light.unrelated": state("light.unrelated", "off"),
  };
  const entry = (entity_id, translation_key, platform = "ecovacs", device_id = "dev-deebot") => ({ entity_id, translation_key, platform, device_id });
  const entities = {
    "vacuum.deebot_ga": entry("vacuum.deebot_ga", "vacuum"),
    "sensor.deebot_ga_area_cleaned": entry("sensor.deebot_ga_area_cleaned", "stats_area"),
    "sensor.deebot_ga_cleaning_duration": entry("sensor.deebot_ga_cleaning_duration", "stats_time"),
    "sensor.deebot_ga_total_cleaning_duration": entry("sensor.deebot_ga_total_cleaning_duration", "total_stats_time"),
    "sensor.deebot_ga_total_area_cleaned": entry("sensor.deebot_ga_total_area_cleaned", "total_stats_area"),
    "sensor.deebot_ga_main_brush_lifespan": entry("sensor.deebot_ga_main_brush_lifespan", "lifespan_brush"),
    "select.deebot_ga_water_flow_level": entry("select.deebot_ga_water_flow_level", "water_amount"),
    "sensor.ecovacs_map_data_map_geometry": entry("sensor.ecovacs_map_data_map_geometry", "map_geometry", "ecovacs_map_data", "dev-other"),
    "light.unrelated": entry("light.unrelated", null, "hue", "dev-light"),
  };
  return {
    states,
    entities,
    devices: { "dev-deebot": { id: "dev-deebot", manufacturer: "Ecovacs", model: "DEEBOT T8+" } },
    areas: { kitchen: { area_id: "kitchen", name: "Kitchen" }, living_room: { area_id: "living_room", name: "Living room" } },
    language: "en",
    hassUrl: (url) => url,
    callService: async () => {},
    callWS: async () => ({ options: {} }),
    ...overrides,
  };
};

const mount = async (config = {}, hass = deebotHass()) => {
  const card = document.createElement("robot-vacuum-dashboard-card");
  document.body.append(card);
  card.setConfig({ entity: "vacuum.deebot_ga", ...config });
  card.hass = hass;
  await flush();
  return card;
};

const text = (card) => card.shadowRoot.querySelector("ha-card")?.textContent.replace(/\s+/g, " ") || "";

test("translations: every language has exactly the English keys", () => {
  const translations = new Function(`${SOURCE.slice(SOURCE.indexOf("const RVD_TRANSLATIONS"), SOURCE.indexOf("// Picks the card language"))}; return RVD_TRANSLATIONS;`)();
  const english = Object.keys(translations.en).sort();
  for (const [language, table] of Object.entries(translations)) {
    assert.deepEqual(Object.keys(table).sort(), english, `keys of ${language}`);
  }
});

test("language follows Home Assistant, the option overrides it, unknown falls back to English", async () => {
  const dutch = await mount({}, deebotHass({ language: "nl" }));
  assert.match(text(dutch), /Overzicht/);
  const british = await mount({}, deebotHass({ language: "en-GB" }));
  assert.match(text(british), /Overview/);
  const french = await mount({}, deebotHass({ language: "fr" }));
  assert.match(text(french), /Overview/);
  const forced = await mount({ language: "nl" }, deebotHass({ language: "en" }));
  assert.match(text(forced), /Overzicht/);
});

test("entities resolve by device and translation key, not by name", async () => {
  const card = await mount();
  assert.equal(card._entity("cleaning_area"), "sensor.deebot_ga_area_cleaned");
  assert.equal(card._entity("cleaning_time"), "sensor.deebot_ga_cleaning_duration");
  assert.equal(card._entity("total_time"), "sensor.deebot_ga_total_cleaning_duration");
  assert.equal(card._entity("total_area"), "sensor.deebot_ga_total_area_cleaned");
  assert.equal(card._entity("water_level"), "select.deebot_ga_water_flow_level");
  assert.equal(card._entity("map_geometry"), "sensor.ecovacs_map_data_map_geometry");
  assert.match(text(card), /17 m²/);
  assert.match(text(card), /ECOVACS · ROBOT VACUUM/);
});

test("an explicit entity mapping wins over detection", async () => {
  const card = await mount({ entities: { cleaning_area: "sensor.deebot_ga_total_area_cleaned" } });
  assert.equal(card._entity("cleaning_area"), "sensor.deebot_ga_total_area_cleaned");
});

test("without an entity registry, names are still matched", async () => {
  const hass = deebotHass();
  delete hass.entities;
  const card = await mount({}, hass);
  assert.equal(card._entity("cleaning_area"), "sensor.deebot_ga_area_cleaned");
  assert.equal(card._entity("total_time"), "sensor.deebot_ga_total_cleaning_duration");
});

test("unrelated state changes do not re-render; vacuum changes do", async () => {
  const hass = deebotHass();
  const card = await mount({}, hass);
  // Let the one-time area-mapping lookup finish before counting renders.
  await flush();
  await flush();
  let renders = 0;
  const original = card._render.bind(card);
  card._render = () => { renders += 1; original(); };
  card.hass = { ...hass, states: { ...hass.states, "light.unrelated": state("light.unrelated", "on") } };
  await flush();
  assert.equal(renders, 0);
  const next = { ...hass, states: { ...hass.states, "vacuum.deebot_ga": state("vacuum.deebot_ga", "cleaning", hass.states["vacuum.deebot_ga"].attributes) } };
  card.hass = next;
  await flush();
  assert.equal(renders, 1);
});

test("a focused dropdown is not replaced until it loses focus", async () => {
  const hass = deebotHass();
  const card = await mount({}, hass);
  const select = card.shadowRoot.querySelector("select[data-control]");
  select.focus();
  card.hass = { ...hass, states: { ...hass.states, "vacuum.deebot_ga": state("vacuum.deebot_ga", "cleaning", hass.states["vacuum.deebot_ga"].attributes) } };
  await flush();
  assert.equal(card.shadowRoot.querySelector("select[data-control]"), select);
  select.blur();
  await flush();
  assert.notEqual(card.shadowRoot.querySelector("select[data-control]"), select);
});

test("Home Assistant formatting is used for values and options", async () => {
  const hass = deebotHass({
    formatEntityState: (stateObj, value) => `fmt(${value ?? stateObj.state})`,
    formatEntityAttributeValue: (_stateObj, attribute, value) => `attr(${attribute}:${value})`,
  });
  const card = await mount({}, hass);
  assert.match(text(card), /fmt\(17\)/);
  assert.match(text(card), /attr\(fan_speed:max_plus\)/);
  const option = card.shadowRoot.querySelector('select[data-control="fan"] option[value="max_plus"]');
  assert.equal(option.textContent, "attr(fan_speed:max_plus)");
});

test("a failed action raises a Home Assistant notification", async () => {
  const hass = deebotHass({ callService: async () => { throw new Error("robot offline"); } });
  const card = await mount({ confirm_actions: false }, hass);
  const messages = [];
  card.addEventListener("hass-notification", (event) => messages.push(event.detail.message));
  card.shadowRoot.querySelector('[data-service="vacuum.pause"]').click();
  await flush();
  assert.deepEqual(messages, ["Action failed: robot offline"]);
});

test("rooms use Home Assistant's area mapping by segment id", async () => {
  const hass = deebotHass({
    callWS: async (message) => {
      assert.equal(message.type, "config/entity_registry/get");
      return { options: { vacuum: { area_mapping: { kitchen: ["1"], living_room: ["2"] } } } };
    },
  });
  const card = await mount({}, hass);
  card._cleaningAreas();
  await flush();
  await flush();
  const areas = card._cleaningAreas();
  assert.deepEqual(areas.map((area) => [area.id, area.name, area.segments]), [["kitchen", "Kitchen", ["1"]], ["living_room", "Living room", ["2"]]]);
  card._mapMetadata = { revision: "r1", viewBox: [0, -200, 200, 200] };
  const rooms = card._roomRenderData(hass.states["vacuum.deebot_ga"]).rooms;
  assert.deepEqual(rooms.map((room) => [room.id, room.displayName]), [["kitchen", "Kitchen"], ["living_room", "Living room"]]);
});

test("without an area mapping, a vacuum that can clean areas shows the setup hint", async () => {
  const card = await mount();
  card._cleanMode = "area";
  card._render();
  await flush();
  card._render();
  assert.match(text(card), /link the vacuum's rooms to Home Assistant areas/);
});

test("the map sanitizer keeps drawing elements and strips active content", async () => {
  const card = await mount();
  const result = card._sanitizeMapSvg(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 10" onload="alert(1)">
    <script>alert(1)</script>
    <foreignObject><div>x</div></foreignObject>
    <path id="d" d="M0 0L1 1" stroke="#fff" onclick="alert(2)"/>
    <use href="#d"/>
    <use xlink:href="javascript:alert(3)"/>
    <image href="https://evil.example/x.png"/>
    <image href="data:image/png;base64,AAAA"/>
    <animate attributeName="href" values="javascript:alert(4)"/>
    <set attributeName="onclick" to="alert(5)"/>
    <rect width="1" height="1" style="fill:url(https://evil.example/a)"/>
  </svg>`);
  assert.ok(result);
  assert.deepEqual(result.viewBox, [0, 0, 10, 10]);
  for (const forbidden of ["<script", "foreignObject", "onload", "onclick", "javascript:", "evil.example", "<animate", "<set"]) {
    assert.ok(!result.source.includes(forbidden), `should strip ${forbidden}`);
  }
  assert.ok(result.source.includes('href="#d"'));
  assert.ok(result.source.includes("data:image/png;base64,AAAA"));
  assert.ok(result.source.includes('d="M0 0L1 1"'));
});

test("controls are labelled for assistive technology", async () => {
  const card = await mount();
  const tabs = card.shadowRoot.querySelectorAll('nav[role="tablist"] [role="tab"]');
  assert.equal(tabs.length, 3);
  assert.equal(tabs[0].getAttribute("aria-selected"), "true");
  assert.ok(card.shadowRoot.querySelector(".clean-start").getAttribute("aria-label"));
  assert.ok(card.shadowRoot.querySelector(".battery").getAttribute("aria-label").includes("90%"));
});

test("labels and names are escaped", async () => {
  const hass = deebotHass();
  const card = await mount({ name: '<img src=x onerror="alert(1)">' }, hass);
  assert.equal(card.shadowRoot.querySelector("h1 img"), null);
  assert.match(card.shadowRoot.querySelector("h1").textContent, /<img src=x/);
});

test("the fallback editor keeps its fields across hass updates", async () => {
  const editor = document.createElement("robot-vacuum-dashboard-card-editor");
  editor._formSupport = false;
  document.body.append(editor);
  editor.setConfig({ entity: "vacuum.deebot_ga" });
  const hass = deebotHass();
  editor.hass = hass;
  const input = editor.shadowRoot.querySelector('input[data-key="name"]');
  assert.ok(input);
  editor.hass = { ...hass, states: { ...hass.states, "light.unrelated": state("light.unrelated", "on") } };
  assert.equal(editor.shadowRoot.querySelector('input[data-key="name"]'), input);
});

test("the ha-form editor is created once and only receives new data", async () => {
  class FakeHaForm extends HTMLElement {}
  if (!customElements.get("ha-form")) customElements.define("ha-form", FakeHaForm);
  const editor = document.createElement("robot-vacuum-dashboard-card-editor");
  document.body.append(editor);
  editor.setConfig({ entity: "vacuum.deebot_ga", cleaning_regions: [{ name: "Table", coordinates: "1,2,3,4" }] });
  editor.hass = deebotHass();
  await flush();
  await flush();
  const form = editor.shadowRoot.querySelector("ha-form");
  assert.ok(form);
  assert.equal(form.data.cleaning_regions_text, "Table|1,2,3,4|mdi:vector-rectangle");
  editor.hass = deebotHass();
  assert.equal(editor.shadowRoot.querySelector("ha-form"), form);
  const changes = [];
  editor.addEventListener("config-changed", (event) => changes.push(event.detail.config));
  form.dispatchEvent(new CustomEvent("value-changed", { detail: { value: { ...form.data, language: "auto", cleaning_areas_text: "Kitchen|kitchen|", entities: { map: "", error: "sensor.x" } } } }));
  const config = changes.at(-1);
  assert.equal(config.language, undefined);
  assert.deepEqual(config.cleaning_areas, [{ name: "Kitchen", id: "kitchen", icon: "mdi:floor-plan" }]);
  assert.deepEqual(config.entities, { error: "sensor.x" });
  assert.equal(config.cleaning_areas_text, undefined);
});
