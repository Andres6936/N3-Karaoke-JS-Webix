import {panelOptionsTracks} from "./view/panelOptionsTracks.js";
import {panelOptionsList} from "./view/panelOptionsList.js";
import {panelListTrack} from "./view/panelListTrack.js";
import {panelProperty} from "./view/panelProperty.js";
import {panelLyrics} from "./view/panelLyrics.js";
import {panelPlay} from "./view/panelPlay.js";

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
                        panelPlay
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
