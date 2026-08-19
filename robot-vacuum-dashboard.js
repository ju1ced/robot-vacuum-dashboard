const ROBOT_VACUUM_DASHBOARD_VERSION = "0.1.0";

const RVD_LABELS = {
  cleaning: "Aan het schoonmaken",
  docked: "Op het laadstation",
  returning: "Terug naar het station",
  paused: "Gepauzeerd",
  idle: "Gereed",
  error: "Controle nodig",
  unavailable: "Niet bereikbaar",
  unknown: "Status onbekend",
};

const RVD_ENTITY_RULES = {
  map: { domains: ["image", "camera"], terms: ["map", "kaart"] },
  mop_attached: { domains: ["binary_sensor"], terms: ["mop_attached", "mop", "dweil"] },
  cleaning_area: { domains: ["sensor"], terms: ["cleaning_cycle_area", "stats_area", "cleaned_area"] },
  cleaning_time: { domains: ["sensor"], terms: ["cleaning_cycle_time", "stats_time", "cleaning_time"] },
  total_area: { domains: ["sensor"], terms: ["total_statistics_area", "total_area"] },
  total_time: { domains: ["sensor"], terms: ["total_statistics_time", "total_time"] },
  total_cleanings: { domains: ["sensor"], terms: ["total_statistics_cleanings", "total_cleanings", "cleanings"] },
  water_level: { domains: ["select", "number", "sensor"], terms: ["water_level", "water", "waterhoeveelheid"] },
  work_mode: { domains: ["select"], terms: ["work_mode", "cleaning_mode", "modus"] },
  clean_count: { domains: ["number"], terms: ["clean_count", "cleanings", "rondes"] },
  error: { domains: ["sensor"], terms: ["error", "fout"] },
  main_brush: { domains: ["sensor"], terms: ["main_brush", "component_brush", "hoofdborstel"] },
  side_brush: { domains: ["sensor"], terms: ["side_brush", "component_side_brush", "zijborstel"] },
  filter: { domains: ["sensor"], terms: ["filter", "component_filter"] },
  continuous_cleaning: { domains: ["switch"], terms: ["continuous_cleaning", "continue", "hervatten"] },
  carpet_boost: { domains: ["switch"], terms: ["carpet_auto_fan_speed_boost", "carpet_boost", "tapijt"] },
  advanced_mode: { domains: ["switch"], terms: ["advanced_mode", "advanced", "geavanceerd"] },
};

const rvdEscape = (value) => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

class RobotVacuumDashboardCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._tab = "overview";
    this._renderQueued = false;
  }

  setConfig(config) {
    if (!config?.entity || !String(config.entity).startsWith("vacuum.")) {
      throw new Error("Selecteer een geldige vacuum.* entiteit.");
    }
    this.config = {
      name: "Robotstofzuiger",
      confirm_actions: true,
      show_map: true,
      show_details: true,
      entities: {},
      ...config,
    };
    this._queueRender();
  }

  set hass(hass) {
    this._hass = hass;
    this._queueRender();
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
    return { entity: entity || "vacuum.deebot", name: "Robotstofzuiger" };
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

  _relatedStates() {
    const root = this._root().toLowerCase();
    const rootWords = root.split("_").filter((word) => word.length > 2);
    return Object.entries(this._hass.states).filter(([id, state]) => {
      if (id === this.config.entity) return true;
      const haystack = `${id} ${state.attributes?.friendly_name || ""}`.toLowerCase();
      return haystack.includes(root) || rootWords.filter((word) => haystack.includes(word)).length >= Math.min(2, rootWords.length);
    });
  }

  _entity(key) {
    const configured = this.config.entities?.[key];
    if (configured && this._hass.states[configured]) return configured;
    const rule = RVD_ENTITY_RULES[key];
    if (!rule) return configured;
    const candidates = this._relatedStates().filter(([id]) => rule.domains.includes(id.split(".")[0]));
    let best = null;
    let bestScore = 0;
    for (const [id, state] of candidates) {
      const haystack = `${id} ${state.attributes?.friendly_name || ""}`.toLowerCase();
      const score = rule.terms.reduce((total, term, index) => total + (haystack.includes(term) ? 20 - index : 0), 0);
      if (score > bestScore) { best = id; bestScore = score; }
    }
    return best;
  }

  _state(key) {
    const id = this._entity(key);
    return id ? this._hass.states[id] : null;
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

  _formatState(state, fallback = "Niet beschikbaar") {
    if (!state || ["unknown", "unavailable", "none", ""].includes(String(state.state).toLowerCase())) return fallback;
    const unit = state.attributes?.unit_of_measurement || "";
    return `${state.state}${unit ? ` ${unit}` : ""}`;
  }

  _icon(name) {
    const icons = {
      play: "▶", pause: "Ⅱ", stop: "■", home: "⌂", locate: "◎",
      battery: "ϟ", area: "▱", time: "◷", runs: "↻", mop: "≋",
    };
    return icons[name] || "•";
  }

  _render() {
    const vacuum = this._vacuum();
    if (!vacuum) {
      this.shadowRoot.innerHTML = `<style>${this._styles()}</style><ha-card><div class="missing">Entiteit ${rvdEscape(this.config.entity)} niet gevonden.</div></ha-card>`;
      return;
    }
    this.shadowRoot.innerHTML = `
      <style>${this._styles()}</style>
      <ha-card>
        ${this._header(vacuum)}
        <nav>
          ${this._navButton("overview", "Overzicht")}
          ${this._navButton("details", "Alle data")}
          ${this._navButton("settings", "Instellingen")}
        </nav>
        <main>${this._tab === "overview" ? this._overview(vacuum) : this._tab === "details" ? this._details() : this._settings()}</main>
        <footer>Robot Vacuum Dashboard · v${ROBOT_VACUUM_DASHBOARD_VERSION}</footer>
      </ha-card>`;
    this._bindEvents();
  }

  _header(vacuum) {
    const state = vacuum.state;
    const battery = this._battery();
    const error = state === "error" || Boolean(vacuum.attributes?.error && !["None", "no_error"].includes(vacuum.attributes.error));
    return `<header class="hero ${error ? "hero-error" : ""}">
      <div class="robot ${state === "cleaning" ? "working" : ""}"><ha-icon icon="mdi:robot-vacuum-variant"></ha-icon></div>
      <div class="hero-copy">
        <div class="eyebrow">ECOVACS · ROBOT VACUUM</div>
        <h1>${rvdEscape(this.config.name || vacuum.attributes?.friendly_name || "Robotstofzuiger")}</h1>
        <p><span class="status-dot ${rvdEscape(state)}"></span>${rvdEscape(RVD_LABELS[state] || state)}</p>
      </div>
      <div class="battery" title="Accuniveau">
        <span>${this._icon("battery")}</span><strong>${battery ?? "–"}</strong><small>${battery === null ? "" : "%"}</small>
        <div class="battery-track"><i style="width:${battery ?? 0}%"></i></div>
      </div>
    </header>`;
  }

  _navButton(tab, label) {
    return `<button class="nav-button ${this._tab === tab ? "active" : ""}" data-tab="${tab}">${label}</button>`;
  }

  _overview(vacuum) {
    const map = this._state("map");
    const picture = map?.attributes?.entity_picture;
    const mapUrl = picture ? this._hass.hassUrl(picture) : "";
    const error = this._state("error");
    return `
      ${vacuum.state === "error" || (error && !["0", "none", "no error"].includes(error.state.toLowerCase())) ? `<div class="alert"><ha-icon icon="mdi:alert-circle"></ha-icon><div><strong>Aandacht nodig</strong><span>${rvdEscape(error?.attributes?.description || error?.state || vacuum.attributes?.error || "Controleer de robot")}</span></div></div>` : ""}
      <section class="actions">
        ${this._actionButton("vacuum.start", "play", "Start", "primary")}
        ${this._actionButton("vacuum.pause", "pause", "Pauze")}
        ${this._actionButton("vacuum.stop", "stop", "Stop")}
        ${this._actionButton("vacuum.return_to_base", "home", "Naar huis")}
        ${this._actionButton("vacuum.locate", "locate", "Vind robot")}
      </section>
      <div class="dashboard-grid ${!this.config.show_map ? "without-map" : ""}">
        ${this.config.show_map ? `<section class="panel map-panel">
          <div class="panel-heading"><div><span class="kicker">LIVE</span><h2>Plattegrond</h2></div>${map ? `<button class="text-button" data-more-info="${rvdEscape(map.entity_id)}">Details</button>` : ""}</div>
          ${mapUrl ? `<img class="map" src="${rvdEscape(mapUrl)}" alt="Kaart van de schoonmaakzone">` : `<div class="empty"><ha-icon icon="mdi:map-outline"></ha-icon><strong>Geen kaart gevonden</strong><span>Koppel de map-entiteit in de kaartinstellingen.</span></div>`}
        </section>` : ""}
        <section class="panel stats-panel">
          <div class="panel-heading"><div><span class="kicker">ACTUEEL</span><h2>Laatste schoonmaak</h2></div></div>
          <div class="metric-grid">
            ${this._metric("area", "Oppervlakte", this._formatState(this._state("cleaning_area")))}
            ${this._metric("time", "Duur", this._formatState(this._state("cleaning_time")))}
            ${this._metric("mop", "Dweil", this._state("mop_attached")?.state === "on" ? "Geplaatst" : "Niet geplaatst")}
            ${this._metric("runs", "Zuigkracht", vacuum.attributes?.fan_speed || "Standaard")}
          </div>
          ${this._controls(vacuum)}
        </section>
      </div>
      ${this.config.show_details ? `<section class="panel totals">
        <div class="panel-heading"><div><span class="kicker">HISTORIE</span><h2>Alle schoonmaakbeurten</h2></div></div>
        <div class="total-grid">
          ${this._total("mdi:counter", "Schoonmaakbeurten", this._formatState(this._state("total_cleanings")))}
          ${this._total("mdi:texture-box", "Totale oppervlakte", this._formatState(this._state("total_area")))}
          ${this._total("mdi:timer-outline", "Totale tijd", this._formatState(this._state("total_time")))}
        </div>
      </section>
      ${this._maintenancePanel()}` : ""}`;
  }

  _actionButton(service, icon, label, kind = "") {
    return `<button class="action ${kind}" data-service="${service}"><span>${this._icon(icon)}</span><b>${label}</b></button>`;
  }

  _metric(icon, label, value) {
    return `<div class="metric"><span class="metric-icon">${this._icon(icon)}</span><div><small>${label}</small><strong>${rvdEscape(value)}</strong></div></div>`;
  }

  _total(icon, label, value) {
    return `<div class="total"><ha-icon icon="${icon}"></ha-icon><div><small>${label}</small><strong>${rvdEscape(value)}</strong></div></div>`;
  }

  _controls(vacuum) {
    const fanSpeeds = vacuum.attributes?.fan_speed_list || [];
    const selects = [
      fanSpeeds.length ? { label: "Zuigkracht", type: "fan", value: vacuum.attributes?.fan_speed, options: fanSpeeds } : null,
      this._selectControl("work_mode", "Werkmodus"),
      this._selectControl("water_level", "Waterniveau"),
    ].filter(Boolean);
    if (!selects.length) return "";
    return `<div class="control-list">${selects.map((item) => `<label><span>${item.label}</span><select data-control="${item.type}" data-entity="${item.entity || ""}">${item.options.map((option) => `<option ${String(option) === String(item.value) ? "selected" : ""}>${rvdEscape(option)}</option>`).join("")}</select></label>`).join("")}</div>`;
  }

  _selectControl(key, label) {
    const entity = this._entity(key);
    const state = entity && this._hass.states[entity];
    if (!state || !["select", "number"].includes(entity.split(".")[0])) return null;
    if (entity.startsWith("number.")) return null;
    return { label, type: "select", entity, value: state.state, options: state.attributes?.options || [] };
  }

  _maintenancePanel() {
    const items = [
      ["Hoofdborstel", this._maintenance("main_brush", "component_brush")],
      ["Zijborstel", this._maintenance("side_brush", "component_side_brush")],
      ["Filter", this._maintenance("filter", "component_filter")],
    ];
    return `<section class="panel maintenance"><div class="panel-heading"><div><span class="kicker">ONDERHOUD</span><h2>Onderdelen</h2></div></div><div class="maintenance-grid">${items.map(([label, value]) => `<div class="life"><div class="ring" style="--value:${value ?? 0};--ring:${value === null ? "var(--muted)" : value <= 15 ? "var(--danger)" : value <= 35 ? "var(--warning)" : "var(--accent)"}"><span>${value === null ? "–" : `${value}%`}</span></div><strong>${label}</strong><small>${value === null ? "Geen data" : value <= 15 ? "Vervangen" : value <= 35 ? "Binnenkort controleren" : "In orde"}</small></div>`).join("")}</div></section>`;
  }

  _details() {
    const states = this._relatedStates().sort(([a], [b]) => a.localeCompare(b));
    return `<section class="panel data-panel"><div class="panel-heading"><div><span class="kicker">DIAGNOSTIEK</span><h2>Alle gekoppelde data</h2></div><span class="count">${states.length} entiteiten</span></div><div class="entity-list">${states.map(([id, state]) => `<button class="entity-row" data-more-info="${rvdEscape(id)}"><ha-icon icon="${rvdEscape(state.attributes?.icon || this._domainIcon(id))}"></ha-icon><span><strong>${rvdEscape(state.attributes?.friendly_name || id)}</strong><small>${rvdEscape(id)}</small></span><b>${rvdEscape(this._formatState(state))}</b></button>`).join("")}</div></section>`;
  }

  _settings() {
    const toggles = [
      ["continuous_cleaning", "Hervatten na opladen", "mdi:battery-sync"],
      ["carpet_boost", "Boost op tapijt", "mdi:rug"],
      ["advanced_mode", "Geavanceerde modus", "mdi:tune-variant"],
    ];
    const available = toggles.map(([key, label, icon]) => [this._entity(key), label, icon]).filter(([id]) => id);
    return `<div class="settings-grid"><section class="panel"><div class="panel-heading"><div><span class="kicker">ROBOT</span><h2>Slim gedrag</h2></div></div>${available.length ? `<div class="switch-list">${available.map(([id, label, icon]) => { const on = this._hass.states[id]?.state === "on"; return `<button class="switch-row" data-toggle="${id}"><ha-icon icon="${icon}"></ha-icon><span>${label}</span><i class="toggle ${on ? "on" : ""}"></i></button>`; }).join("")}</div>` : `<div class="empty compact"><span>Geen ondersteunde schakelaars gevonden.</span></div>`}</section><section class="panel"><div class="panel-heading"><div><span class="kicker">KAART</span><h2>Configuratie</h2></div></div><div class="config-summary"><p><span>Vacuüm</span><strong>${rvdEscape(this.config.entity)}</strong></p><p><span>Kaart</span><strong>${rvdEscape(this._entity("map") || "Niet gekoppeld")}</strong></p><p><span>Actiebevestiging</span><strong>${this.config.confirm_actions ? "Aan" : "Uit"}</strong></p></div><p class="hint">Open de dashboard-editor om entiteiten handmatig toe te wijzen of onderdelen te verbergen.</p></section></div>`;
  }

  _domainIcon(id) {
    const domain = id.split(".")[0];
    return ({ vacuum: "mdi:robot-vacuum", sensor: "mdi:eye-outline", binary_sensor: "mdi:checkbox-marked-circle-outline", switch: "mdi:toggle-switch-outline", select: "mdi:format-list-bulleted", number: "mdi:numeric", image: "mdi:image-outline", camera: "mdi:camera-outline", button: "mdi:gesture-tap-button" })[domain] || "mdi:circle-outline";
  }

  async _call(serviceName) {
    const [domain, service] = serviceName.split(".");
    if (this.config.confirm_actions && ["start", "stop", "return_to_base"].includes(service)) {
      const labels = { start: "de schoonmaak starten", stop: "de huidige taak stoppen", return_to_base: "de robot naar het station sturen" };
      if (!window.confirm(`Wil je ${labels[service]}?`)) return;
    }
    await this._hass.callService(domain, service, {}, { entity_id: this.config.entity });
  }

  _moreInfo(entityId) {
    const event = new Event("hass-more-info", { bubbles: true, composed: true });
    event.detail = { entityId };
    this.dispatchEvent(event);
  }

  _bindEvents() {
    this.shadowRoot.querySelectorAll("[data-tab]").forEach((button) => button.addEventListener("click", () => { this._tab = button.dataset.tab; this._render(); }));
    this.shadowRoot.querySelectorAll("[data-service]").forEach((button) => button.addEventListener("click", () => this._call(button.dataset.service)));
    this.shadowRoot.querySelectorAll("[data-more-info]").forEach((button) => button.addEventListener("click", () => this._moreInfo(button.dataset.moreInfo)));
    this.shadowRoot.querySelectorAll("[data-toggle]").forEach((button) => button.addEventListener("click", async () => {
      const id = button.dataset.toggle;
      await this._hass.callService("switch", this._hass.states[id]?.state === "on" ? "turn_off" : "turn_on", {}, { entity_id: id });
    }));
    this.shadowRoot.querySelectorAll("select[data-control]").forEach((select) => select.addEventListener("change", async () => {
      if (select.dataset.control === "fan") await this._hass.callService("vacuum", "set_fan_speed", { fan_speed: select.value }, { entity_id: this.config.entity });
      else await this._hass.callService("select", "select_option", { option: select.value }, { entity_id: select.dataset.entity });
    }));
  }

  _styles() {
    return `
      :host{--accent:var(--primary-color,#138d88);--accent-2:#2786c7;--ink:var(--primary-text-color,#17212b);--muted:var(--secondary-text-color,#6c7782);--surface:var(--ha-card-background,var(--card-background-color,#fff));--soft:color-mix(in srgb,var(--accent) 8%,var(--surface));--line:color-mix(in srgb,var(--ink) 10%,transparent);--danger:var(--error-color,#d84b4b);--warning:#e9a23b;display:block}*{box-sizing:border-box}ha-card{overflow:hidden;border-radius:28px;background:var(--surface);color:var(--ink);font-family:var(--paper-font-body1_-_font-family,system-ui,sans-serif)}button,select{font:inherit;color:inherit}.hero{min-height:156px;padding:30px 34px;display:flex;align-items:center;gap:22px;background:radial-gradient(circle at 85% 15%,color-mix(in srgb,var(--accent-2) 20%,transparent),transparent 42%),linear-gradient(135deg,color-mix(in srgb,var(--accent) 16%,var(--surface)),color-mix(in srgb,var(--accent-2) 8%,var(--surface)))}.hero-error{background:linear-gradient(135deg,color-mix(in srgb,var(--danger) 15%,var(--surface)),var(--surface))}.robot{width:82px;height:82px;border-radius:50%;display:grid;place-items:center;background:var(--surface);box-shadow:0 12px 30px color-mix(in srgb,var(--ink) 14%,transparent);border:1px solid var(--line)}.robot ha-icon{--mdc-icon-size:48px;color:var(--accent)}.robot.working{animation:rvdPulse 2s infinite}.hero-copy{min-width:0;flex:1}.eyebrow,.kicker{font-size:10px;letter-spacing:.16em;font-weight:800;color:var(--accent)}h1,h2,p{margin:0}h1{font-size:clamp(25px,4vw,38px);line-height:1.12;margin:5px 0 8px}.hero p{display:flex;align-items:center;gap:8px;color:var(--muted);font-weight:600}.status-dot{width:9px;height:9px;border-radius:50%;background:var(--muted)}.status-dot.cleaning{background:var(--accent);box-shadow:0 0 0 5px color-mix(in srgb,var(--accent) 14%,transparent)}.status-dot.error{background:var(--danger)}.status-dot.docked{background:#47a760}.battery{text-align:right;min-width:90px}.battery>span{color:var(--accent)}.battery strong{font-size:30px}.battery small{font-weight:700}.battery-track{width:88px;height:5px;background:var(--line);border-radius:4px;margin-top:6px;overflow:hidden}.battery-track i{display:block;height:100%;background:linear-gradient(90deg,var(--accent-2),var(--accent));border-radius:4px}nav{display:flex;padding:0 26px;border-bottom:1px solid var(--line);gap:22px}.nav-button{border:0;background:none;padding:17px 3px 14px;color:var(--muted);font-weight:700;cursor:pointer;border-bottom:3px solid transparent}.nav-button.active{color:var(--accent);border-color:var(--accent)}main{padding:26px;background:color-mix(in srgb,var(--surface) 97%,var(--ink))}.actions{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:18px}.action{border:1px solid var(--line);background:var(--surface);border-radius:17px;padding:13px 8px;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;transition:.18s}.action:hover{transform:translateY(-2px);border-color:color-mix(in srgb,var(--accent) 50%,var(--line));box-shadow:0 8px 20px color-mix(in srgb,var(--ink) 8%,transparent)}.action span{color:var(--accent);font-size:18px}.action.primary{background:var(--accent);color:white;border-color:var(--accent)}.action.primary span{color:white}.dashboard-grid{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(280px,.65fr);gap:18px}.dashboard-grid.without-map{grid-template-columns:1fr}.panel{background:var(--surface);border:1px solid var(--line);border-radius:22px;padding:20px;min-width:0}.panel-heading{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}.panel-heading h2{font-size:19px;margin-top:2px}.text-button{border:0;background:var(--soft);color:var(--accent);padding:7px 11px;border-radius:10px;cursor:pointer;font-weight:700}.map-panel{min-height:410px;display:flex;flex-direction:column}.map{width:100%;height:100%;min-height:330px;object-fit:contain;border-radius:14px;background:color-mix(in srgb,var(--ink) 4%,var(--surface))}.empty{flex:1;min-height:290px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:var(--muted);gap:8px;background:var(--soft);border-radius:14px}.empty ha-icon{--mdc-icon-size:48px;color:var(--accent)}.empty span{font-size:13px;max-width:260px}.empty.compact{min-height:110px}.metric-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.metric{background:var(--soft);padding:13px;border-radius:14px;display:flex;gap:10px;align-items:center}.metric-icon{width:32px;height:32px;display:grid;place-items:center;border-radius:10px;background:var(--surface);color:var(--accent);font-weight:800}.metric small,.total small,.life small{display:block;color:var(--muted);font-size:11px}.metric strong{display:block;margin-top:2px;font-size:14px}.control-list{margin-top:14px;display:grid;gap:8px}.control-list label{display:flex;justify-content:space-between;align-items:center;font-size:12px;font-weight:700}.control-list select{max-width:58%;border:1px solid var(--line);border-radius:10px;padding:7px;background:var(--surface)}.totals,.maintenance{margin-top:18px}.total-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.total{display:flex;align-items:center;gap:12px;padding:14px;border-radius:15px;background:var(--soft)}.total ha-icon{color:var(--accent)}.total strong{font-size:16px}.maintenance-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.life{text-align:center}.life>strong{display:block;margin-top:9px}.ring{--value:0;width:92px;height:92px;margin:auto;border-radius:50%;display:grid;place-items:center;background:conic-gradient(var(--ring) calc(var(--value)*1%),var(--line) 0);position:relative}.ring:before{content:"";position:absolute;inset:8px;border-radius:50%;background:var(--surface)}.ring span{position:relative;font-size:18px;font-weight:800}.alert{display:flex;gap:12px;align-items:center;background:color-mix(in srgb,var(--danger) 12%,var(--surface));border:1px solid color-mix(in srgb,var(--danger) 35%,transparent);border-radius:16px;padding:14px;margin-bottom:16px;color:var(--danger)}.alert div span{display:block;font-size:12px;margin-top:2px}.entity-list,.switch-list{display:grid}.entity-row,.switch-row{width:100%;border:0;border-bottom:1px solid var(--line);background:none;padding:13px 4px;display:flex;align-items:center;gap:12px;text-align:left;cursor:pointer}.entity-row:hover,.switch-row:hover{background:var(--soft)}.entity-row ha-icon,.switch-row ha-icon{color:var(--accent)}.entity-row>span{flex:1;min-width:0}.entity-row strong,.entity-row small{display:block;overflow:hidden;text-overflow:ellipsis}.entity-row small{color:var(--muted);font-size:10px;margin-top:2px}.entity-row>b{max-width:35%;text-align:right;font-size:12px}.count{font-size:11px;color:var(--muted)}.settings-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}.switch-row span{flex:1;font-weight:650}.toggle{width:38px;height:22px;border-radius:12px;background:var(--line);position:relative}.toggle:after{content:"";position:absolute;width:16px;height:16px;left:3px;top:3px;border-radius:50%;background:var(--surface);transition:.2s}.toggle.on{background:var(--accent)}.toggle.on:after{left:19px}.config-summary p{display:flex;justify-content:space-between;gap:12px;border-bottom:1px solid var(--line);padding:11px 0;font-size:12px}.config-summary strong{text-align:right;word-break:break-all}.hint{font-size:12px;color:var(--muted);margin-top:14px;line-height:1.5}footer{text-align:center;color:var(--muted);font-size:10px;padding:14px;border-top:1px solid var(--line)}.missing{padding:30px;color:var(--danger)}@keyframes rvdPulse{50%{box-shadow:0 0 0 10px color-mix(in srgb,var(--accent) 10%,transparent),0 12px 30px color-mix(in srgb,var(--ink) 14%,transparent)}}
      @media(max-width:780px){.hero{padding:23px 20px}.robot{width:64px;height:64px}.robot ha-icon{--mdc-icon-size:38px}.battery{min-width:58px}.battery-track{width:58px}main{padding:15px}.dashboard-grid,.settings-grid{grid-template-columns:1fr}.actions{grid-template-columns:repeat(5,minmax(58px,1fr));overflow:auto}.action{flex-direction:column;gap:3px;font-size:10px}.map-panel{min-height:330px}.map{min-height:250px}.total-grid{grid-template-columns:1fr}.maintenance-grid{gap:8px}.ring{width:72px;height:72px}.panel{padding:16px}nav{padding:0 15px;gap:14px}.nav-button{font-size:12px}}
      @media(max-width:480px){.hero{display:grid;grid-template-columns:54px minmax(0,1fr);gap:5px 12px}.robot{width:54px;height:54px;grid-row:1 / span 2}.hero-copy{grid-column:2}.eyebrow{display:none}h1{font-size:21px}.battery{grid-column:2;display:flex;align-items:center;gap:2px;text-align:left;min-width:0}.battery strong{font-size:20px}.battery-track{width:70px;margin:0 0 0 7px}.metric-grid{grid-template-columns:1fr}.maintenance-grid{grid-template-columns:1fr 1fr 1fr}.life>strong{font-size:11px}.life small{display:none}.ring{width:64px;height:64px}.ring span{font-size:14px}}
    `;
  }
}

class RobotVacuumDashboardCardEditor extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: "open" }); }

  setConfig(config) { this.config = { entities: {}, ...config }; this._render(); }

  set hass(hass) { this._hass = hass; this._render(); }

  _render() {
    if (!this.config || !this._hass) return;
    const vacuumOptions = Object.keys(this._hass.states).filter((id) => id.startsWith("vacuum.")).sort();
    const fields = [
      ["map", "Kaart (image of camera)"], ["mop_attached", "Dweil geplaatst"],
      ["cleaning_area", "Oppervlakte huidige beurt"], ["cleaning_time", "Duur huidige beurt"],
      ["total_area", "Totale oppervlakte"], ["total_time", "Totale tijd"],
      ["total_cleanings", "Aantal schoonmaakbeurten"], ["water_level", "Waterniveau"],
      ["work_mode", "Werkmodus"], ["clean_count", "Aantal rondes"], ["error", "Foutstatus"],
      ["main_brush", "Hoofdborstel"], ["side_brush", "Zijborstel"], ["filter", "Filter"],
    ];
    this.shadowRoot.innerHTML = `<style>:host{display:block;padding:8px 0;font-family:system-ui,sans-serif}.editor{display:grid;gap:14px}.group{border:1px solid var(--divider-color,#ddd);border-radius:12px;padding:14px}.group h3{font-size:14px;margin:0 0 12px}.field{display:grid;gap:5px;margin:10px 0}.field span{font-size:12px;color:var(--secondary-text-color)}input,select{width:100%;padding:10px;border:1px solid var(--divider-color,#ccc);border-radius:8px;background:var(--card-background-color,#fff);color:var(--primary-text-color);box-sizing:border-box}.checks{display:grid;grid-template-columns:1fr 1fr;gap:8px}.check{display:flex;align-items:center;gap:7px;font-size:12px}.check input{width:auto}</style><div class="editor"><div class="group"><h3>Robotstofzuiger</h3><label class="field"><span>Vacuümentiteit</span><select data-key="entity"><option value="">Kies een robot…</option>${vacuumOptions.map((id) => `<option value="${rvdEscape(id)}" ${this.config.entity === id ? "selected" : ""}>${rvdEscape(this._hass.states[id].attributes?.friendly_name || id)}</option>`).join("")}</select></label><label class="field"><span>Naam</span><input data-key="name" value="${rvdEscape(this.config.name || "")}" placeholder="Robotstofzuiger"></label><div class="checks">${[["confirm_actions","Acties bevestigen",true],["show_map","Kaart tonen",true],["show_details","Details tonen",true]].map(([key,label,defaultValue]) => `<label class="check"><input type="checkbox" data-key="${key}" ${(this.config[key] ?? defaultValue) ? "checked" : ""}>${label}</label>`).join("")}</div></div><details class="group"><summary><strong>Handmatige entiteitstoewijzing</strong></summary><p style="font-size:12px;color:var(--secondary-text-color)">Laat velden leeg om entiteiten automatisch te herkennen.</p>${fields.map(([key,label]) => `<label class="field"><span>${label}</span><input data-entity-key="${key}" value="${rvdEscape(this.config.entities?.[key] || "")}" placeholder="Automatisch"></label>`).join("")}</details></div>`;
    this.shadowRoot.querySelectorAll("[data-key]").forEach((field) => field.addEventListener("change", () => this._change(field.dataset.key, field.type === "checkbox" ? field.checked : field.value)));
    this.shadowRoot.querySelectorAll("[data-entity-key]").forEach((field) => field.addEventListener("change", () => this._changeEntity(field.dataset.entityKey, field.value)));
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
  description: "Een compleet en samenhangend dashboard voor robotstofzuigers.",
  preview: true,
  documentationURL: "https://github.com/ju1ced/robot-vacuum-dashboard",
});

console.info(`%c ROBOT-VACUUM-DASHBOARD %c v${ROBOT_VACUUM_DASHBOARD_VERSION} `, "color:white;background:#138d88;font-weight:700", "color:#138d88;background:#e8f5f3");
