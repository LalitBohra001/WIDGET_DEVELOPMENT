# UWA RequireJS Widget Sample


A minimal widget demonstrating RequireJS-based AMD module layout for a UWA-style widget. Useful for local testing and as a starting point for porting into a 3DEXPERIENCE / Enovia environment.


How to run locally:
1. Place the project files on any static server (or open `index.html` directly in a browser).
2. Open `index.html` — the widget will mount into `#appRoot`.


Notes for 3DEXPERIENCE / Enovia embedding:
- Replace `require.config` mapping with the platform-provided AMD loader (AmdLoader.js) and proper `UWA` path mappings.
- Convert the demo helpers to use real UWA modules, e.g. `UWA/Core`, `UWA/Class`, `UWA/Controls/Button`.
- Add platform-specific registration/manifest files as required by your environment.