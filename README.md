ipyTabIconWidget
===============================

custom tab widget that supports icons for tab header

Installation
------------

To install use pip:

    $ pip install TabIconWidget
    $ jupyter nbextension enable --py --sys-prefix TabIconWidget


For a development installation (requires npm),

    $ git clone https://github.com/jupyter/ipyTabIconWidget.git
    $ cd ipyTabIconWidget
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix TabIconWidget
    $ jupyter nbextension enable --py --sys-prefix TabIconWidget
