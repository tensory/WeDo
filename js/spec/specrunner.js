/**
 * specrunner.js
 *
 * Require.js loader for files needed by Jasmine suite
 */

// File location for SpecRunner is js/spec
var libs = '../lib/';
require.config({
    paths: {
        'jquery': libs + 'jquery/jquery-min',
        'jasmine': libs + 'jasmine/jasmine-1.2.0/jasmine',
        'jasmine-html': libs + 'jasmine/jasmine-1.2.0/jasmine-html',
        'app': '../views/app',
        'appSpec': 'views/appSpec'
    }
});

// Init Jasmine here instead of within SpecRunner.html
define(['jquery',
        'jasmine',
        'jasmine-html',
        'appSpec'], function($) {
    (function() {
        var jasmineEnv = jasmine.getEnv();
        jasmineEnv.updateInterval = 1000;
        var htmlReporter = new jasmine.HtmlReporter();

        jasmineEnv.addReporter(htmlReporter);

        jasmineEnv.specFilter = function(spec) {
            return htmlReporter.specFilter(spec);
        };

        var currentWindowOnload = window.onload; // Preserve window.onload default
        window.onload = function() {
            if (currentWindowOnload) {
                currentWindowOnload();
            }
            execJasmine();
        };

        function execJasmine() {
            jasmineEnv.execute();
        }
    })();
});