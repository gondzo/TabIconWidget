import ipywidgets as widgets
from traitlets import Unicode


@widgets.register('TabWidget.TabWidget')
class TabWidget(widgets.Tab):
    """"""
    _view_name = Unicode('TabWidgetView').tag(sync=True)
    _model_name = Unicode('TabWidgetModel').tag(sync=True)
    _view_module = Unicode('TabIconWidget').tag(sync=True)
    _model_module = Unicode('TabIconWidget').tag(sync=True)
    value = Unicode('TabWidget').tag(sync=True)
