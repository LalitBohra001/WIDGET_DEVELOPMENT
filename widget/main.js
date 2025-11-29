// main.js - the widget AMD module


define([], function(){
'use strict';


// We keep this module dependency-free for easy testing. In real UWA widget you'd depend on UWA modules, e.g.
// define(['UWA/Core', 'UWA/Class', 'UWA/Controls/Button'], function(UWA, Class, Button) { ... });


// Simple helper to create elements (tiny shim, not UWA)
function el(tag, attrs, html){
var e = document.createElement(tag);
if (attrs) Object.keys(attrs).forEach(function(k){ e.setAttribute(k, attrs[k]); });
if (html !== undefined) e.innerHTML = html;
return e;
}


// Public API
return {
init: function(options){
var target = options && options.target ? options.target : document.body;
target.classList.add('uwa-widget-root');


// Widget container
var container = el('div', {class: 'uwa-widget-container'});
var header = el('h2', {class:'uwa-widget-header'}, 'UWA RequireJS Widget');
container.appendChild(header);


// A simple status area
var status = el('div', {class:'uwa-widget-status'}, 'Status: Ready');
container.appendChild(status);


// Button
var btn = el('button', {class:'uwa-widget-button'}, 'Click me');
btn.addEventListener('click', function(){
status.textContent = 'Status: Button clicked at ' + (new Date()).toLocaleTimeString();
});
container.appendChild(btn);


// Example: load controller module dynamically using RequireJS
if (typeof require !== 'undefined'){
try{
require(['widget/controller'], function(Controller){
// controller.initialize can augment the widget
if (Controller && Controller.initialize) Controller.initialize(container, status);
});
}catch(e){
// ignore if require not present or module missing when embedded in some environments
console.warn('Optional controller load failed', e);
}
}


target.appendChild(container);
}
};
});