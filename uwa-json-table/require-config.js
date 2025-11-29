require.config({
  baseUrl: '.',
  paths: {
    'widget': 'widget'
  }
});

require(['widget/main'], function (Widget) {
  Widget.init({
    target: document.getElementById('appRoot')
  });
});
