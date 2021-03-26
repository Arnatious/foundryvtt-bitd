const helpers = new Map<string, Handlebars.HelperDelegate>([
    ["range", (context, options: Handlebars.HelperOptions) => {
        let ret = "";
        let data;

        if (options.data) {
            data = Handlebars.createFrame(options.data);
        }

        for (let i = 0, j = context; i < j; i++) {
            if (data) {
                data.index = i;
            }
            ret += options.fn(this, { data: data })
        }
        return ret;
    }],
    ["multiboxes", function (selected, options) {

        let html = options.fn(this);

        selected.forEach((selected_value: string | boolean) => {
            if (typeof selected_value === "string") {
                const escapedValue = RegExp('').escape(Handlebars.escapeExpression(selected_value));
                const rgx = new RegExp(' value=\"' + escapedValue + '\"');
                html = html.replace(rgx, "$& checked=\"checked\"");
            }
        });
        return html;
    }
    ]
])


export const loadHelpers = async () => {
    for (let [name, helper] of helpers) {
        Handlebars.registerHelper(name, helper)
    }
}
