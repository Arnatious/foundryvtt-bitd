/**
 *
 *
 * @export
 * @class BITDActorSheet
 * @extends {ActorSheet}
 */
export class BITDActorSheet extends ActorSheet {
    static get defaultOptions(): FormApplicationOptions {
        return mergeObject(super.defaultOptions, {
            classes: ["sheet", "actor"],
            template: "systems/foundryvtt-bitd/templates/actor/actor-sheet.html",
            width: 600,
            height: 600,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
        })
    }
}
