var widgets = require('jupyter-js-widgets');
var _ = require('underscore');


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including `_model_name`, `_view_name`, `_model_module`
// and `_view_module` when different from the base class.
//
// When serialiazing entire widget state for embedding, only values different from the
// defaults will be specified.
var TabWidgetModel = widgets.TabModel.extend({
    defaults: _.extend({}, widgets.TabModel.prototype.defaults, {
        _model_name : 'TabWidgetModel',
        _view_name : 'TabWidgetView',
        _model_module : 'TabIconWidget',
        _view_module : 'TabIconWidget',
        value : 'TabWidget'
    })
});


// Custom View. Renders the widget model.
var TabWidgetView = widgets.TabView.extend({
    /**
     * Updates the tab page titles.
     */
    update_titles: function() {
        var titles = this.model.get('_titles');
        var that = this;
        _.each(titles, function(title, page_index) {
           var tab_text = that.containers[page_index];
            if (tab_text !== undefined) {
                tab_text.html(title);
            }
        });
    },
});


module.exports = {
    TabWidgetModel : TabWidgetModel,
    TabWidgetView : TabWidgetView
};
