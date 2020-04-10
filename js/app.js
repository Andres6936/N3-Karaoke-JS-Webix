import {panelListTrack} from "./view/panelListTrack.js";
import {panelOptionsTracks} from "./view/panelOptionsTracks.js";
import {panelOptionsList} from "./view/panelOptionsList.js";
import {panelProperty} from "./view/panelProperty.js";
import {panelLyrics} from "./view/panelLyrics.js";

let appLayout = {
    width: 800,
    minHeight: 600,
    gravity: 100,
    rows: [
        // First Row
        {
            template: "<img src='img/Banner.png' alt='Banner' height='100%' width='100%' />",
            height: 100,
            borderless: true,
        },
        // Second Row
        {
            cols: [
                {
                    template: "<img src='img/Billie.jpg' alt='Billie' height='100%' width='100%'/>",
                    borderless: true,
                },
                {
                    rows: [
                        panelProperty,
                        panelLyrics,
                        {
                            cols: [
                                {
                                    view: "button", type: "icon", value: "Play",
                                    icon: "wxi-menu-right", css: "webix_transparent"
                                },
                                {
                                    view: "button", type: "icon", value: "Stop",
                                    icon: "wxi-checkbox-blank", css: "webix_transparent"
                                },
                                {
                                    view: "button", type: "icon", value: "Next",
                                    icon: "wxi-angle-double-right", css: "webix_transparent"
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        // Third Row
        {
            cols: [
                panelListTrack,
                panelOptionsList
            ]
        },
        // Four Row
        panelOptionsTracks
    ]
};

export {appLayout}
