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
    }]
])


export const loadHelpers = async () => {
    for (let [name, helper] of helpers) {
        Handlebars.registerHelper(name, helper)
    }
}
