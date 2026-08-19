# Changelog

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
