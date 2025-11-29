# UWA RequireJS Widget Sample


A minimal widget demonstrating RequireJS-based AMD module layout for a UWA-style widget. Useful for local testing and as a starting point for porting into a 3DEXPERIENCE / Enovia environment.


How to run locally:
1. Place the project files on any static server and open `index.html` in your browser.
	- Note: Opening `index.html` using the `file://` protocol often blocks `fetch()` requests that load local JSON files. Use a local HTTP server instead to avoid CORS / file restrictions.
2. Example: start a simple HTTP server from the project root and open http://localhost:8000:

```powershell
# Python 3 built-in server
python -m http.server 8000

# Or using Node.js http-server (install once):
npm install -g http-server
http-server -p 8000
```
3. The widget will mount into `#appRoot` automatically when the page is opened.

Troubleshooting:
- If the table doesn't render, open the browser DevTools Console to check for errors.
- Make sure you are serving the project over HTTP (not `file://`). See commands above to start a minimal server.
- This sample uses `require.toUrl('./data.json')` inside `widget/main.js` to resolve a module-relative URL; if you change paths or `baseUrl` in `require-config.js`, double-check the generated URL in the console logs.


Notes for 3DEXPERIENCE / Enovia embedding:
- Replace `require.config` mapping with the platform-provided AMD loader (AmdLoader.js) and proper `UWA` path mappings.
- Convert the demo helpers to use real UWA modules, e.g. `UWA/Core`, `UWA/Class`, `UWA/Controls/Button`.
- Add platform-specific registration/manifest files as required by your environment.