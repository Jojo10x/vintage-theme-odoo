/** @odoo-module **/

import { WebClient } from "@web/webclient/webclient";
import { patch } from "@web/core/utils/patch";
import { useService } from "@web/core/utils/hooks";
import { useState, useEffect } from "@odoo/owl";

import { BoardFusionHomeMenu } from "./home_menu";

WebClient.components = { ...WebClient.components, BoardFusionHomeMenu };

patch(WebClient.prototype, {
    setup() {
        super.setup();
        this.menuService = useService("menu");
        
        this.bfState = useState({
            homeMenuActive: true, 
        });

        useEffect((isActive) => {
            if (isActive) {
                document.body.classList.add('bf-home-menu-open');
            } else {
                document.body.classList.remove('bf-home-menu-open');
            }
        }, () => [this.bfState.homeMenuActive]);

        this.env.bus.addEventListener("BOARD_FUSION:HIDE_HOME_MENU", () => {
            this.bfState.homeMenuActive = false;
        });
        
        this.env.bus.addEventListener("BOARD_FUSION:TOGGLE_HOME_MENU", () => {
            this.bfState.homeMenuActive = !this.bfState.homeMenuActive;
        });
    }
});