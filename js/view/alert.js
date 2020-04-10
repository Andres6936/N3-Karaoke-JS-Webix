class Alert {
    constructor() {
        this.alert = webix.ui({
            view: "window",
            height: 250,
            width: 300,
            left: 50, top: 50,
            head: "Are you sure in delete the list?",
            body: {
                view: "toolbar",
                cols: [
                    {
                        view: "button", label: "Yes", css: "webix_danger"
                    },
                    {
                        view: "button", label: "No"
                    }
                ]
            }
        })
    }

    show() {
        this.alert.show();
    }
}

export {Alert};
