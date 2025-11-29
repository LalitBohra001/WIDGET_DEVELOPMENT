// Simple RequireJS config. Adjust 'paths' if you have local UWA libraries or a specific AMD loader.
require.config({
baseUrl: '.',
paths: {
// If you have UWA libraries available locally or on your server, point these paths to them.
// Example (uncomment and change):
// 'UWA': 'libs/UWA',


// For this demo we only depend on a minimal UWA-like shim (small subset) implemented inline.
'widget': 'widget'
}
});


// For a real 3DEXPERIENCE environment, you'd use the platform's AMD loader (AmdLoader.js) and map UWA paths.
// This demo simply loads our widget entry module.
require(['widget/main'], function(MainWidget){
// Mount the widget into the page
MainWidget.init({
target: document.getElementById('appRoot')
});
});