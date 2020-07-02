/**
 *
 *
 * @export
 * @class BITDActorSheet
 * @extends {ActorSheet}
 */
export class BITDActorSheet extends ActorSheet {
    /**
     *
     *
     * @readonly
     * @static
     * @type {FormApplicationOptions}
     * @memberof BITDActorSheet
     */
    static get defaultOptions(): FormApplicationOptions {
        return mergeObject(super.defaultOptions, {
            classes: ["foundryvtt-bitd", "sheet", "actor", "character"],
            template: "systems/foundryvtt-bitd/templates/sheets/actor-sheet.hbs",
            width: 600,
            height: 600,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
        })
    }

    /**
     *
     *
     * @override
     * @param {(HTMLElement | JQuery<HTMLElement>)} html
     * @memberof BITDActorSheet
     */
    activateListeners(html: HTMLElement | JQuery<HTMLElement>) {
        super.activateListeners(html);
    }
}
