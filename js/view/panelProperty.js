let panelProperty = {
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
};

export {panelProperty}
