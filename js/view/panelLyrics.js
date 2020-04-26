let panelLyrics = {
    rows: [
        // Header of the component
        // Reference: Adding Headers
        // to Components (Webix Docs)
        {
            view: "template",
            template: "Lyrics",
            type: "section"
        },
        // Body of the component
        {
            id: "panelLyrics",
            view: "textarea",
            readonly: true,
        }
    ]
};

export {panelLyrics}
