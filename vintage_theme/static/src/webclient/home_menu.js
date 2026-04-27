/** @odoo-module **/

import { Component, onMounted, useState, useRef } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { hasTouch } from "@web/core/browser/feature_detection";

export class BoardFusionHomeMenu extends Component {
    static template = "boardfusion_theme.HomeMenu";
    static props = {
        apps: { type: Array },
    };

    setup() {
        this.menus = useService("menu");
        this.command = useService("command");
        this.action = useService("action");
        
        this.state = useState({
            focusedIndex: null,
        });
        
        this.inputRef = useRef("input");
        this.rootRef = useRef("root");

        onMounted(() => {
            if (!hasTouch()) {
                this._focusInput();
            }
        });
    }

    get displayedApps() {
        return this.props.apps;
    }

    _focusInput() {
        if (this.inputRef.el) {
            this.inputRef.el.focus({ preventScroll: true });
        }
    }

    async _onAppClick(app) {
        await this.menus.selectMenu(app);
        this.env.bus.trigger("BOARD_FUSION:HIDE_HOME_MENU");
    }

    _onInputSearch() {
        const onClose = () => {
            this._focusInput();
            if (this.inputRef.el) {
                this.inputRef.el.value = "";
            }
        };
        const searchValue = `/${this.inputRef.el.value.trim()}`;
        this.command.openMainPalette({ searchValue }, onClose);
    }

    _onInputBlur() {
        if (hasTouch()) return;
        setTimeout(() => {
            if (document.activeElement === document.body) {
                this._focusInput();
            }
        }, 0);
    }
}