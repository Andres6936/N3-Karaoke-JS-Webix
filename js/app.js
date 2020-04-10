import {panelListTrack} from "./view/panelListTrack.js";
import {panelOptionsTracks} from "./view/panelOptionsTracks.js";
import {panelOptionsList} from "./view/panelOptionsList.js";

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
                        {
                            id: "panelProperty",
                            view: "property",
                            borderless: true,
                            editable: false,
                            elements: [
                                {label: "Details", type: "label"},
                                {label: "Name:", type: "text", id: "name"},
                                {label: "Track:", type: "text", id: "track"},
                                {label: "Duration:", type: "text", id: "duration"},
                                {label: "Difficulty:", type: "text", id: "difficulty"}
                            ]
                        },
                        {
                            id: "panelLyrics",
                            view: "textarea",
                            label: "Lyrics",
                            labelPosition: "top",
                            readonly: true,
                        },
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
