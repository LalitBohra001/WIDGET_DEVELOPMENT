define([], function(){
'use strict';


return {
initialize: function(container, statusEl){
// Add a small inp//ut and a 'Set status' button to demonstrate dynamic behavior
var wrapper = document.createElement('div');
wrapper.className = 'uwa-widget-controller';


var input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Type status message...';
input.className = 'uwa-widget-input';


var setBtn = document.createElement('button');
setBtn.textContent = 'Set status';
setBtn.className = 'uwa-widget-setbtn';


setBtn.addEventListener('click', function(){
statusEl.textContent = 'Status: ' + (input.value || '(empty)');
});


wrapper.appendChild(input);
wrapper.appendChild(setBtn);
container.appendChild(wrapper);
}
};
});