# -*- coding: utf-8 -*-
{
    "name": "Vintage Theme",
    "version": "19.0.1.0.0",
    "category": "Theme/Backend",
    "summary": "A clean, minimal backend theme for Odoo 19 Community",
    "description": """
        Vintage is a minimal backend theme for Odoo 19 Community Edition,
        designed for professionals who value clean UI,
        refined typography, and a distraction-free workspace.
    """,
    "author": "Joel Kasisi",
    "website": "https://www.joelkasisi.tech/",
    "license": "OPL-1",
    "price": 5.00,
    "currency": "EUR",
    "images": ["static/description/banner.png"],
    "depends": [
        "base",
        "web",
    ],
    "assets": {
        "web._assets_primary_variables": [
            (
                "after",
                "web/static/src/scss/primary_variables.scss",
                "vintage_theme/static/src/scss/primary_variables.scss",
            ),
        ],
        "web.assets_frontend": [
            "vintage_theme/static/src/scss/frontend_layout.scss",
        ],
        "web.assets_backend": [
            "vintage_theme/static/src/scss/backend_layout.scss",
            "vintage_theme/static/src/webclient/home_menu.xml",
            "vintage_theme/static/src/webclient/home_menu.js",
            "vintage_theme/static/src/webclient/webclient_patch.xml",
            "vintage_theme/static/src/webclient/webclient_patch.js",
        ],
    },
    "installable": True,
    "auto_install": False,
    "application": False,
}
