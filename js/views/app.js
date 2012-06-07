/**
 * Main view runner
 */

define([
    'jquery',
    'backbone',
    'underscore',
    'collections/todos',
    'views/todos'
], function($, _, Backbone, Todos, TodoView) {
    // Configuring App View
    var AppView = Backbone.View.extend({
        el: $('#wedoapp'),

        events: {
            'click #new-todo': 'create'
        }

    });

});
