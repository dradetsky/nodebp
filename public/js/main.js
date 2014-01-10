require.config({
  paths: {
    'cs' : 'lib/cs',
    'coffee-script' : 'lib/coffee-script',
    text          : 'lib/text',
    jquery        : 'lib/jquery',
    underscore    : 'lib/underscore',
    backbone      : 'lib/backbone',
  }
});

require(['cs!csmain',], function(App) {
  App.init()
});
