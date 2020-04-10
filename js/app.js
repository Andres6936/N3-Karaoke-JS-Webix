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
                {
                    borderless: true,
                    view: "list",
                    template: "#name# - #count#",
                    select: true,
                    data: [
                        {id: 1, name: "The Shawshank Redemption", count: 1994},
                        {id: 2, name: "The Godfather", count: 1972},
                        {id: 3, name: "The Godfather: Part II", count: 1974},
                        {id: 4, name: "The Good, the Bad and the Ugly", count: 1966},
                        {id: 5, name: "My Fair Lady", count: 1964},
                        {id: 6, name: "12 Angry Men", count: 1957}
                    ]
                },
                {
                    rows: [
                        {view: "button", value: "Add List"},
                        {
                            id: "buttonDeleteList", view: "button", value: "Delete List", css: "webix_danger"
                        },
                        {view: "button", value: "Update List"},
                    ]
                }
            ]
        },
        // Four Row
        {
            cols: [
                {view: "button", value: "Search Track"},
                {view: "button", value: "List of Tracks"},
                {view: "button", value: "Add Track"},
                {view: "button", value: "Delete Track"},
            ]
        },
    ]
};
