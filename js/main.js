/**
 * main.js
 *
 * Main loader file for Require.js
 */

require.config({
    paths: {
        jquery: 'lib/jquery/jquery-min',
        underscore: 'lib/underscore/underscore',
        backbone: 'lib/backbone/backbone'
    }
});

require(['jquery'], function($) {  // need to pass in jquery -- learned the hard way
    window.console.log($('body'));
    $(function() {
        window.console.log($('body'));
    });
});
/*
require(['views/app'], function(AppView){
    var app_view = new AppView;
});
  */