# Changelog

## Unreleased

- Add English and Dutch translations. The card, editor, confirmations and card-picker description follow the Home Assistant profile language and fall back to English.
- Add an optional `language` option (`en` or `nl`) to override the detected language.
- Let `scripts/preview.html` take `?lang=en` or `?lang=nl`.
- Find entities through the entity registry: same device as the vacuum plus the integration's translation key (for example `stats_area`, `total_stats_time`). Statistics now work with the entity names of Home Assistant 2026.9, in any UI language, and after renames. Name matching remains as a fallback.
- Re-render only when an entity the card shows changes, and never while a dropdown or field has focus. Styles are shared through `adoptedStyleSheets`.
- Rebuild the editor on Home Assistant's `ha-form` with entity, area and boolean selectors; the plain editor remains as a fallback and no longer loses focus.
- Read Home Assistant's own room-to-area mapping (`area_mapping`) to show area chips and to link map rooms to areas by segment ID. Show a setup hint when the vacuum supports area cleaning but has no mapping.
- Format values, options and fan speeds with Home Assistant's formatters, and report failed actions with a Home Assistant notification.
- Sanitize the map SVG with an allowlist of elements and attributes, and escape every interpolated label.
- Use Material Design icons, label icon-only controls, expose tabs and switches to assistive technology, and make map rooms keyboard-selectable.
- Show the device manufacturer in the header instead of a fixed "ECOVACS".
- Add a `node --test` suite (happy-dom) and run it in CI.

## 0.6.0

- Render the trusted Home Assistant Ecovacs SVG inline so its native cleaning path, robot and charging station remain independent visual layers.
- Insert vivid room fills below the live layers and transparent room hit targets plus Home Assistant area labels above them.
- Sanitize fetched SVG content, retain atomic revision swaps and fall back automatically to the image renderer when inline SVG is unavailable.
- Add an optional `map_render_mode: image` compatibility fallback.

## 0.5.3

- Preload each new Ecovacs map frame off-screen and swap it in only after it has loaded.
- Keep the previous live frame visible while the next frame is loading or when a frame fails.

## 0.5.2

- Use one stable live-map composition instead of switching opacity with the vacuum state.
- Preserve the map image element across Home Assistant updates to prevent flashing and needless image reloads.

## 0.5.1

- Keep the original Ecovacs live path, robot marker and charging station visible below the room overlay.
- Automatically reduce room-fill opacity while the vacuum is cleaning so live movement remains dominant.

## 0.5.0

- Constrain the card to a readable width on ultrawide Home Assistant dashboards.
- Restore the compact desktop map-and-status layout shown in the repository preview.
- Keep the app-style full-width map and round cleaning control on tablets and phones.

## 0.4.2

- Prefer Home Assistant area-registry names for room labels and area controls.
- Reduce visual map noise with a muted source image, cleaner room fills and lighter labels.

## 0.4.1

- Discover the companion geometry sensor by its schema when Home Assistant assigns the generic `sensor.map_geometry` entity ID.

## 0.4.0

- Add optional interactive room polygons, labels and direct room selection on the live map.
- Add automatic discovery and a manual override for the Ecovacs Map Data geometry sensor.
- Include the source for the event-driven Ecovacs Map Data companion integration.

## 0.3.0

- Redesign the overview around a dominant app-style live map.
- Add a floating live session card, compact mode navigation and a central round cleaning control.
- Improve responsive behavior for mobile dashboards.

## 0.2.1

- Refresh the embedded vacuum map whenever the Home Assistant image entity updates, so the robot position remains live in the overview.

## 0.2.0

- Add multi-room cleaning through Home Assistant `vacuum.clean_area`.
- Add configurable saved Ecovacs custom regions.
- Restyle the map panel after the Ecovacs app with a grid, session card and cleaning modes.
- Extend the visual editor for rooms, region coordinates and the Ecovacs command.

## 0.1.1

- Add the required dashboard preview for HACS validation.
- Update GitHub Actions to current Node.js-compatible action versions.
- Complete the GitHub repository metadata required by HACS.

## 0.1.0

- Initial HACS-compatible dashboard card.
- Automatic Ecovacs entity discovery with manual mapping overrides.
- Overview, map, cleaning statistics, maintenance and settings panels.
- Start, pause, stop, return-to-base and locate controls.
- Built-in visual editor and responsive light/dark styling.
