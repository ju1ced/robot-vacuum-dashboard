const ROBOT_VACUUM_DASHBOARD_VERSION = "0.6.0";

const RVD_TRANSLATIONS = {
  en: {
    state_cleaning: "Cleaning",
    state_docked: "Docked",
    state_returning: "Returning to dock",
    state_paused: "Paused",
    state_idle: "Ready",
    state_error: "Needs attention",
    state_unavailable: "Unavailable",
    state_unknown: "Status unknown",
    card_description: "A complete, cohesive dashboard for robot vacuums.",
    error_invalid_entity: "Select a valid vacuum.* entity.",
    default_name: "Robot vacuum",
    not_available: "Not available",
    entity_not_found: "Entity {entity} not found.",
    tab_overview: "Overview",
    tab_details: "All data",
    tab_settings: "Settings",
    map_alt: "Map of the cleaning area",
    battery_level: "Battery level",
    attention_needed: "Attention needed",
    check_robot: "Check the robot",
    action_start: "Start",
    action_pause: "Pause",
    action_stop: "Stop",
    action_home: "Return home",
    action_locate: "Locate",
    kicker_live_map: "LIVE MAP",
    map_heading_cleaning: "Cleaning in progress",
    map_heading_idle: "Choose a cleaning mode",
    map_details: "Map details",
    no_map: "No map found",
    no_map_help: "Link the map entity in the card settings.",
    kicker_current: "CURRENT",
    last_clean: "Last clean",
    metric_area: "Area",
    metric_duration: "Duration",
    metric_mop: "Mop",
    mop_attached: "Attached",
    mop_not_attached: "Not attached",
    metric_suction: "Suction",
    suction_default: "Standard",
    kicker_history: "HISTORY",
    all_cleanings: "All cleanings",
    total_cleanings: "Cleanings",
    total_area: "Total area",
    total_time: "Total time",
    areas_help: "Add Home Assistant area IDs in the card editor.",
    regions_help: "Add saved Ecovacs coordinates in the card editor.",
    auto_help: "Clean the whole active map.",
    zone_name: "Zone {number}",
    clean_selected_rooms: "Clean selected rooms",
    clean_selected_zone: "Clean selected zone",
    start_full_clean: "Start full clean",
    mode_area: "Area",
    mode_auto: "AUTO",
    mode_custom: "Custom",
    confirm_rooms_one: "Clean {count} selected room?",
    confirm_rooms_other: "Clean {count} selected rooms?",
    confirm_zone: "Clean the zone {name}?",
    custom_zone: "Custom",
    control_work_mode: "Work mode",
    control_water_level: "Water level",
    kicker_maintenance: "MAINTENANCE",
    parts: "Parts",
    main_brush: "Main brush",
    side_brush: "Side brush",
    filter: "Filter",
    no_data: "No data",
    replace: "Replace",
    check_soon: "Check soon",
    in_order: "OK",
    kicker_diagnostics: "DIAGNOSTICS",
    all_linked_data: "All linked data",
    entity_count: "{count} entities",
    setting_continuous: "Resume after charging",
    setting_carpet: "Carpet boost",
    setting_advanced: "Advanced mode",
    kicker_robot: "ROBOT",
    smart_behaviour: "Smart behaviour",
    no_switches: "No supported switches found.",
    kicker_map: "MAP",
    configuration: "Configuration",
    config_vacuum: "Vacuum",
    config_map: "Map",
    not_linked: "Not linked",
    config_confirm: "Action confirmation",
    on: "On",
    off: "Off",
    settings_hint: "Open the dashboard editor to assign entities manually or hide sections.",
    confirm_start: "Start cleaning?",
    confirm_stop: "Stop the current task?",
    confirm_return: "Send the robot to the dock?",
    editor_vacuum: "Robot vacuum",
    editor_vacuum_entity: "Vacuum entity",
    editor_choose: "Choose a robot…",
    editor_name: "Name",
    editor_confirm: "Confirm actions",
    editor_show_map: "Show map",
    editor_show_details: "Show details",
    editor_targeted: "Targeted cleaning",
    editor_targeted_help: "One item per line. Rooms: name | Home Assistant area ID | icon. Zones: name | x1,y1,x2,y2 | icon.",
    editor_rooms: "Rooms",
    editor_rooms_placeholder: "Kitchen|kitchen|mdi:silverware-fork-knife",
    editor_zones: "Saved zones",
    editor_zones_placeholder: "Under dining table|-1339,-1511,296,-2587|mdi:table-furniture",
    editor_zone_command: "Ecovacs zone command",
    editor_manual: "Manual entity mapping",
    editor_manual_help: "Leave fields empty to detect entities automatically.",
    editor_auto: "Automatic",
    field_map: "Map (image or camera)",
    field_map_geometry: "Room geometry",
    field_mop: "Mop attached",
    field_cleaning_area: "Current clean area",
    field_cleaning_time: "Current clean duration",
    field_total_cleanings: "Number of cleanings",
    field_clean_count: "Number of passes",
    field_error: "Error status",
    kind_label: "ROBOT VACUUM",
    sections: "Card sections",
    cleaning_modes: "Cleaning modes",
    action_failed: "Action failed: {error}",
    area_mapping_hint: "To clean by room, link the vacuum's rooms to Home Assistant areas in the vacuum's entity settings.",
    editor_language: "Language",
    language_auto: "Automatic (Home Assistant language)",
    editor_rooms_help: "Optional. Only used when the vacuum has no Home Assistant area mapping. One room per line: name | area ID | icon.",
    editor_zones_help: "One zone per line: name | x1,y1,x2,y2 | icon.",
  },
  nl: {
    state_cleaning: "Aan het schoonmaken",
    state_docked: "Op het laadstation",
    state_returning: "Terug naar het station",
    state_paused: "Gepauzeerd",
    state_idle: "Gereed",
    state_error: "Controle nodig",
    state_unavailable: "Niet bereikbaar",
    state_unknown: "Status onbekend",
    card_description: "Een compleet en samenhangend dashboard voor robotstofzuigers.",
    error_invalid_entity: "Selecteer een geldige vacuum.* entiteit.",
    default_name: "Robotstofzuiger",
    not_available: "Niet beschikbaar",
    entity_not_found: "Entiteit {entity} niet gevonden.",
    tab_overview: "Overzicht",
    tab_details: "Alle data",
    tab_settings: "Instellingen",
    map_alt: "Kaart van de schoonmaakzone",
    battery_level: "Accuniveau",
    attention_needed: "Aandacht nodig",
    check_robot: "Controleer de robot",
    action_start: "Start",
    action_pause: "Pauze",
    action_stop: "Stop",
    action_home: "Naar huis",
    action_locate: "Vind robot",
    kicker_live_map: "LIVE MAP",
    map_heading_cleaning: "Schoonmaak bezig",
    map_heading_idle: "Kies een schoonmaakmodus",
    map_details: "Kaartdetails",
    no_map: "Geen kaart gevonden",
    no_map_help: "Koppel de map-entiteit in de kaartinstellingen.",
    kicker_current: "ACTUEEL",
    last_clean: "Laatste schoonmaak",
    metric_area: "Oppervlakte",
    metric_duration: "Duur",
    metric_mop: "Dweil",
    mop_attached: "Geplaatst",
    mop_not_attached: "Niet geplaatst",
    metric_suction: "Zuigkracht",
    suction_default: "Standaard",
    kicker_history: "HISTORIE",
    all_cleanings: "Alle schoonmaakbeurten",
    total_cleanings: "Schoonmaakbeurten",
    total_area: "Totale oppervlakte",
    total_time: "Totale tijd",
    areas_help: "Voeg Home Assistant area-ID's toe via de kaarteditor.",
    regions_help: "Voeg opgeslagen Ecovacs-coördinaten toe via de kaarteditor.",
    auto_help: "Reinig de volledige actieve kaart.",
    zone_name: "Zone {number}",
    clean_selected_rooms: "Reinig geselecteerde kamers",
    clean_selected_zone: "Reinig geselecteerde zone",
    start_full_clean: "Start volledige schoonmaak",
    mode_area: "Area",
    mode_auto: "AUTO",
    mode_custom: "Custom",
    confirm_rooms_one: "Wil je {count} geselecteerde ruimte reinigen?",
    confirm_rooms_other: "Wil je {count} geselecteerde ruimtes reinigen?",
    confirm_zone: "Wil je de zone {name} reinigen?",
    custom_zone: "Custom",
    control_work_mode: "Werkmodus",
    control_water_level: "Waterniveau",
    kicker_maintenance: "ONDERHOUD",
    parts: "Onderdelen",
    main_brush: "Hoofdborstel",
    side_brush: "Zijborstel",
    filter: "Filter",
    no_data: "Geen data",
    replace: "Vervangen",
    check_soon: "Binnenkort controleren",
    in_order: "In orde",
    kicker_diagnostics: "DIAGNOSTIEK",
    all_linked_data: "Alle gekoppelde data",
    entity_count: "{count} entiteiten",
    setting_continuous: "Hervatten na opladen",
    setting_carpet: "Boost op tapijt",
    setting_advanced: "Geavanceerde modus",
    kicker_robot: "ROBOT",
    smart_behaviour: "Slim gedrag",
    no_switches: "Geen ondersteunde schakelaars gevonden.",
    kicker_map: "KAART",
    configuration: "Configuratie",
    config_vacuum: "Vacuüm",
    config_map: "Kaart",
    not_linked: "Niet gekoppeld",
    config_confirm: "Actiebevestiging",
    on: "Aan",
    off: "Uit",
    settings_hint: "Open de dashboard-editor om entiteiten handmatig toe te wijzen of onderdelen te verbergen.",
    confirm_start: "Wil je de schoonmaak starten?",
    confirm_stop: "Wil je de huidige taak stoppen?",
    confirm_return: "Wil je de robot naar het station sturen?",
    editor_vacuum: "Robotstofzuiger",
    editor_vacuum_entity: "Vacuümentiteit",
    editor_choose: "Kies een robot…",
    editor_name: "Naam",
    editor_confirm: "Acties bevestigen",
    editor_show_map: "Kaart tonen",
    editor_show_details: "Details tonen",
    editor_targeted: "Gericht schoonmaken",
    editor_targeted_help: "Eén item per regel. Kamers: naam | Home Assistant area-ID | icoon. Zones: naam | x1,y1,x2,y2 | icoon.",
    editor_rooms: "Kamers",
    editor_rooms_placeholder: "Keuken|kitchen|mdi:silverware-fork-knife",
    editor_zones: "Opgeslagen zones",
    editor_zones_placeholder: "Onder eettafel|-1339,-1511,296,-2587|mdi:table-furniture",
    editor_zone_command: "Ecovacs zonecommando",
    editor_manual: "Handmatige entiteitstoewijzing",
    editor_manual_help: "Laat velden leeg om entiteiten automatisch te herkennen.",
    editor_auto: "Automatisch",
    field_map: "Kaart (image of camera)",
    field_map_geometry: "Kamergeometrie",
    field_mop: "Dweil geplaatst",
    field_cleaning_area: "Oppervlakte huidige beurt",
    field_cleaning_time: "Duur huidige beurt",
    field_total_cleanings: "Aantal schoonmaakbeurten",
    field_clean_count: "Aantal rondes",
    field_error: "Foutstatus",
    kind_label: "ROBOTSTOFZUIGER",
    sections: "Kaartonderdelen",
    cleaning_modes: "Schoonmaakmodi",
    action_failed: "Actie mislukt: {error}",
    area_mapping_hint: "Koppel de kamers van de robot aan Home Assistant-ruimtes in de entiteitsinstellingen van de robot om per kamer te reinigen.",
    editor_language: "Taal",
    language_auto: "Automatisch (taal van Home Assistant)",
    editor_rooms_help: "Optioneel. Alleen gebruikt als de robot geen Home Assistant-ruimtekoppeling heeft. Eén kamer per regel: naam | area-ID | icoon.",
    editor_zones_help: "Eén zone per regel: naam | x1,y1,x2,y2 | icoon.",
  },
};

// Picks the card language: explicit `language` option, then the Home Assistant
// profile language, then the browser. Unknown languages fall back to English.
const rvdLanguage = (hass, override) => {
  const requested = String(override || hass?.locale?.language || hass?.language || globalThis.navigator?.language || "en").toLowerCase();
  const base = requested.split("-")[0];
  if (RVD_TRANSLATIONS[requested]) return requested;
  return RVD_TRANSLATIONS[base] ? base : "en";
};

const rvdTranslate = (language, key, values = {}) => {
  const template = RVD_TRANSLATIONS[language]?.[key] ?? RVD_TRANSLATIONS.en[key] ?? key;
  return template.replace(/\{(\w+)\}/g, (_match, name) => String(values[name] ?? ""));
};

const RVD_STATE_KEYS = {
  cleaning: "state_cleaning",
  docked: "state_docked",
  returning: "state_returning",
  paused: "state_paused",
  idle: "state_idle",
  error: "state_error",
  unavailable: "state_unavailable",
  unknown: "state_unknown",
};

// `translationKeys` match the entity registry of integrations such as the official
// Ecovacs integration and do not depend on entity names or the UI language.
// `terms` are the name-based fallback for integrations without translation keys.
const RVD_ENTITY_RULES = {
  map: { domains: ["image", "camera"], translationKeys: ["map"], terms: ["map", "kaart"] },
  map_geometry: { domains: ["sensor"], translationKeys: ["map_geometry"], platforms: ["ecovacs_map_data"], terms: ["map_geometry", "map geometry", "kaartgeometrie"] },
  mop_attached: { domains: ["binary_sensor"], translationKeys: ["water_mop_attached", "mop_attached"], terms: ["mop_attached", "mop", "dweil"] },
  cleaning_area: { domains: ["sensor"], translationKeys: ["stats_area"], terms: ["cleaning_cycle_area", "stats_area", "cleaned_area", "area_cleaned"] },
  cleaning_time: { domains: ["sensor"], translationKeys: ["stats_time"], terms: ["cleaning_cycle_time", "stats_time", "cleaning_time", "cleaning_duration"] },
  total_area: { domains: ["sensor"], translationKeys: ["total_stats_area"], terms: ["total_statistics_area", "total_area"] },
  total_time: { domains: ["sensor"], translationKeys: ["total_stats_time"], terms: ["total_statistics_time", "total_time", "total_cleaning_duration"] },
  total_cleanings: { domains: ["sensor"], translationKeys: ["total_stats_cleanings"], terms: ["total_statistics_cleanings", "total_cleanings", "cleanings"] },
  water_level: { domains: ["select", "number", "sensor"], translationKeys: ["water_amount"], terms: ["water_level", "water", "waterhoeveelheid"] },
  work_mode: { domains: ["select"], translationKeys: ["work_mode"], terms: ["work_mode", "cleaning_mode", "modus"] },
  clean_count: { domains: ["number"], translationKeys: ["clean_count"], terms: ["clean_count", "cleanings", "rondes"] },
  error: { domains: ["sensor"], translationKeys: ["error"], terms: ["error", "fout"] },
  main_brush: { domains: ["sensor"], translationKeys: ["lifespan_brush"], terms: ["main_brush", "component_brush", "hoofdborstel"] },
  side_brush: { domains: ["sensor"], translationKeys: ["lifespan_side_brush"], terms: ["side_brush", "component_side_brush", "zijborstel"] },
  filter: { domains: ["sensor"], translationKeys: ["lifespan_filter"], terms: ["filter", "component_filter"] },
  continuous_cleaning: { domains: ["switch"], translationKeys: ["continuous_cleaning"], terms: ["continuous_cleaning", "continue", "hervatten"] },
  carpet_boost: { domains: ["switch"], translationKeys: ["carpet_auto_fan_boost"], terms: ["carpet_auto_fan_speed_boost", "carpet_boost", "tapijt"] },
  advanced_mode: { domains: ["switch"], translationKeys: ["advanced_mode"], terms: ["advanced_mode", "advanced", "geavanceerd"] },
};

const RVD_EDITOR_FIELDS = [
  ["map", "field_map"], ["map_geometry", "field_map_geometry"], ["mop_attached", "field_mop"],
  ["cleaning_area", "field_cleaning_area"], ["cleaning_time", "field_cleaning_time"],
  ["total_area", "total_area"], ["total_time", "total_time"],
  ["total_cleanings", "field_total_cleanings"], ["water_level", "control_water_level"],
  ["work_mode", "control_work_mode"], ["clean_count", "field_clean_count"], ["error", "field_error"],
  ["main_brush", "main_brush"], ["side_brush", "side_brush"], ["filter", "filter"],
];

const RVD_ICONS = {
  play: "mdi:play", pause: "mdi:pause", stop: "mdi:stop", home: "mdi:home-import-outline", locate: "mdi:crosshairs-gps",
  battery: "mdi:battery", area: "mdi:texture-box", time: "mdi:clock-outline", suction: "mdi:fan", mop: "mdi:water",
};

const RVD_VACUUM_FEATURE_CLEAN_AREA = 16384;

// Only these SVG elements and attributes survive map sanitizing. Everything else,
// including scripts, event handlers, animation and foreign content, is removed.
const RVD_SVG_ELEMENTS = new Set([
  "svg", "g", "path", "rect", "circle", "ellipse", "line", "polyline", "polygon", "use", "defs", "symbol",
  "image", "pattern", "lineargradient", "radialgradient", "stop", "clippath", "mask", "title", "desc",
  "text", "tspan", "style",
]);
const RVD_SVG_ATTRIBUTES = new Set([
  "id", "class", "style", "d", "points", "x", "y", "x1", "y1", "x2", "y2", "dx", "dy", "cx", "cy", "r", "rx", "ry",
  "fx", "fy", "width", "height", "viewbox", "preserveaspectratio", "transform", "version", "xmlns", "xmlns:xlink",
  "xml:space", "href", "xlink:href", "fill", "fill-opacity", "fill-rule", "stroke", "stroke-width", "stroke-opacity",
  "stroke-linecap", "stroke-linejoin", "stroke-dasharray", "stroke-dashoffset", "stroke-miterlimit", "opacity",
  "clip-path", "clip-rule", "clippathunits", "mask", "maskunits", "maskcontentunits", "offset", "stop-color",
  "stop-opacity", "gradientunits", "gradienttransform", "spreadmethod", "patternunits", "patterntransform",
  "patterncontentunits", "font-size", "font-family", "font-weight", "text-anchor", "dominant-baseline",
  "vector-effect", "paint-order", "visibility", "display", "image-rendering", "shape-rendering",
]);

const rvdEscape = (value) => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const rvdParseCollection = (key, value) => String(value || "")
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean)
  .map((line) => {
    const [name, rawValue, icon] = line.split("|").map((part) => part.trim());
    return key === "cleaning_areas"
      ? { name: name || rawValue, id: rawValue, icon: icon || "mdi:floor-plan" }
      : { name: name || "Zone", coordinates: rawValue, icon: icon || "mdi:vector-rectangle" };
  })
  .filter((item) => key === "cleaning_areas" ? item.id : item.coordinates);

const rvdCollectionText = (key, items) => (Array.isArray(items) ? items : [])
  .map((item) => key === "cleaning_areas"
    ? `${item.name || item.id}|${item.id}|${item.icon || "mdi:floor-plan"}`
    : `${item.name || "Zone"}|${Array.isArray(item.coordinates) ? item.coordinates.join(",") : item.coordinates}|${item.icon || "mdi:vector-rectangle"}`)
  .join("\n");

let rvdSharedSheet = null;

class RobotVacuumDashboardCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._tab = "overview";
    this._cleanMode = "auto";
    this._selectedAreas = new Set();
    this._selectedRegion = null;
    this._renderQueued = false;
    this._mapMetadata = null;
    this._mapMetadataLoading = null;
    this._pendingMapSource = null;
    this._entityCache = null;
    this._renderSignature = null;
    this._areaMapping = null;
    this._areaMappingLoading = null;
    this._renderDeferred = false;
    this._adoptStyles();
  }

  setConfig(config) {
    if (!config?.entity || !String(config.entity).startsWith("vacuum.")) {
      throw new Error(rvdTranslate(rvdLanguage(this._hass, config?.language), "error_invalid_entity"));
    }
    this.config = {
      confirm_actions: true,
      show_map: true,
      show_details: true,
      cleaning_areas: [],
      cleaning_regions: [],
      region_command: "custom_area",
      map_render_mode: "native_svg",
      entities: {},
      ...config,
    };
    this._entityCache = null;
    this._renderSignature = null;
    if (this._areaMapping?.entity !== this.config.entity) this._areaMapping = null;
    this._queueRender();
  }

  set hass(hass) {
    const previous = this._hass;
    this._hass = hass;
    if (previous?.entities !== hass?.entities) this._areaMapping = null;
    if (this.config && this._signatureChanged()) this._queueRender();
  }

  getCardSize() { return 8; }

  getGridOptions() {
    return { columns: 12, min_columns: 6, rows: "auto" };
  }

  static getConfigElement() {
    return document.createElement("robot-vacuum-dashboard-card-editor");
  }

  static getStubConfig(hass) {
    const entity = Object.keys(hass?.states || {}).find((id) => id.startsWith("vacuum."));
    return { entity: entity || "vacuum.deebot", name: rvdTranslate(rvdLanguage(hass), "default_name") };
  }

  _t(key, values) {
    return rvdTranslate(rvdLanguage(this._hass, this.config?.language), key, values);
  }

  _stateLabel(state) {
    return RVD_STATE_KEYS[state] ? this._t(RVD_STATE_KEYS[state]) : state;
  }

  _adoptStyles() {
    const supported = typeof CSSStyleSheet === "function" && "adoptedStyleSheets" in this.shadowRoot && "replaceSync" in CSSStyleSheet.prototype;
    if (!supported) {
      this._styleMarkup = `<style>${this._styles()}</style>`;
      return;
    }
    if (!rvdSharedSheet) {
      rvdSharedSheet = new CSSStyleSheet();
      rvdSharedSheet.replaceSync(this._styles());
    }
    this.shadowRoot.adoptedStyleSheets = [rvdSharedSheet];
    this._styleMarkup = "";
  }

  // Home Assistant hands every card a new `hass` object on any state change in the
  // house. Only re-render when something this card shows has changed.
  _signatureChanged() {
    const hass = this._hass;
    if (!hass) return false;
    const resolved = this._resolveEntities();
    const ids = [this.config.entity, ...Object.values(resolved).filter(Boolean)];
    const signature = [
      hass.entities, hass.devices, hass.areas, hass.locale, hass.language,
      ...ids.map((id) => hass.states?.[id]),
    ];
    const previous = this._renderSignature;
    this._renderSignature = signature;
    return !previous || previous.length !== signature.length || signature.some((value, index) => value !== previous[index]);
  }

  _queueRender() {
    if (this._renderQueued) return;
    this._renderQueued = true;
    queueMicrotask(() => {
      this._renderQueued = false;
      if (this.config && this._hass) this._render();
    });
  }

  _vacuum() { return this._hass.states[this.config.entity]; }

  _root() { return this.config.entity.split(".")[1] || ""; }

  _registryEntry(entityId) {
    return this._hass.entities?.[entityId];
  }

  _vacuumDeviceId() {
    return this._registryEntry(this.config.entity)?.device_id || null;
  }

  _relatedStates() {
    const root = this._root().toLowerCase();
    const rootWords = root.split("_").filter((word) => word.length > 2);
    return Object.entries(this._hass.states).filter(([id, state]) => {
      if (id === this.config.entity) return true;
      const haystack = `${id} ${state.attributes?.friendly_name || ""}`.toLowerCase();
      return haystack.includes(root) || rootWords.filter((word) => haystack.includes(word)).length >= Math.min(2, rootWords.length);
    });
  }

  // Resolves every role (map, statistics, consumables, switches) to an entity once per
  // registry or entity-list change. Order: explicit config, then the vacuum's own device
  // by translation key, then the name heuristic for integrations without a registry match.
  _resolveEntities() {
    const hass = this._hass;
    if (!hass || !this.config) return {};
    const stateCount = Object.keys(hass.states || {}).length;
    const cache = this._entityCache;
    if (cache && cache.entities === hass.entities && cache.stateCount === stateCount && cache.config === this.config) return cache.resolved;

    const registry = hass.entities || {};
    const deviceId = this._vacuumDeviceId();
    const deviceEntries = deviceId ? Object.values(registry).filter((entry) => entry.device_id === deviceId) : [];
    const resolved = {};
    for (const [key, rule] of Object.entries(RVD_ENTITY_RULES)) {
      const configured = this.config.entities?.[key];
      if (configured && hass.states[configured]) {
        resolved[key] = configured;
        continue;
      }
      const candidates = [...deviceEntries];
      if (rule.platforms) {
        candidates.push(...Object.values(registry).filter((entry) => rule.platforms.includes(entry.platform) && !candidates.includes(entry)));
      }
      const byKey = rule.translationKeys
        .map((translationKey) => candidates.find((entry) =>
          entry.translation_key === translationKey &&
          rule.domains.includes(entry.entity_id.split(".")[0]) &&
          hass.states[entry.entity_id]))
        .find(Boolean);
      resolved[key] = byKey?.entity_id || this._entityByName(key);
    }
    this._entityCache = { entities: hass.entities, stateCount, config: this.config, resolved };
    return resolved;
  }

  _entityByName(key) {
    const rule = RVD_ENTITY_RULES[key];
    if (!rule) return null;
    const relatedCandidates = this._relatedStates().filter(([id]) => rule.domains.includes(id.split(".")[0]));
    const geometryCandidates = key === "map_geometry"
      ? Object.entries(this._hass.states).filter(([id, state]) =>
        id.startsWith("sensor.") && [1, 2].includes(Number(state.attributes?.schema_version)) && Array.isArray(state.attributes?.rooms)
      )
      : [];
    const candidates = [...relatedCandidates, ...geometryCandidates.filter(([id]) => !relatedCandidates.some(([relatedId]) => relatedId === id))];
    let best = null;
    let bestScore = 0;
    for (const [id, state] of candidates) {
      const haystack = `${id} ${state.attributes?.friendly_name || ""}`.toLowerCase();
      const score = rule.terms.reduce((total, term, index) => total + (haystack.includes(term) ? 20 - index : 0), 0);
      if (score > bestScore) { best = id; bestScore = score; }
    }
    return best;
  }

  _entity(key) {
    return this._resolveEntities()[key] || null;
  }

  _state(key) {
    const id = this._entity(key);
    return id ? this._hass.states[id] : null;
  }

  _brand() {
    const device = this._hass.devices?.[this._vacuumDeviceId()];
    const manufacturer = String(device?.manufacturer || "").trim();
    return manufacturer ? `${manufacturer.toUpperCase()} · ${this._t("kind_label")}` : this._t("kind_label");
  }

  _battery() {
    const vacuum = this._vacuum();
    const value = vacuum?.attributes?.battery_level;
    return Number.isFinite(Number(value)) ? Number(value) : null;
  }

  _maintenance(key, attribute) {
    const state = this._state(key);
    const direct = state && Number(state.state);
    if (Number.isFinite(direct)) return Math.max(0, Math.min(100, direct));
    const attr = Number(this._vacuum()?.attributes?.[attribute]);
    return Number.isFinite(attr) ? Math.max(0, Math.min(100, attr)) : null;
  }

  _formatState(state, fallback = this._t("not_available")) {
    if (!state || ["unknown", "unavailable", "none", ""].includes(String(state.state).toLowerCase())) return fallback;
    if (typeof this._hass.formatEntityState === "function") {
      try { return this._hass.formatEntityState(state); } catch (_error) { /* fall back to the raw value */ }
    }
    const unit = state.attributes?.unit_of_measurement || "";
    return `${state.state}${unit ? ` ${unit}` : ""}`;
  }

  _formatOption(state, option) {
    if (state && typeof this._hass.formatEntityState === "function") {
      try { return this._hass.formatEntityState(state, option); } catch (_error) { /* raw value below */ }
    }
    return option;
  }

  _formatFanSpeed(vacuum, value) {
    if (typeof this._hass.formatEntityAttributeValue === "function") {
      try { return this._hass.formatEntityAttributeValue(vacuum, "fan_speed", value); } catch (_error) { /* raw value below */ }
    }
    return value;
  }

  _entityPictureUrl(state) {
    const picture = state?.attributes?.entity_picture;
    if (!picture) return "";
    const url = this._hass.hassUrl(picture);
    const revision = state.last_updated || state.last_changed;
    if (!revision) return url;
    return `${url}${url.includes("?") ? "&" : "?"}rvd=${encodeURIComponent(revision)}`;
  }

  _ensureMapMetadata(state) {
    const revision = state?.state || state?.last_updated;
    if (!state || !revision || this._mapMetadata?.revision === revision || this._mapMetadataLoading === revision) return;
    this._mapMetadataLoading = revision;
    fetch(this._entityPictureUrl(state), { credentials: "same-origin" })
      .then((response) => response.ok ? response.text() : Promise.reject(new Error(`Map request failed (${response.status})`)))
      .then((source) => {
        if (this._mapMetadataLoading !== revision) return;
        const parsed = this._sanitizeMapSvg(source);
        if (parsed) this._mapMetadata = { revision, ...parsed };
      })
      .catch(() => {
        if (this._mapMetadataLoading === revision && !this._mapMetadata) this._mapMetadata = null;
      })
      .finally(() => {
        if (this._mapMetadataLoading === revision) this._mapMetadataLoading = null;
        this._queueRender();
      });
  }

  _sanitizeMapSvg(source) {
    const document = new DOMParser().parseFromString(source, "image/svg+xml");
    const root = document.documentElement;
    if (root.localName !== "svg" || document.querySelector("parsererror")) return null;
    const safeReference = (value) => value.startsWith("#") || /^data:image\/(?:png|jpe?g|gif|webp);base64,/i.test(value);
    const sanitizeCssUrls = (value) => value.replace(/url\s*\(\s*(["']?)([^)'"\s]+)\1\s*\)/gi,
      (match, _quote, reference) => safeReference(reference) ? match : "none");
    [...document.querySelectorAll("*")].forEach((element) => {
      const svgElement = element.namespaceURI === "http://www.w3.org/2000/svg" && RVD_SVG_ELEMENTS.has(element.localName.toLowerCase());
      if (element !== root && !svgElement) element.remove();
    });
    document.querySelectorAll("style").forEach((element) => {
      element.textContent = sanitizeCssUrls(element.textContent
        .replace(/@import\s+(?:url\s*\()?[^;]+;?/gi, "")
        .replace(/expression\s*\(/gi, "none("));
    });
    [root, ...document.querySelectorAll("*")].forEach((element) => {
      [...element.attributes].forEach((attribute) => {
        const name = attribute.name.toLowerCase();
        const value = attribute.value.trim();
        if (!RVD_SVG_ATTRIBUTES.has(name)) {
          element.removeAttribute(attribute.name);
          return;
        }
        if ((name === "href" || name === "xlink:href") && !safeReference(value)) {
          element.removeAttribute(attribute.name);
          return;
        }
        if (/url\s*\(/i.test(value)) element.setAttribute(attribute.name, sanitizeCssUrls(value));
      });
    });
    root.removeAttribute("width");
    root.removeAttribute("height");
    root.setAttribute("preserveAspectRatio", "xMidYMid meet");
    root.setAttribute("class", `${root.getAttribute("class") || ""} rvd-native-svg`.trim());
    const viewBox = (root.getAttribute("viewBox") || "").trim().split(/[ ,]+/).map(Number);
    if (viewBox.length !== 4 || !viewBox.every(Number.isFinite)) return null;
    return { viewBox, source: new XMLSerializer().serializeToString(root) };
  }

  _normalizeRoomName(value) {
    return String(value || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]/g, "");
  }

  _areaDisplayName(area) {
    if (!area?.id) return area?.name || "";
    const registry = this._hass.areas;
    const entry = Array.isArray(registry)
      ? registry.find((candidate) => (candidate.area_id || candidate.id) === area.id)
      : registry?.[area.id];
    return entry?.name || area.name || area.id;
  }

  _supportsCleanArea() {
    return (Number(this._vacuum()?.attributes?.supported_features) & RVD_VACUUM_FEATURE_CLEAN_AREA) !== 0;
  }

  // Reads Home Assistant's own room-to-area link for this vacuum (entity settings).
  _areaMappingFor() {
    const entityId = this.config.entity;
    if (this._areaMapping?.entity === entityId) return this._areaMapping.mapping;
    if (this._areaMappingLoading === entityId || typeof this._hass.callWS !== "function") return null;
    this._areaMappingLoading = entityId;
    this._hass.callWS({ type: "config/entity_registry/get", entity_id: entityId })
      .then((entry) => {
        const mapping = entry?.options?.vacuum?.area_mapping;
        this._areaMapping = { entity: entityId, mapping: mapping && typeof mapping === "object" ? mapping : null };
      })
      .catch(() => { this._areaMapping = { entity: entityId, mapping: null }; })
      .finally(() => {
        this._areaMappingLoading = null;
        this._queueRender();
      });
    return null;
  }

  _cleaningAreas() {
    const mapping = this._areaMappingFor();
    if (mapping && Object.keys(mapping).length) {
      return Object.entries(mapping).map(([areaId, segments]) => {
        const area = Array.isArray(this._hass.areas) ? null : this._hass.areas?.[areaId];
        return {
          id: areaId,
          name: this._areaDisplayName({ id: areaId }),
          icon: area?.icon || "mdi:floor-plan",
          segments: (Array.isArray(segments) ? segments : [segments]).map(String),
        };
      });
    }
    return Array.isArray(this.config.cleaning_areas) ? this.config.cleaning_areas : [];
  }

  _vacuumPointToMap(point, rotation) {
    const x = Number(point?.[0]) / 50;
    const y = Number(point?.[1]) / 50;
    if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
    if (rotation === 90) return [y, x];
    if (rotation === 180) return [-x, y];
    if (rotation === 270) return [-y, -x];
    return [x, -y];
  }

  _roomRenderData(vacuum) {
    const geometry = this._state("map_geometry");
    const rooms = geometry?.attributes?.rooms;
    const viewBox = this._mapMetadata?.viewBox;
    if (!Array.isArray(rooms) || !rooms.length || !viewBox) return null;

    const rotation = Number(geometry.attributes?.rotation || 0);
    const vacuumRooms = vacuum.attributes?.rooms || {};
    const segmentNames = new Map();
    for (const [name, value] of Object.entries(vacuumRooms)) {
      for (const id of Array.isArray(value) ? value : [value]) segmentNames.set(String(id), name);
    }
    const areas = this._cleaningAreas();
    const palette = ["#e7c980", "#98cfa3", "#e2a5a5", "#a9b9ed", "#d6b0df", "#8ecfd7", "#e9bb86"];
    const renderedRooms = [];

    rooms.forEach((room, index) => {
      const points = (room.coordinates || []).map((point) => this._vacuumPointToMap(point, rotation)).filter(Boolean);
      if (points.length < 3) return;
      const ecovacsName = segmentNames.get(String(room.id)) || room.name;
      const normalizedNames = [room.name, ecovacsName].map((name) => this._normalizeRoomName(name));
      const area = areas.find((candidate) => candidate.segments?.includes(String(room.id))) ||
        areas.find((candidate) => !candidate.segments &&
          [candidate.name, candidate.id].some((value) => normalizedNames.includes(this._normalizeRoomName(value))));
      const selected = Boolean(area && this._selectedAreas.has(area.id));
      const displayName = area ? this._areaDisplayName(area) : room.name;
      const path = `${points.map(([x, y], pointIndex) => `${pointIndex ? "L" : "M"}${x} ${y}`).join(" ")} Z`;
      const center = points.reduce((total, [x, y]) => [total[0] + x, total[1] + y], [0, 0]).map((value) => value / points.length);
      const color = palette[index % palette.length];
      renderedRooms.push({ id: area?.id || "", path, center, color, selected, displayName });
    });

    if (!renderedRooms.length) return null;
    const signature = JSON.stringify([
      this._mapMetadata.revision,
      rotation,
      renderedRooms.map((room) => [room.id, room.path, room.displayName, room.selected]),
    ]);
    return { rooms: renderedRooms, signature, viewBox };
  }

  _roomOverlay(vacuum) {
    const data = this._roomRenderData(vacuum);
    if (!data) return "";
    const paths = data.rooms.flatMap((room) => [
      `<path class="room-shape ${room.selected ? "selected" : ""}" d="${rvdEscape(room.path)}" fill="${rvdEscape(room.color)}" data-map-area-id="${rvdEscape(room.id)}"${room.id ? ` tabindex="0" role="button" aria-pressed="${room.selected}" aria-label="${rvdEscape(room.displayName)}"` : ""}><title>${rvdEscape(room.displayName)}</title></path>`,
      `<text class="room-label" x="${room.center[0]}" y="${room.center[1]}">${rvdEscape(room.displayName)}</text>`,
    ]);
    return `<svg class="room-overlay" viewBox="${data.viewBox.join(" ")}" preserveAspectRatio="xMidYMid meet">${paths.join("")}</svg>`;
  }

  _nativeMapMarkup(vacuum) {
    if (this.config.map_render_mode === "image" || !this._mapMetadata?.source) return "";
    const document = new DOMParser().parseFromString(this._mapMetadata.source, "image/svg+xml");
    const root = document.documentElement;
    const data = this._roomRenderData(vacuum);
    if (root.localName !== "svg" || !data) return "";
    const namespace = "http://www.w3.org/2000/svg";
    const fillGroup = document.createElementNS(namespace, "g");
    fillGroup.setAttribute("class", "rvd-room-fills");
    const interactionGroup = document.createElementNS(namespace, "g");
    interactionGroup.setAttribute("class", "rvd-room-interactions");

    data.rooms.forEach((room) => {
      const fill = document.createElementNS(namespace, "path");
      fill.setAttribute("class", `rvd-room-fill${room.selected ? " selected" : ""}`);
      fill.setAttribute("d", room.path);
      fill.setAttribute("fill", room.color);
      fillGroup.append(fill);

      const hit = document.createElementNS(namespace, "path");
      hit.setAttribute("class", "rvd-room-hit");
      hit.setAttribute("d", room.path);
      hit.setAttribute("data-map-area-id", room.id);
      if (room.id) {
        hit.setAttribute("tabindex", "0");
        hit.setAttribute("role", "button");
        hit.setAttribute("aria-pressed", String(room.selected));
        hit.setAttribute("aria-label", room.displayName);
      }
      const title = document.createElementNS(namespace, "title");
      title.textContent = room.displayName;
      hit.append(title);
      interactionGroup.append(hit);

      const label = document.createElementNS(namespace, "text");
      label.setAttribute("class", "room-label rvd-room-label");
      label.setAttribute("x", room.center[0]);
      label.setAttribute("y", room.center[1]);
      label.textContent = room.displayName;
      interactionGroup.append(label);
    });

    const nativeLayers = [...root.children];
    const liveLayer = nativeLayers.find((element) =>
      (element.localName === "path" && String(element.getAttribute("stroke")).toLowerCase() === "#fff") ||
      (element.localName === "use" && ["#d", "#c"].includes(element.getAttribute("href") || element.getAttribute("xlink:href")))
    );
    root.insertBefore(fillGroup, liveLayer || null);
    root.append(interactionGroup);
    const svg = new XMLSerializer().serializeToString(root);
    return `<div class="map-native" data-map-revision="${rvdEscape(this._mapMetadata.revision)}" data-overlay-signature="${rvdEscape(data.signature)}">${svg}</div>`;
  }

  _icon(name) {
    return `<ha-icon icon="${rvdEscape(RVD_ICONS[name] || "mdi:circle-small")}"></ha-icon>`;
  }

  // Re-rendering replaces the shadow DOM, which would close an open dropdown or drop
  // focus from a field. Wait until the user leaves the field.
  _focusedFormControl() {
    const active = this.shadowRoot.activeElement;
    return active && ["SELECT", "INPUT", "TEXTAREA"].includes(active.tagName) ? active : null;
  }

  _render() {
    const focused = this._focusedFormControl();
    if (focused) {
      if (!this._renderDeferred) {
        this._renderDeferred = true;
        focused.addEventListener("blur", () => {
          this._renderDeferred = false;
          this._queueRender();
        }, { once: true });
      }
      return;
    }
    const vacuum = this._vacuum();
    if (!vacuum) {
      this.shadowRoot.innerHTML = `${this._styleMarkup}<ha-card><div class="missing">${rvdEscape(this._t("entity_not_found", { entity: this.config.entity }))}</div></ha-card>`;
      return;
    }
    const existingMapImage = this.shadowRoot.querySelector(".map-visual .map");
    const existingNativeMap = this.shadowRoot.querySelector(".map-native");
    this.shadowRoot.innerHTML = `
      ${this._styleMarkup}
      <ha-card>
        ${this._header(vacuum)}
        <nav role="tablist" aria-label="${rvdEscape(this._t("sections"))}">
          ${this._navButton("overview", this._t("tab_overview"))}
          ${this._navButton("details", this._t("tab_details"))}
          ${this._navButton("settings", this._t("tab_settings"))}
        </nav>
        <main role="tabpanel">${this._tab === "overview" ? this._overview(vacuum) : this._tab === "details" ? this._details() : this._settings()}</main>
        <footer>Robot Vacuum Dashboard · v${ROBOT_VACUUM_DASHBOARD_VERSION}</footer>
      </ha-card>`;
    const nextMapImage = this.shadowRoot.querySelector(".map-visual .map");
    if (existingMapImage && nextMapImage) {
      const nextSource = nextMapImage.getAttribute("src");
      nextMapImage.replaceWith(existingMapImage);
      if (nextSource && existingMapImage.getAttribute("src") !== nextSource) this._preloadMapSource(nextSource);
    }
    const nextNativeMap = this.shadowRoot.querySelector(".map-native");
    if (existingNativeMap && nextNativeMap &&
      existingNativeMap.dataset.mapRevision === nextNativeMap.dataset.mapRevision &&
      existingNativeMap.dataset.overlaySignature === nextNativeMap.dataset.overlaySignature) {
      nextNativeMap.replaceWith(existingNativeMap);
    }
    this._bindEvents();
  }

  _preloadMapSource(source) {
    if (!source || this._pendingMapSource === source) return;
    this._pendingMapSource = source;
    const preload = new Image();
    preload.className = "map";
    preload.alt = this._t("map_alt");
    preload.addEventListener("load", () => {
      if (this._pendingMapSource !== source) return;
      const visibleMap = this.shadowRoot.querySelector(".map-visual .map");
      if (visibleMap) visibleMap.replaceWith(preload);
      this._pendingMapSource = null;
    }, { once: true });
    preload.addEventListener("error", () => {
      if (this._pendingMapSource === source) this._pendingMapSource = null;
    }, { once: true });
    preload.src = source;
  }

  _header(vacuum) {
    const state = vacuum.state;
    const battery = this._battery();
    const error = state === "error" || Boolean(vacuum.attributes?.error && !["None", "no_error"].includes(vacuum.attributes.error));
    const batteryLabel = `${this._t("battery_level")}: ${battery === null ? "–" : `${battery}%`}`;
    return `<header class="hero ${error ? "hero-error" : ""}">
      <div class="robot ${state === "cleaning" ? "working" : ""}"><ha-icon icon="mdi:robot-vacuum-variant"></ha-icon></div>
      <div class="hero-copy">
        <div class="eyebrow">${rvdEscape(this._brand())}</div>
        <h1>${rvdEscape((this.config.name ?? this._t("default_name")) || vacuum.attributes?.friendly_name || this._t("default_name"))}</h1>
        <p><span class="status-dot ${rvdEscape(state)}"></span>${rvdEscape(this._stateLabel(state))}</p>
      </div>
      <div class="battery" role="img" aria-label="${rvdEscape(batteryLabel)}" title="${rvdEscape(batteryLabel)}">
        <span>${this._icon("battery")}</span><strong>${battery ?? "–"}</strong><small>${battery === null ? "" : "%"}</small>
        <div class="battery-track"><i style="width:${battery ?? 0}%"></i></div>
      </div>
    </header>`;
  }

  _navButton(tab, label) {
    const active = this._tab === tab;
    return `<button class="nav-button ${active ? "active" : ""}" role="tab" aria-selected="${active}" data-tab="${tab}">${rvdEscape(label)}</button>`;
  }

  _overview(vacuum) {
    const map = this._state("map");
    this._ensureMapMetadata(map);
    const mapUrl = this._entityPictureUrl(map);
    const nativeMap = this._nativeMapMarkup(vacuum);
    const roomOverlay = nativeMap ? "" : this._roomOverlay(vacuum);
    const error = this._state("error");
    const fanSpeed = vacuum.attributes?.fan_speed;
    return `
      ${vacuum.state === "error" || (error && !["0", "none", "no error"].includes(error.state.toLowerCase())) ? `<div class="alert" role="alert"><ha-icon icon="mdi:alert-circle"></ha-icon><div><strong>${rvdEscape(this._t("attention_needed"))}</strong><span>${rvdEscape(error?.attributes?.description || error?.state || vacuum.attributes?.error || this._t("check_robot"))}</span></div></div>` : ""}
      <section class="actions">
        ${this._actionButton("vacuum.start", "play", this._t("action_start"), "primary")}
        ${this._actionButton("vacuum.pause", "pause", this._t("action_pause"))}
        ${this._actionButton("vacuum.stop", "stop", this._t("action_stop"))}
        ${this._actionButton("vacuum.return_to_base", "home", this._t("action_home"))}
        ${this._actionButton("vacuum.locate", "locate", this._t("action_locate"))}
      </section>
      <div class="dashboard-grid ${!this.config.show_map ? "without-map" : ""}">
        ${this.config.show_map ? `<section class="panel map-panel ${vacuum.state === "cleaning" ? "is-cleaning" : ""}">
          <div class="panel-heading map-heading"><div><span class="kicker">${rvdEscape(this._t("kicker_live_map"))}</span><h2>${rvdEscape(vacuum.state === "cleaning" ? this._t("map_heading_cleaning") : this._t("map_heading_idle"))}</h2></div>${map ? `<button class="map-detail" data-more-info="${rvdEscape(map.entity_id)}" title="${rvdEscape(this._t("map_details"))}" aria-label="${rvdEscape(this._t("map_details"))}"><ha-icon icon="mdi:dots-horizontal"></ha-icon></button>` : ""}</div>
          <div class="map-stage">
            <div class="session-card"><div class="session-state"><i></i><span>${rvdEscape(this._stateLabel(vacuum.state))}</span></div><div><b><ha-icon icon="mdi:texture-box"></ha-icon>${rvdEscape(this._formatState(this._state("cleaning_area"), "–"))}</b><b><ha-icon icon="mdi:clock-outline"></ha-icon>${rvdEscape(this._formatState(this._state("cleaning_time"), "–"))}</b></div></div>
            ${nativeMap || (mapUrl ? `<div class="map-visual"><img class="map" src="${rvdEscape(mapUrl)}" alt="${rvdEscape(this._t("map_alt"))}">${roomOverlay}</div>` : `<div class="empty map-empty"><ha-icon icon="mdi:map-outline"></ha-icon><strong>${rvdEscape(this._t("no_map"))}</strong><span>${rvdEscape(this._t("no_map_help"))}</span></div>`)}
          </div>
          ${this._cleaningModePanel()}
        </section>` : ""}
        <section class="panel stats-panel">
          <div class="panel-heading"><div><span class="kicker">${rvdEscape(this._t("kicker_current"))}</span><h2>${rvdEscape(this._t("last_clean"))}</h2></div></div>
          <div class="metric-grid">
            ${this._metric("area", this._t("metric_area"), this._formatState(this._state("cleaning_area")))}
            ${this._metric("time", this._t("metric_duration"), this._formatState(this._state("cleaning_time")))}
            ${this._metric("mop", this._t("metric_mop"), this._state("mop_attached")?.state === "on" ? this._t("mop_attached") : this._t("mop_not_attached"))}
            ${this._metric("suction", this._t("metric_suction"), fanSpeed ? this._formatFanSpeed(vacuum, fanSpeed) : this._t("suction_default"))}
          </div>
          ${this._controls(vacuum)}
        </section>
      </div>
      ${this.config.show_details ? `<section class="panel totals">
        <div class="panel-heading"><div><span class="kicker">${rvdEscape(this._t("kicker_history"))}</span><h2>${rvdEscape(this._t("all_cleanings"))}</h2></div></div>
        <div class="total-grid">
          ${this._total("mdi:counter", this._t("total_cleanings"), this._formatState(this._state("total_cleanings")))}
          ${this._total("mdi:texture-box", this._t("total_area"), this._formatState(this._state("total_area")))}
          ${this._total("mdi:timer-outline", this._t("total_time"), this._formatState(this._state("total_time")))}
        </div>
      </section>
      ${this._maintenancePanel()}` : ""}`;
  }

  _cleaningModePanel() {
    const areas = this._cleaningAreas();
    const regions = Array.isArray(this.config.cleaning_regions) ? this.config.cleaning_regions : [];
    const areaHelp = this._supportsCleanArea() && !Object.keys(this._areaMapping?.mapping || {}).length && !areas.length
      ? this._t("area_mapping_hint")
      : this._t("areas_help");
    const modeContent = this._cleanMode === "area"
      ? (areas.length ? `<div class="target-grid">${areas.map((area) => `<button class="target-chip ${this._selectedAreas.has(area.id) ? "selected" : ""}" aria-pressed="${this._selectedAreas.has(area.id)}" data-area-id="${rvdEscape(area.id)}"><ha-icon icon="${rvdEscape(area.icon || "mdi:floor-plan")}"></ha-icon><span>${rvdEscape(this._areaDisplayName(area))}</span></button>`).join("")}</div>` : `<p class="target-help">${rvdEscape(areaHelp)}</p>`)
      : this._cleanMode === "custom"
        ? (regions.length ? `<div class="target-grid">${regions.map((region, index) => `<button class="target-chip ${this._selectedRegion === index ? "selected" : ""}" aria-pressed="${this._selectedRegion === index}" data-region-index="${index}"><ha-icon icon="${rvdEscape(region.icon || "mdi:vector-rectangle")}"></ha-icon><span>${rvdEscape(region.name || this._t("zone_name", { number: index + 1 }))}</span></button>`).join("")}</div>` : `<p class="target-help">${rvdEscape(this._t("regions_help"))}</p>`)
        : `<p class="target-help">${rvdEscape(this._t("auto_help"))}</p>`;
    const disabled = (this._cleanMode === "area" && !this._selectedAreas.size) || (this._cleanMode === "custom" && this._selectedRegion === null);
    const actionLabel = this._cleanMode === "area" ? this._t("clean_selected_rooms") : this._cleanMode === "custom" ? this._t("clean_selected_zone") : this._t("start_full_clean");
    const modeTab = (mode, label) => `<button class="${this._cleanMode === mode ? "active" : ""}" role="tab" aria-selected="${this._cleanMode === mode}" data-clean-mode="${mode}">${rvdEscape(label)}</button>`;
    return `<div class="cleaning-console"><div class="mode-tabs" role="tablist" aria-label="${rvdEscape(this._t("cleaning_modes"))}">${modeTab("area", this._t("mode_area"))}${modeTab("auto", this._t("mode_auto"))}${modeTab("custom", this._t("mode_custom"))}</div><div class="target-content">${modeContent}</div><div class="clean-action"><button class="clean-start" data-clean-start ${disabled ? "disabled" : ""} title="${rvdEscape(actionLabel)}" aria-label="${rvdEscape(actionLabel)}"><ha-icon icon="mdi:robot-vacuum"></ha-icon></button><span aria-hidden="true">${rvdEscape(actionLabel)}</span></div></div>`;
  }

  _notify(message) {
    this.dispatchEvent(new CustomEvent("hass-notification", { detail: { message }, bubbles: true, composed: true }));
  }

  async _callService(domain, service, data = {}, target = { entity_id: this.config.entity }) {
    try {
      await this._hass.callService(domain, service, data, target);
      return true;
    } catch (error) {
      this._notify(this._t("action_failed", { error: error?.message || String(error) }));
      return false;
    }
  }

  async _startTargetedCleaning() {
    if (this._cleanMode === "auto") return this._call("vacuum.start");
    if (this._cleanMode === "area") {
      const ids = [...this._selectedAreas];
      if (!ids.length) return;
      if (this.config.confirm_actions && !window.confirm(this._t(ids.length === 1 ? "confirm_rooms_one" : "confirm_rooms_other", { count: ids.length }))) return;
      await this._callService("vacuum", "clean_area", { cleaning_area_id: ids });
      return;
    }
    const region = this.config.cleaning_regions?.[this._selectedRegion];
    if (!region?.coordinates) return;
    if (this.config.confirm_actions && !window.confirm(this._t("confirm_zone", { name: region.name || this._t("custom_zone") }))) return;
    const cleanCountState = this._state("clean_count");
    const cleanings = Number(cleanCountState?.state || region.cleanings || 1);
    const coordinates = Array.isArray(region.coordinates) ? region.coordinates.join(",") : String(region.coordinates);
    await this._callService("vacuum", "send_command", {
      command: region.command || this.config.region_command || "custom_area",
      params: { coordinates, cleanings },
    });
  }

  _actionButton(service, icon, label, kind = "") {
    return `<button class="action ${kind}" data-service="${rvdEscape(service)}"><span>${this._icon(icon)}</span><b>${rvdEscape(label)}</b></button>`;
  }

  _metric(icon, label, value) {
    return `<div class="metric"><span class="metric-icon">${this._icon(icon)}</span><div><small>${rvdEscape(label)}</small><strong>${rvdEscape(value)}</strong></div></div>`;
  }

  _total(icon, label, value) {
    return `<div class="total"><ha-icon icon="${rvdEscape(icon)}"></ha-icon><div><small>${rvdEscape(label)}</small><strong>${rvdEscape(value)}</strong></div></div>`;
  }

  _controls(vacuum) {
    const fanSpeeds = vacuum.attributes?.fan_speed_list || [];
    const selects = [
      fanSpeeds.length ? {
        label: this._t("metric_suction"), type: "fan", value: vacuum.attributes?.fan_speed,
        options: fanSpeeds.map((option) => [option, this._formatFanSpeed(vacuum, option)]),
      } : null,
      this._selectControl("work_mode", this._t("control_work_mode")),
      this._selectControl("water_level", this._t("control_water_level")),
    ].filter(Boolean);
    if (!selects.length) return "";
    return `<div class="control-list">${selects.map((item) => `<label><span>${rvdEscape(item.label)}</span><select data-control="${item.type}" data-entity="${rvdEscape(item.entity || "")}">${item.options.map(([value, label]) => `<option value="${rvdEscape(value)}" ${String(value) === String(item.value) ? "selected" : ""}>${rvdEscape(label)}</option>`).join("")}</select></label>`).join("")}</div>`;
  }

  _selectControl(key, label) {
    const entity = this._entity(key);
    const state = entity && this._hass.states[entity];
    if (!state || !entity.startsWith("select.")) return null;
    const options = (state.attributes?.options || []).map((option) => [option, this._formatOption(state, option)]);
    return { label, type: "select", entity, value: state.state, options };
  }

  _maintenancePanel() {
    const items = [
      [this._t("main_brush"), this._maintenance("main_brush", "component_brush")],
      [this._t("side_brush"), this._maintenance("side_brush", "component_side_brush")],
      [this._t("filter"), this._maintenance("filter", "component_filter")],
    ];
    return `<section class="panel maintenance"><div class="panel-heading"><div><span class="kicker">${rvdEscape(this._t("kicker_maintenance"))}</span><h2>${rvdEscape(this._t("parts"))}</h2></div></div><div class="maintenance-grid">${items.map(([label, value]) => `<div class="life"><div class="ring" role="img" aria-label="${rvdEscape(`${label}: ${value === null ? "–" : `${value}%`}`)}" style="--value:${value ?? 0};--ring:${value === null ? "var(--muted)" : value <= 15 ? "var(--danger)" : value <= 35 ? "var(--warning)" : "var(--accent)"}"><span>${value === null ? "–" : `${value}%`}</span></div><strong>${rvdEscape(label)}</strong><small>${rvdEscape(value === null ? this._t("no_data") : value <= 15 ? this._t("replace") : value <= 35 ? this._t("check_soon") : this._t("in_order"))}</small></div>`).join("")}</div></section>`;
  }

  // Entities shown on the "All data" tab: the vacuum's own device when the entity
  // registry is available, otherwise the name-based guess.
  _detailStates() {
    const deviceId = this._vacuumDeviceId();
    if (!deviceId) return this._relatedStates();
    const ids = new Set(Object.values(this._hass.entities)
      .filter((entry) => entry.device_id === deviceId && !entry.hidden)
      .map((entry) => entry.entity_id));
    ids.add(this.config.entity);
    const geometry = this._entity("map_geometry");
    if (geometry) ids.add(geometry);
    return [...ids].filter((id) => this._hass.states[id]).map((id) => [id, this._hass.states[id]]);
  }

  _details() {
    const states = this._detailStates().sort(([a], [b]) => a.localeCompare(b));
    return `<section class="panel data-panel"><div class="panel-heading"><div><span class="kicker">${rvdEscape(this._t("kicker_diagnostics"))}</span><h2>${rvdEscape(this._t("all_linked_data"))}</h2></div><span class="count">${rvdEscape(this._t("entity_count", { count: states.length }))}</span></div><div class="entity-list">${states.map(([id, state]) => `<button class="entity-row" data-more-info="${rvdEscape(id)}"><ha-icon icon="${rvdEscape(state.attributes?.icon || this._domainIcon(id))}"></ha-icon><span><strong>${rvdEscape(state.attributes?.friendly_name || id)}</strong><small>${rvdEscape(id)}</small></span><b>${rvdEscape(this._formatState(state))}</b></button>`).join("")}</div></section>`;
  }

  _settings() {
    const toggles = [
      ["continuous_cleaning", this._t("setting_continuous"), "mdi:battery-sync"],
      ["carpet_boost", this._t("setting_carpet"), "mdi:rug"],
      ["advanced_mode", this._t("setting_advanced"), "mdi:tune-variant"],
    ];
    const available = toggles.map(([key, label, icon]) => [this._entity(key), label, icon]).filter(([id]) => id);
    return `<div class="settings-grid"><section class="panel"><div class="panel-heading"><div><span class="kicker">${rvdEscape(this._t("kicker_robot"))}</span><h2>${rvdEscape(this._t("smart_behaviour"))}</h2></div></div>${available.length ? `<div class="switch-list">${available.map(([id, label, icon]) => { const on = this._hass.states[id]?.state === "on"; return `<button class="switch-row" role="switch" aria-checked="${on}" data-toggle="${rvdEscape(id)}"><ha-icon icon="${rvdEscape(icon)}"></ha-icon><span>${rvdEscape(label)}</span><i class="toggle ${on ? "on" : ""}"></i></button>`; }).join("")}</div>` : `<div class="empty compact"><span>${rvdEscape(this._t("no_switches"))}</span></div>`}</section><section class="panel"><div class="panel-heading"><div><span class="kicker">${rvdEscape(this._t("kicker_map"))}</span><h2>${rvdEscape(this._t("configuration"))}</h2></div></div><div class="config-summary"><p><span>${rvdEscape(this._t("config_vacuum"))}</span><strong>${rvdEscape(this.config.entity)}</strong></p><p><span>${rvdEscape(this._t("config_map"))}</span><strong>${rvdEscape(this._entity("map") || this._t("not_linked"))}</strong></p><p><span>${rvdEscape(this._t("config_confirm"))}</span><strong>${rvdEscape(this.config.confirm_actions ? this._t("on") : this._t("off"))}</strong></p></div><p class="hint">${rvdEscape(this._t("settings_hint"))}</p></section></div>`;
  }

  _domainIcon(id) {
    const domain = id.split(".")[0];
    return ({ vacuum: "mdi:robot-vacuum", sensor: "mdi:eye-outline", binary_sensor: "mdi:checkbox-marked-circle-outline", switch: "mdi:toggle-switch-outline", select: "mdi:format-list-bulleted", number: "mdi:numeric", image: "mdi:image-outline", camera: "mdi:camera-outline", button: "mdi:gesture-tap-button" })[domain] || "mdi:circle-outline";
  }

  async _call(serviceName) {
    const [domain, service] = serviceName.split(".");
    if (this.config.confirm_actions && ["start", "stop", "return_to_base"].includes(service)) {
      const keys = { start: "confirm_start", stop: "confirm_stop", return_to_base: "confirm_return" };
      if (!window.confirm(this._t(keys[service]))) return;
    }
    await this._callService(domain, service);
  }

  _moreInfo(entityId) {
    const event = new Event("hass-more-info", { bubbles: true, composed: true });
    event.detail = { entityId };
    this.dispatchEvent(event);
  }

  _toggleArea(id) {
    if (!id) return;
    this._cleanMode = "area";
    if (this._selectedAreas.has(id)) this._selectedAreas.delete(id); else this._selectedAreas.add(id);
    this._render();
    const escaped = globalThis.CSS?.escape ? CSS.escape(id) : id.replace(/["\\]/g, "\\$&");
    this.shadowRoot.querySelector(`[data-map-area-id="${escaped}"][tabindex]`)?.focus();
  }

  _bindEvents() {
    const all = (selector) => this.shadowRoot.querySelectorAll(selector);
    all("[data-tab]").forEach((button) => button.addEventListener("click", () => { this._tab = button.dataset.tab; this._render(); }));
    all("[data-service]").forEach((button) => button.addEventListener("click", () => this._call(button.dataset.service)));
    all("[data-more-info]").forEach((button) => button.addEventListener("click", () => this._moreInfo(button.dataset.moreInfo)));
    all("[data-clean-mode]").forEach((button) => button.addEventListener("click", () => { this._cleanMode = button.dataset.cleanMode; this._render(); }));
    all("[data-area-id]").forEach((button) => button.addEventListener("click", () => { const id = button.dataset.areaId; this._selectedAreas.has(id) ? this._selectedAreas.delete(id) : this._selectedAreas.add(id); this._render(); }));
    all("[data-map-area-id]").forEach((shape) => {
      shape.addEventListener("click", () => this._toggleArea(shape.dataset.mapAreaId));
      shape.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        this._toggleArea(shape.dataset.mapAreaId);
      });
    });
    all("[data-region-index]").forEach((button) => button.addEventListener("click", () => { this._selectedRegion = Number(button.dataset.regionIndex); this._render(); }));
    this.shadowRoot.querySelector("[data-clean-start]")?.addEventListener("click", () => this._startTargetedCleaning());
    all("[data-toggle]").forEach((button) => button.addEventListener("click", async () => {
      const id = button.dataset.toggle;
      await this._callService("switch", this._hass.states[id]?.state === "on" ? "turn_off" : "turn_on", {}, { entity_id: id });
    }));
    all("select[data-control]").forEach((select) => select.addEventListener("change", async () => {
      if (select.dataset.control === "fan") await this._callService("vacuum", "set_fan_speed", { fan_speed: select.value });
      else await this._callService("select", "select_option", { option: select.value }, { entity_id: select.dataset.entity });
      select.blur();
    }));
  }

  _styles() {
    return `
      :host{--accent:var(--primary-color,#138d88);--accent-2:#2786c7;--ink:var(--primary-text-color,#17212b);--muted:var(--secondary-text-color,#6c7782);--surface:var(--ha-card-background,var(--card-background-color,#fff));--soft:color-mix(in srgb,var(--accent) 8%,var(--surface));--line:color-mix(in srgb,var(--ink) 10%,transparent);--danger:var(--error-color,#d84b4b);--warning:#e9a23b;display:block}*{box-sizing:border-box}ha-card{overflow:hidden;border-radius:28px;background:var(--surface);color:var(--ink);font-family:var(--paper-font-body1_-_font-family,system-ui,sans-serif)}button,select{font:inherit;color:inherit}.hero{min-height:156px;padding:30px 34px;display:flex;align-items:center;gap:22px;background:radial-gradient(circle at 85% 15%,color-mix(in srgb,var(--accent-2) 20%,transparent),transparent 42%),linear-gradient(135deg,color-mix(in srgb,var(--accent) 16%,var(--surface)),color-mix(in srgb,var(--accent-2) 8%,var(--surface)))}.hero-error{background:linear-gradient(135deg,color-mix(in srgb,var(--danger) 15%,var(--surface)),var(--surface))}.robot{width:82px;height:82px;border-radius:50%;display:grid;place-items:center;background:var(--surface);box-shadow:0 12px 30px color-mix(in srgb,var(--ink) 14%,transparent);border:1px solid var(--line)}.robot ha-icon{--mdc-icon-size:48px;color:var(--accent)}.robot.working{animation:rvdPulse 2s infinite}.hero-copy{min-width:0;flex:1}.eyebrow,.kicker{font-size:10px;letter-spacing:.16em;font-weight:800;color:var(--accent)}h1,h2,p{margin:0}h1{font-size:clamp(25px,4vw,38px);line-height:1.12;margin:5px 0 8px}.hero p{display:flex;align-items:center;gap:8px;color:var(--muted);font-weight:600}.status-dot{width:9px;height:9px;border-radius:50%;background:var(--muted)}.status-dot.cleaning{background:var(--accent);box-shadow:0 0 0 5px color-mix(in srgb,var(--accent) 14%,transparent)}.status-dot.error{background:var(--danger)}.status-dot.docked{background:#47a760}.battery{text-align:right;min-width:90px}.battery>span{color:var(--accent)}.battery strong{font-size:30px}.battery small{font-weight:700}.battery-track{width:88px;height:5px;background:var(--line);border-radius:4px;margin-top:6px;overflow:hidden}.battery-track i{display:block;height:100%;background:linear-gradient(90deg,var(--accent-2),var(--accent));border-radius:4px}nav{display:flex;padding:0 26px;border-bottom:1px solid var(--line);gap:22px}.nav-button{border:0;background:none;padding:17px 3px 14px;color:var(--muted);font-weight:700;cursor:pointer;border-bottom:3px solid transparent}.nav-button.active{color:var(--accent);border-color:var(--accent)}main{padding:26px;background:color-mix(in srgb,var(--surface) 97%,var(--ink))}.actions{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:18px}.action{border:1px solid var(--line);background:var(--surface);border-radius:17px;padding:13px 8px;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;transition:.18s}.action:hover{transform:translateY(-2px);border-color:color-mix(in srgb,var(--accent) 50%,var(--line));box-shadow:0 8px 20px color-mix(in srgb,var(--ink) 8%,transparent)}.action span{color:var(--accent);font-size:18px}.action.primary{background:var(--accent);color:white;border-color:var(--accent)}.action.primary span{color:white}.dashboard-grid{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(280px,.65fr);gap:18px}.dashboard-grid.without-map{grid-template-columns:1fr}.panel{background:var(--surface);border:1px solid var(--line);border-radius:22px;padding:20px;min-width:0}.panel-heading{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}.panel-heading h2{font-size:19px;margin-top:2px}.text-button{border:0;background:var(--soft);color:var(--accent);padding:7px 11px;border-radius:10px;cursor:pointer;font-weight:700}.map-panel{min-height:410px;display:flex;flex-direction:column}.map-stage{position:relative;min-height:390px;overflow:hidden;border-radius:17px;border:1px solid var(--line);background-color:#fbfcfd;background-image:linear-gradient(rgba(64,116,150,.075) 1px,transparent 1px),linear-gradient(90deg,rgba(64,116,150,.075) 1px,transparent 1px),linear-gradient(rgba(64,116,150,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(64,116,150,.035) 1px,transparent 1px);background-size:24px 24px,24px 24px,6px 6px,6px 6px}.map{width:100%;height:100%;min-height:390px;object-fit:contain;padding:70px 16px 12px;filter:drop-shadow(0 4px 6px rgba(24,88,128,.14));mix-blend-mode:multiply}.session-card{position:absolute;z-index:2;top:14px;left:14px;right:14px;padding:11px 14px;border-radius:14px;background:color-mix(in srgb,var(--surface) 94%,transparent);box-shadow:0 8px 24px rgba(25,57,75,.12);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:space-between;gap:12px}.session-card>span{font-weight:750}.session-card>div{display:flex;gap:16px;color:#0877bd}.session-card b{font-size:14px}.map-empty{min-height:390px;background:transparent}.cleaning-console{padding-top:14px}.mode-tabs{display:grid;grid-template-columns:repeat(3,1fr);border-bottom:1px solid var(--line)}.mode-tabs button{border:0;background:none;padding:11px;color:var(--muted);font-weight:650;cursor:pointer;border-bottom:3px solid transparent}.mode-tabs button.active{color:var(--accent-2);border-color:var(--accent-2)}.target-content{padding:12px 0;min-height:56px}.target-grid{display:flex;gap:8px;overflow:auto;padding:2px}.target-chip{flex:0 0 auto;border:1px solid var(--line);background:var(--surface);border-radius:13px;padding:9px 12px;display:flex;align-items:center;gap:7px;cursor:pointer}.target-chip ha-icon{color:var(--accent-2)}.target-chip.selected{border-color:var(--accent-2);background:color-mix(in srgb,var(--accent-2) 12%,var(--surface));color:var(--accent-2)}.target-help{font-size:12px;color:var(--muted);padding:7px 2px}.clean-start{width:100%;border:0;border-radius:16px;padding:13px;background:var(--accent-2);color:white;font-weight:750;display:flex;align-items:center;justify-content:center;gap:9px;cursor:pointer;box-shadow:0 8px 20px color-mix(in srgb,var(--accent-2) 25%,transparent)}.clean-start:disabled{opacity:.45;box-shadow:none;cursor:not-allowed}.empty{flex:1;min-height:290px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:var(--muted);gap:8px;background:var(--soft);border-radius:14px}.empty ha-icon{--mdc-icon-size:48px;color:var(--accent)}.empty span{font-size:13px;max-width:260px}.empty.compact{min-height:110px}.metric-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.metric{background:var(--soft);padding:13px;border-radius:14px;display:flex;gap:10px;align-items:center}.metric-icon{width:32px;height:32px;display:grid;place-items:center;border-radius:10px;background:var(--surface);color:var(--accent);font-weight:800}.metric small,.total small,.life small{display:block;color:var(--muted);font-size:11px}.metric strong{display:block;margin-top:2px;font-size:14px}.control-list{margin-top:14px;display:grid;gap:8px}.control-list label{display:flex;justify-content:space-between;align-items:center;font-size:12px;font-weight:700}.control-list select{max-width:58%;border:1px solid var(--line);border-radius:10px;padding:7px;background:var(--surface)}.totals,.maintenance{margin-top:18px}.total-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.total{display:flex;align-items:center;gap:12px;padding:14px;border-radius:15px;background:var(--soft)}.total ha-icon{color:var(--accent)}.total strong{font-size:16px}.maintenance-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.life{text-align:center}.life>strong{display:block;margin-top:9px}.ring{--value:0;width:92px;height:92px;margin:auto;border-radius:50%;display:grid;place-items:center;background:conic-gradient(var(--ring) calc(var(--value)*1%),var(--line) 0);position:relative}.ring:before{content:"";position:absolute;inset:8px;border-radius:50%;background:var(--surface)}.ring span{position:relative;font-size:18px;font-weight:800}.alert{display:flex;gap:12px;align-items:center;background:color-mix(in srgb,var(--danger) 12%,var(--surface));border:1px solid color-mix(in srgb,var(--danger) 35%,transparent);border-radius:16px;padding:14px;margin-bottom:16px;color:var(--danger)}.alert div span{display:block;font-size:12px;margin-top:2px}.entity-list,.switch-list{display:grid}.entity-row,.switch-row{width:100%;border:0;border-bottom:1px solid var(--line);background:none;padding:13px 4px;display:flex;align-items:center;gap:12px;text-align:left;cursor:pointer}.entity-row:hover,.switch-row:hover{background:var(--soft)}.entity-row ha-icon,.switch-row ha-icon{color:var(--accent)}.entity-row>span{flex:1;min-width:0}.entity-row strong,.entity-row small{display:block;overflow:hidden;text-overflow:ellipsis}.entity-row small{color:var(--muted);font-size:10px;margin-top:2px}.entity-row>b{max-width:35%;text-align:right;font-size:12px}.count{font-size:11px;color:var(--muted)}.settings-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}.switch-row span{flex:1;font-weight:650}.toggle{width:38px;height:22px;border-radius:12px;background:var(--line);position:relative}.toggle:after{content:"";position:absolute;width:16px;height:16px;left:3px;top:3px;border-radius:50%;background:var(--surface);transition:.2s}.toggle.on{background:var(--accent)}.toggle.on:after{left:19px}.config-summary p{display:flex;justify-content:space-between;gap:12px;border-bottom:1px solid var(--line);padding:11px 0;font-size:12px}.config-summary strong{text-align:right;word-break:break-all}.hint{font-size:12px;color:var(--muted);margin-top:14px;line-height:1.5}footer{text-align:center;color:var(--muted);font-size:10px;padding:14px;border-top:1px solid var(--line)}.missing{padding:30px;color:var(--danger)}@keyframes rvdPulse{50%{box-shadow:0 0 0 10px color-mix(in srgb,var(--accent) 10%,transparent),0 12px 30px color-mix(in srgb,var(--ink) 14%,transparent)}}
      .dashboard-grid{grid-template-columns:1fr}.map-panel{padding:0;overflow:hidden;border-radius:26px}.map-heading{padding:20px 22px 0;margin-bottom:14px}.map-detail{width:42px;height:42px;border:0;border-radius:50%;display:grid;place-items:center;background:var(--soft);color:var(--accent-2);cursor:pointer}.map-stage{border-width:1px 0;border-radius:0;min-height:520px}.map{min-height:520px;padding:84px 18px 18px}.map-panel.is-cleaning{box-shadow:0 12px 36px color-mix(in srgb,var(--accent-2) 16%,transparent)}.session-card{top:18px;left:18px;right:18px;padding:13px 16px;border-radius:17px}.session-state{align-items:center;color:var(--ink)!important;font-weight:800}.session-state i{width:9px;height:9px;border-radius:50%;background:var(--accent-2);box-shadow:0 0 0 5px color-mix(in srgb,var(--accent-2) 14%,transparent)}.session-card b{display:flex;align-items:center;gap:5px}.session-card ha-icon{--mdc-icon-size:18px}.cleaning-console{padding:0 22px 22px;background:var(--surface)}.mode-tabs{max-width:460px;margin:auto;border:0}.mode-tabs button{font-size:16px;padding:17px 12px 12px}.target-content{min-height:70px;display:flex;align-items:center}.target-grid{width:100%;padding:4px 2px 8px}.target-chip{border-radius:18px;padding:10px 14px;box-shadow:0 4px 12px color-mix(in srgb,var(--ink) 7%,transparent)}.clean-action{display:flex;flex-direction:column;align-items:center;gap:8px;padding-top:2px}.clean-action>span{font-size:12px;font-weight:750;color:var(--muted)}.clean-start{width:82px;height:82px;padding:0;border-radius:50%;background:linear-gradient(145deg,#3298ea,var(--accent-2));box-shadow:0 12px 28px color-mix(in srgb,var(--accent-2) 35%,transparent),inset 0 0 0 5px rgba(255,255,255,.25)}.clean-start ha-icon{--mdc-icon-size:38px}.stats-panel{margin-top:0}.is-cleaning .session-state i{animation:rvdLive 1.4s infinite}@keyframes rvdLive{50%{opacity:.45;transform:scale(.8)}}
      .map-visual{position:absolute;inset:0;padding:84px 18px 18px}.map-visual .map{display:block;width:100%;height:100%;min-height:0;padding:0;object-fit:contain;opacity:.86;filter:saturate(.82) contrast(.96);mix-blend-mode:normal}.room-overlay{position:absolute;inset:84px 18px 18px;width:calc(100% - 36px);height:calc(100% - 102px);z-index:1}.room-shape{fill-opacity:.22;stroke:rgba(54,101,132,.58);stroke-width:.8;vector-effect:non-scaling-stroke;cursor:pointer;transition:fill-opacity .18s,filter .18s}.room-shape:hover{fill-opacity:.34;filter:brightness(1.04)}.room-shape.selected{fill-opacity:.46;stroke:var(--accent-2);stroke-width:2;filter:saturate(1.12)}.room-shape[data-map-area-id=""]{pointer-events:none;fill-opacity:.1}.room-label{font:650 4.8px system-ui,sans-serif;fill:#243746;text-anchor:middle;dominant-baseline:middle;paint-order:stroke;stroke:rgba(255,255,255,.94);stroke-width:1.25px;stroke-linejoin:round;pointer-events:none}
      .map-native{position:absolute;inset:0;padding:84px 18px 18px}.map-native>.rvd-native-svg{display:block;width:100%;height:100%;overflow:visible}.rvd-room-fill{fill-opacity:.86;stroke:rgba(54,101,132,.72);stroke-width:.9;vector-effect:non-scaling-stroke;pointer-events:none}.rvd-room-fill.selected{fill-opacity:.96;stroke:var(--accent-2);stroke-width:2}.rvd-room-hit{fill:transparent;stroke:transparent;stroke-width:1.5;vector-effect:non-scaling-stroke;pointer-events:all;cursor:pointer}.rvd-room-hit:hover{fill:color-mix(in srgb,var(--accent-2) 10%,transparent);stroke:color-mix(in srgb,var(--accent-2) 65%,transparent)}.rvd-room-hit[data-map-area-id=""]{pointer-events:none}.rvd-room-label{font-weight:750}
      ha-card{display:block;width:100%;max-width:1440px;margin-inline:auto}
      @media(max-width:780px){.hero{padding:23px 20px}.robot{width:64px;height:64px}.robot ha-icon{--mdc-icon-size:38px}.battery{min-width:58px}.battery-track{width:58px}main{padding:15px}.dashboard-grid,.settings-grid{grid-template-columns:1fr}.actions{grid-template-columns:repeat(5,minmax(58px,1fr));overflow:auto}.action{flex-direction:column;gap:3px;font-size:10px}.map-panel{min-height:330px}.map-stage,.map-empty{min-height:430px}.map{min-height:430px;padding-top:82px}.map-visual{padding-top:82px}.room-overlay{inset:82px 18px 18px;height:calc(100% - 100px)}.session-card{font-size:12px}.session-card>div{gap:9px}.session-card b{font-size:12px}.total-grid{grid-template-columns:1fr}.maintenance-grid{gap:8px}.ring{width:72px;height:72px}.panel{padding:16px}.map-panel{padding:0}.cleaning-console{padding:0 16px 18px}nav{padding:0 15px;gap:14px}.nav-button{font-size:12px}}
      @media(max-width:480px){.hero{display:grid;grid-template-columns:54px minmax(0,1fr);gap:5px 12px}.robot{width:54px;height:54px;grid-row:1 / span 2}.hero-copy{grid-column:2}.eyebrow{display:none}h1{font-size:21px}.battery{grid-column:2;display:flex;align-items:center;gap:2px;text-align:left;min-width:0}.battery strong{font-size:20px}.battery-track{width:70px;margin:0 0 0 7px}.metric-grid{grid-template-columns:1fr}.maintenance-grid{grid-template-columns:1fr 1fr 1fr}.life>strong{font-size:11px}.life small{display:none}.ring{width:64px;height:64px}.ring span{font-size:14px}.map-heading{padding:16px 16px 0}.map-stage,.map-empty,.map{min-height:390px}.session-card{left:10px;right:10px;top:10px;align-items:flex-start}.session-card>div:last-child{flex-direction:column;gap:4px}.mode-tabs button{font-size:14px}.clean-start{width:74px;height:74px}}
      @media(min-width:1100px){.dashboard-grid{grid-template-columns:minmax(0,1.6fr) minmax(320px,.65fr)}.map-panel{padding:20px;overflow:hidden;border-radius:22px}.map-heading{padding:0;margin-bottom:16px}.map-stage{height:500px;min-height:500px;border:1px solid var(--line);border-radius:17px}.map-visual{padding:70px 16px 12px}.room-overlay{inset:70px 16px 12px;width:calc(100% - 32px);height:calc(100% - 82px)}.session-card{top:14px;left:14px;right:14px;padding:11px 14px;border-radius:14px}.cleaning-console{padding:10px 0 0}.mode-tabs{max-width:none}.mode-tabs button{font-size:14px;padding:13px 10px 10px}.target-content{min-height:54px;padding:10px 0}.clean-action{position:relative;display:grid;padding:0}.clean-start{grid-area:1/1;width:100%;height:48px;border-radius:15px}.clean-start ha-icon{display:none}.clean-action>span{grid-area:1/1;align-self:center;justify-self:center;z-index:1;color:white;font-size:13px;font-weight:750;pointer-events:none}.stats-panel{margin-top:0}}
      @media(max-width:780px){.map-native{padding:82px 18px 18px}}
      @media(min-width:1100px){.map-native{padding:70px 16px 12px}}
      .action span ha-icon,.metric-icon ha-icon{--mdc-icon-size:18px}.battery>span ha-icon{--mdc-icon-size:16px;color:var(--accent)}
      button:focus-visible,.rvd-room-hit:focus-visible,.room-shape:focus-visible{outline:2px solid var(--accent-2);outline-offset:2px}.rvd-room-hit:focus-visible,.room-shape:focus-visible{fill:color-mix(in srgb,var(--accent-2) 14%,transparent);stroke:var(--accent-2)}
    `;
  }
}

class RobotVacuumDashboardCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._form = null;
    this._formSupport = undefined;
    this._fallbackSignature = null;
  }

  setConfig(config) {
    this.config = { entities: {}, ...config };
    this._update();
  }

  set hass(hass) {
    this._hass = hass;
    this._update();
  }

  _t(key, values) {
    return rvdTranslate(rvdLanguage(this._hass, this.config?.language), key, values);
  }

  // HA loads `ha-form` lazily. Creating a built-in card's editor once makes it available.
  async _loadForm() {
    if (customElements.get("ha-form")) return true;
    try {
      const helpers = await window.loadCardHelpers?.();
      const card = await helpers?.createCardElement?.({ type: "entities", entities: [] });
      await card?.constructor?.getConfigElement?.();
    } catch (_error) { /* fall back below */ }
    await Promise.race([customElements.whenDefined("ha-form"), new Promise((resolve) => setTimeout(resolve, 3000))]);
    return Boolean(customElements.get("ha-form"));
  }

  _update() {
    if (!this.config || !this._hass) return;
    if (this._form) {
      this._form.hass = this._hass;
      this._form.data = this._formData();
      this._form.schema = this._schema();
      return;
    }
    if (this._formSupport === false) {
      this._renderFallback();
      return;
    }
    if (this._formSupport === undefined) {
      this._formSupport = null;
      this._loadForm().then((supported) => {
        this._formSupport = supported;
        if (supported) this._createForm();
        this._update();
      });
    }
  }

  _createForm() {
    this.shadowRoot.innerHTML = "";
    const form = document.createElement("ha-form");
    form.computeLabel = (schema) => this._label(schema.name);
    form.computeHelper = (schema) => this._helper(schema.name);
    form.addEventListener("value-changed", (event) => this._formChanged(event.detail.value));
    this.shadowRoot.append(form);
    this._form = form;
  }

  _schema() {
    return [
      { name: "entity", required: true, selector: { entity: { domain: "vacuum" } } },
      { name: "name", selector: { text: {} } },
      {
        name: "language",
        selector: { select: { mode: "dropdown", options: [
          { value: "auto", label: this._t("language_auto") },
          { value: "en", label: "English" },
          { value: "nl", label: "Nederlands" },
        ] } },
      },
      {
        type: "grid", name: "", schema: [
          { name: "confirm_actions", selector: { boolean: {} } },
          { name: "show_map", selector: { boolean: {} } },
          { name: "show_details", selector: { boolean: {} } },
        ],
      },
      {
        type: "expandable", name: "", flatten: true, title: this._t("editor_targeted"), schema: [
          { name: "cleaning_regions_text", selector: { text: { multiline: true } } },
          { name: "region_command", selector: { text: {} } },
          { name: "cleaning_areas_text", selector: { text: { multiline: true } } },
        ],
      },
      {
        type: "expandable", name: "entities", title: this._t("editor_manual"),
        schema: RVD_EDITOR_FIELDS.map(([key]) => ({ name: key, selector: { entity: { domain: RVD_ENTITY_RULES[key].domains } } })),
      },
    ];
  }

  _formData() {
    return {
      ...this.config,
      language: this.config.language || "auto",
      confirm_actions: this.config.confirm_actions ?? true,
      show_map: this.config.show_map ?? true,
      show_details: this.config.show_details ?? true,
      region_command: this.config.region_command || "custom_area",
      cleaning_areas_text: rvdCollectionText("cleaning_areas", this.config.cleaning_areas),
      cleaning_regions_text: rvdCollectionText("cleaning_regions", this.config.cleaning_regions),
      entities: { ...(this.config.entities || {}) },
    };
  }

  _label(name) {
    const labels = {
      entity: "editor_vacuum_entity", name: "editor_name", language: "editor_language",
      confirm_actions: "editor_confirm", show_map: "editor_show_map", show_details: "editor_show_details",
      cleaning_regions_text: "editor_zones", region_command: "editor_zone_command", cleaning_areas_text: "editor_rooms",
    };
    const field = RVD_EDITOR_FIELDS.find(([key]) => key === name);
    return this._t(labels[name] || field?.[1] || name);
  }

  _helper(name) {
    if (name === "cleaning_regions_text") return this._t("editor_zones_help");
    if (name === "cleaning_areas_text") return this._t("editor_rooms_help");
    return undefined;
  }

  _formChanged(value) {
    const config = { ...value };
    config.cleaning_areas = rvdParseCollection("cleaning_areas", value.cleaning_areas_text);
    config.cleaning_regions = rvdParseCollection("cleaning_regions", value.cleaning_regions_text);
    delete config.cleaning_areas_text;
    delete config.cleaning_regions_text;
    if (!config.language || config.language === "auto") delete config.language;
    if (!config.name) delete config.name;
    const entities = Object.fromEntries(Object.entries(value.entities || {}).filter(([, entityId]) => entityId));
    config.entities = entities;
    this.config = config;
    this._emit(config);
  }

  // Plain-HTML editor for frontends where `ha-form` is unavailable. It renders only when
  // the config or the vacuum list changes, so typing is never interrupted by state updates.
  _renderFallback() {
    const vacuumOptions = Object.keys(this._hass.states).filter((id) => id.startsWith("vacuum.")).sort();
    const signature = JSON.stringify([this.config, vacuumOptions, rvdLanguage(this._hass, this.config.language)]);
    if (signature === this._fallbackSignature) return;
    this._fallbackSignature = signature;
    const areaLines = rvdCollectionText("cleaning_areas", this.config.cleaning_areas);
    const regionLines = rvdCollectionText("cleaning_regions", this.config.cleaning_regions);
    this.shadowRoot.innerHTML = `<style>:host{display:block;padding:8px 0;font-family:system-ui,sans-serif}.editor{display:grid;gap:14px}.group{border:1px solid var(--divider-color,#ddd);border-radius:12px;padding:14px}.group h3{font-size:14px;margin:0 0 12px}.field{display:grid;gap:5px;margin:10px 0}.field span,.help{font-size:12px;color:var(--secondary-text-color)}input,select,textarea{width:100%;padding:10px;border:1px solid var(--divider-color,#ccc);border-radius:8px;background:var(--card-background-color,#fff);color:var(--primary-text-color);box-sizing:border-box}textarea{min-height:92px;resize:vertical;font-family:ui-monospace,monospace;font-size:12px}.checks{display:grid;grid-template-columns:1fr 1fr;gap:8px}.check{display:flex;align-items:center;gap:7px;font-size:12px}.check input{width:auto}</style><div class="editor"><div class="group"><h3>${rvdEscape(this._t("editor_vacuum"))}</h3><label class="field"><span>${rvdEscape(this._t("editor_vacuum_entity"))}</span><select data-key="entity"><option value="">${rvdEscape(this._t("editor_choose"))}</option>${vacuumOptions.map((id) => `<option value="${rvdEscape(id)}" ${this.config.entity === id ? "selected" : ""}>${rvdEscape(this._hass.states[id].attributes?.friendly_name || id)}</option>`).join("")}</select></label><label class="field"><span>${rvdEscape(this._t("editor_name"))}</span><input data-key="name" value="${rvdEscape(this.config.name || "")}" placeholder="${rvdEscape(this._t("default_name"))}"></label><div class="checks">${[["confirm_actions", this._t("editor_confirm"), true], ["show_map", this._t("editor_show_map"), true], ["show_details", this._t("editor_show_details"), true]].map(([key, label, defaultValue]) => `<label class="check"><input type="checkbox" data-key="${key}" ${(this.config[key] ?? defaultValue) ? "checked" : ""}>${rvdEscape(label)}</label>`).join("")}</div></div><details class="group" open><summary><strong>${rvdEscape(this._t("editor_targeted"))}</strong></summary><p class="help">${rvdEscape(this._t("editor_targeted_help"))}</p><label class="field"><span>${rvdEscape(this._t("editor_rooms"))}</span><textarea data-collection="cleaning_areas" placeholder="${rvdEscape(this._t("editor_rooms_placeholder"))}">${rvdEscape(areaLines)}</textarea></label><label class="field"><span>${rvdEscape(this._t("editor_zones"))}</span><textarea data-collection="cleaning_regions" placeholder="${rvdEscape(this._t("editor_zones_placeholder"))}">${rvdEscape(regionLines)}</textarea></label><label class="field"><span>${rvdEscape(this._t("editor_zone_command"))}</span><input data-key="region_command" value="${rvdEscape(this.config.region_command || "custom_area")}"></label></details><details class="group"><summary><strong>${rvdEscape(this._t("editor_manual"))}</strong></summary><p class="help">${rvdEscape(this._t("editor_manual_help"))}</p>${RVD_EDITOR_FIELDS.map(([key, labelKey]) => `<label class="field"><span>${rvdEscape(this._t(labelKey))}</span><input data-entity-key="${key}" value="${rvdEscape(this.config.entities?.[key] || "")}" placeholder="${rvdEscape(this._t("editor_auto"))}"></label>`).join("")}</details></div>`;
    this.shadowRoot.querySelectorAll("[data-key]").forEach((field) => field.addEventListener("change", () => this._change(field.dataset.key, field.type === "checkbox" ? field.checked : field.value)));
    this.shadowRoot.querySelectorAll("[data-entity-key]").forEach((field) => field.addEventListener("change", () => this._changeEntity(field.dataset.entityKey, field.value)));
    this.shadowRoot.querySelectorAll("[data-collection]").forEach((field) => field.addEventListener("change", () => this._change(field.dataset.collection, rvdParseCollection(field.dataset.collection, field.value))));
  }

  _emit(config) {
    const event = new CustomEvent("config-changed", { detail: { config }, bubbles: true, composed: true });
    this.dispatchEvent(event);
  }

  _change(key, value) {
    this.config = { ...this.config, [key]: value };
    this._emit(this.config);
  }

  _changeEntity(key, value) {
    const entities = { ...(this.config.entities || {}) };
    if (value) entities[key] = value; else delete entities[key];
    this.config = { ...this.config, entities };
    this._emit(this.config);
  }
}

if (!customElements.get("robot-vacuum-dashboard-card")) customElements.define("robot-vacuum-dashboard-card", RobotVacuumDashboardCard);
if (!customElements.get("robot-vacuum-dashboard-card-editor")) customElements.define("robot-vacuum-dashboard-card-editor", RobotVacuumDashboardCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "robot-vacuum-dashboard-card",
  name: "Robot Vacuum Dashboard",
  description: rvdTranslate(rvdLanguage(), "card_description"),
  preview: true,
  documentationURL: "https://github.com/ju1ced/robot-vacuum-dashboard",
});

console.info(`%c ROBOT-VACUUM-DASHBOARD %c v${ROBOT_VACUUM_DASHBOARD_VERSION} `, "color:white;background:#138d88;font-weight:700", "color:#138d88;background:#e8f5f3");
